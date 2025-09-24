import React, { useState, useRef, useEffect } from "react";

const PhotoUploadTab = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // Cloudinary configuration (replace with your actual values)
  const CLOUDINARY_UPLOAD_PRESET = "dochelp_unsigned";
  const CLOUDINARY_CLOUD_NAME = "drxbmhba1";

  const handleFileUpload = async (files) => {
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const uploadedUrls = [];
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Validate file type
        if (!file.type.startsWith('image/')) {
          alert('Please upload only image files');
          continue;
        }

        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
          alert('File size should be less than 10MB');
          continue;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        formData.append('folder', 'skin-analysis'); // Optional: organize in folders

        // Upload to Cloudinary
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: 'POST',
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error('Upload failed');
        }

        const data = await response.json();
        uploadedUrls.push({
          id: data.public_id,
          url: data.secure_url,
          originalName: file.name,
          uploadedAt: new Date().toISOString(),
        });

        // Update progress
        setUploadProgress(((i + 1) / files.length) * 100);
      }

      setUploadedImages(prev => [...prev, ...uploadedUrls]);
      
      // Simulate skin analysis (replace with actual API call)
      setTimeout(() => {
        simulateSkinAnalysis(uploadedUrls);
      }, 1000);

    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const simulateSkinAnalysis = (images) => {
    // This would be replaced with actual AI analysis API call
    const mockResults = {
      confidence: Math.floor(Math.random() * 30) + 70, // 70-99%
      condition: ['Eczema', 'Acne', 'Dermatitis', 'Normal Skin', 'Psoriasis'][Math.floor(Math.random() * 5)],
      severity: ['Mild', 'Moderate', 'Severe'][Math.floor(Math.random() * 3)],
      recommendations: [
        'Consult with a dermatologist for proper diagnosis',
        'Keep the affected area clean and dry',
        'Avoid harsh soaps and chemicals',
        'Apply moisturizer regularly',
        'Consider using prescribed topical treatments'
      ],
      riskFactors: [
        'Family history of skin conditions',
        'Environmental allergens',
        'Stress levels',
        'Dietary factors'
      ]
    };
    
    setAnalysisResults(mockResults);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const removeImage = (imageId) => {
    setUploadedImages(prev => prev.filter(img => img.id !== imageId));
    if (uploadedImages.length === 1) {
      setAnalysisResults(null);
    }
  };

  // const user = JSON.parse(localStorage.getItem("user"));
  // const firstName = user?.fullName?.split(" ")[0]; // Safely extract first name
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
  const storedUser = localStorage.getItem("user");
  console.log("Stored user from localStorage:", storedUser); // DEBUG

  if (storedUser) {
    try {
      const user = JSON.parse(storedUser);
      console.log("Parsed user:", user); // DEBUG

      const name = user?.fullName?.split(" ")[0];
      console.log("Extracted first name:", name); // DEBUG

      if (name) setFirstName(name);
    } catch (err) {
      console.error("Failed to parse user:", err);
    }
  }
}, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Skin Health Analysis
          </h1>

          {/* Greeting if user is logged in */}
          {/* {firstName && (
            <p className="text-xl font-semibold text-emerald-700 mb-2">
              Hi, {firstName}! 👋
            </p>
          )} */}

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Upload clear photos of your skin condition for AI-powered analysis. Our system will provide insights and recommendations based on visual assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Upload Photos</h2>
            
            {/* Drag and Drop Area */}
            <div
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-emerald-500 bg-emerald-50' 
                  : 'border-gray-300 hover:border-emerald-400 hover:bg-emerald-25'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
              />
              
              <div className="text-6xl mb-4 text-emerald-500">📷</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Drop your images here
              </h3>
              <p className="text-gray-500 mb-4">
                or click to browse files
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                disabled={isUploading}
              >
                {isUploading ? 'Uploading...' : 'Choose Files'}
              </button>
              
              <div className="mt-4 text-sm text-gray-400">
                <p>Supported formats: JPG, PNG, WEBP</p>
                <p>Maximum file size: 10MB</p>
              </div>
            </div>

            {/* Upload Progress */}
            {isUploading && (
              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Uploading...</span>
                  <span>{Math.round(uploadProgress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Uploaded Images */}
            {uploadedImages.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  Uploaded Images ({uploadedImages.length})
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {uploadedImages.map((image) => (
                    <div key={image.id} className="relative group">
                      <img
                        src={image.url}
                        alt={image.originalName}
                        className="w-full h-32 object-cover rounded-lg shadow-md"
                      />
                      <button
                        onClick={() => removeImage(image.id)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        ×
                      </button>
                      <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        {image.originalName.length > 15 
                          ? image.originalName.substring(0, 15) + '...' 
                          : image.originalName}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Analysis Results */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Analysis Results</h2>
            
            {!analysisResults ? (
              <div className="text-center text-gray-500 py-12">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-lg">Upload images to get AI-powered analysis</p>
                <p className="text-sm mt-2">Results will appear here after processing</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Confidence Score */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">Confidence Score</h3>
                    <span className="text-2xl font-bold text-emerald-600">{analysisResults.confidence}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${analysisResults.confidence}%` }}
                    ></div>
                  </div>
                </div>

                {/* Detected Condition */}
                <div className="border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Detected Condition</h3>
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {analysisResults.condition}
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
                      {analysisResults.severity}
                    </span>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommendations</h3>
                  <ul className="space-y-2">
                    {analysisResults.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span className="text-gray-600">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Risk Factors */}
                <div className="border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Consider These Factors</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {analysisResults.riskFactors.map((factor, index) => (
                      <div key={index} className="bg-yellow-50 text-yellow-800 px-3 py-2 rounded-lg text-sm">
                        {factor}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 text-xl">⚠️</span>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">Medical Disclaimer</h4>
                      <p className="text-red-700 text-sm">
                        This analysis is for informational purposes only and should not replace professional medical advice. 
                        Please consult with a qualified dermatologist for proper diagnosis and treatment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-full font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300">
                    Find Dermatologist
                  </button>
                  <button className="flex-1 border-2 border-emerald-600 text-emerald-600 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300">
                    Save Results
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tips for Better Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="font-semibold text-gray-800 mb-2">Good Lighting</h3>
              <p className="text-gray-600 text-sm">Take photos in natural daylight for best results</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📐</div>
              <h3 className="font-semibold text-gray-800 mb-2">Clear Focus</h3>
              <p className="text-gray-600 text-sm">Ensure the affected area is in sharp focus</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📏</div>
              <h3 className="font-semibold text-gray-800 mb-2">Close-up Views</h3>
              <p className="text-gray-600 text-sm">Take multiple angles for comprehensive analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoUploadTab;
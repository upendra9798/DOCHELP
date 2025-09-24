import React, { useState } from "react";

// Healthcare Professional Form Component
const HealthcareProfessionalForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    specialization: "",
    licenseNumber: "",
    experience: "",
    agreeTerms: false,
    newsletter: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.specialization) newErrors.specialization = 'Specialization is required';
    if (!formData.licenseNumber.trim()) newErrors.licenseNumber = 'License number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ ...formData, userType: "professional" });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">👩‍⚕️</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Healthcare Professional Registration</h2>
          <p className="text-gray-600">Join our network of certified medical professionals</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-200'
                }`}
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-200'
                }`}
                placeholder="Enter your last name"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-200'
              }`}
              placeholder="Enter your professional email address"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Professional Information */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Specialization *</label>
            <select
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.specialization ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-200'
              }`}
            >
              <option value="">Select your specialization</option>
              <option value="dermatology">Dermatology</option>
              <option value="cosmetic-dermatology">Cosmetic Dermatology</option>
              <option value="pediatric-dermatology">Pediatric Dermatology</option>
              <option value="dermatopathology">Dermatopathology</option>
              <option value="mohs-surgery">Mohs Surgery</option>
              <option value="general-medicine">General Medicine</option>
              <option value="family-medicine">Family Medicine</option>
              <option value="internal-medicine">Internal Medicine</option>
              <option value="other">Other</option>
            </select>
            {errors.specialization && <p className="text-red-500 text-sm mt-1">{errors.specialization}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Medical License Number *</label>
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.licenseNumber ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-200'
                }`}
                placeholder="Enter your license number"
              />
              {errors.licenseNumber && <p className="text-red-500 text-sm mt-1">{errors.licenseNumber}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Years of Experience</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:border-emerald-500 focus:ring-emerald-200"
                placeholder="Optional"
                min="0"
              />
            </div>
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Password *</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-200'
                }`}
                placeholder="Enter password"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Confirm Password *</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.confirmPassword ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-200'
                }`}
                placeholder="Re-enter password"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
          </div>

          {/* Toggle Password Visibility */}
          <div>
            <label className="inline-flex items-center text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox mr-2"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </label>
          </div>

          {/* Consent */}
          <div className="space-y-3">
            <label className="inline-flex items-start text-gray-700">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="form-checkbox mr-2 mt-1"
              />
              <span>I agree to the <a href="#" className="text-emerald-600 hover:underline">terms and conditions</a> *</span>
            </label>
            {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}

            <label className="inline-flex items-start text-gray-700">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="form-checkbox mr-2 mt-1"
              />
              <span>Subscribe to our newsletter for updates</span>
            </label>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {isSubmitting ? "Registering..." : "Register Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HealthcareProfessionalForm;
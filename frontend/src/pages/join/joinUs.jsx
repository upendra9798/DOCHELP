import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const JoinUsTab = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "patient",
    specialization: "",
    licenseNumber: "",
    experience: "",
    agreeTerms: false,
    newsletter: true,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (submitError) {
      setSubmitError("");
    }
  };

  const handleSignup = async (submitData) => {
    setIsLoading(true);
    setSubmitError("");

    try {
      console.log("Sending signup data:", submitData); // Debug log

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const data = await res.json();
      console.log("Response:", { status: res.status, data }); // Debug log

      if (!res.ok) {
        throw new Error(
          data.error ||
            data.message ||
            `HTTP ${res.status}: Failed to create account`
        );
      }

      // Success
      console.log("Signup successful:", data);
      alert("Account created successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        userType: "patient",
        specialization: "",
        licenseNumber: "",
        experience: "",
        agreeTerms: false,
        newsletter: true,
      });
    } catch (error) {
      console.error("Signup error:", error);
      setSubmitError(error.message || "Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setSubmitError("First name is required");
            return toast.error("First name is required");
    }
    // if (!formData.lastName.trim()) {
    //   setSubmitError("Last name is required");
    //         return toast.error("Last name is required");;
    // }
    if (!formData.email.trim()) {
      setSubmitError("Email is required");
      return toast.error("Email is required");
    }
    if (!formData.password) {
      setSubmitError("Password is required");
      return toast.error("Password is required");;
    }
    if (formData.password !== formData.confirmPassword) {
      setSubmitError("Passwords do not match");
      return false;
    }
    if (formData.password.length < 6) {
      setSubmitError("Password must be at least 6 characters long");
      return toast.error("Password must be at least 6 characters long");;
    }
    if (!formData.agreeTerms) {
      setSubmitError("Please agree to the terms and conditions");
      return false;
    }

    // Professional validation
    if (formData.userType === "professional") {
      if (!formData.specialization) {
        setSubmitError(
          "Specialization is required for healthcare professionals"
        );
        return false;
      }
      if (!formData.licenseNumber.trim()) {
        setSubmitError(
          "License number is required for healthcare professionals"
        );
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError("");

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    if (!validateForm()) {
      return;
    }

    // Prepare data for submission (remove confirmPassword)
    const submitData = {
      // firstName: formData.firstName.trim(),
      // lastName: formData.lastName.trim(),
      fullName: formData.firstName + " " + formData.lastName,
      username: formData.username,
      email: formData.email.trim(),
      password: formData.password,
      userType: formData.userType,
      newsletter: formData.newsletter,
      ...(formData.userType === "professional" && {
        specialization: formData.specialization,
        licenseNumber: formData.licenseNumber.trim(),
        experience: formData.experience,
      }),
    };

    console.log("Submitting form with data:", submitData);
    handleSignup(submitData);
  };

  const membershipBenefits = [
    {
      icon: "🏥",
      title: "Expert Consultations",
      description:
        "Connect with certified dermatologists and healthcare professionals",
    },
    {
      icon: "🤖",
      title: "AI-Powered Analysis",
      description:
        "Get instant skin condition analysis using advanced AI technology",
    },
    {
      icon: "👥",
      title: "Community Support",
      description:
        "Join a supportive community of individuals on similar health journeys",
    },
    {
      icon: "📚",
      title: "Educational Resources",
      description:
        "Access comprehensive skin health guides and treatment information",
    },
    {
      icon: "📱",
      title: "Mobile App Access",
      description:
        "Use our mobile app for convenient health tracking and consultations",
    },
    {
      icon: "🔒",
      title: "Privacy & Security",
      description:
        "Your health data is protected with enterprise-grade security",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      image: "/avatars/girl1.png",
      text: "DOCHELP helped me identify my skin condition early. The community support has been incredible!",
    },
    {
      name: "Dr. Michael Chen",
      role: "Dermatologist",
      image: "/avatars/boy1.png",
      text: "As a healthcare provider, I love how DOCHELP bridges the gap between patients and professional care.",
    },
    {
      name: "Emma Rodriguez",
      role: "Community Member",
      image: "/avatars/girl2.png",
      text: "The AI analysis gave me confidence to seek proper treatment. Highly recommend joining!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Join Our Community
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Become part of a revolutionary healthcare community dedicated to
            skin health and wellness
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab("register")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "register"
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              Register Now
            </button>
            <button
              onClick={() => setActiveTab("benefits")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "benefits"
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              Member Benefits
            </button>
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "testimonials"
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              Testimonials
            </button>
          </div>
        </div>

        {/* Registration Tab */}
        {activeTab === "register" && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Create Your Account
                </h2>
                <p className="text-gray-600">
                  Join thousands of users transforming their skin health journey
                </p>
              </div>

              {/* Error Display */}
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-600 text-sm font-medium">
                    {submitError}
                  </p>
                </div>
              )}

              <div className="space-y-6">
                {/* User Type Selection */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    I am a:
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="relative">
                      <input
                        type="radio"
                        name="userType"
                        value="patient"
                        checked={formData.userType === "patient"}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.userType === "patient"
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-gray-200 hover:border-emerald-300"
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-3xl mb-2">🧑‍💼</div>
                          <div className="font-semibold text-gray-800">
                            Patient
                          </div>
                          <div className="text-sm text-gray-600">
                            Seeking skin health guidance
                          </div>
                        </div>
                      </div>
                    </label>
                    <label className="relative">
                      <input
                        type="radio"
                        name="userType"
                        value="professional"
                        checked={formData.userType === "professional"}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.userType === "professional"
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-gray-200 hover:border-emerald-300"
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-3xl mb-2">👩‍⚕️</div>
                          <div className="font-semibold text-gray-800">
                            Healthcare Professional
                          </div>
                          <div className="text-sm text-gray-600">
                            Dermatologist or medical expert
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Personal Information */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Username *
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Professional Fields */}
                {formData.userType === "professional" && (
                  <>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Specialization *
                      </label>
                      <select
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                      >
                        <option value="">Select your specialization</option>
                        <option value="dermatology">Dermatology</option>
                        <option value="cosmetic-dermatology">
                          Cosmetic Dermatology
                        </option>
                        <option value="pediatric-dermatology">
                          Pediatric Dermatology
                        </option>
                        <option value="general-medicine">
                          General Medicine
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          License Number *
                        </label>
                        <input
                          type="text"
                          name="licenseNumber"
                          value={formData.licenseNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                          placeholder="Medical license number"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Years of Experience
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                        >
                          <option value="">Select experience</option>
                          <option value="0-2">0-2 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="6-10">6-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Password */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-500 hover:text-emerald-600"
                      >
                        {showPassword ? "👁️" : "👁️‍🗨️"}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-3">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">
                      I agree to the{" "}
                      <a href="#" className="text-emerald-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-emerald-600 hover:underline">
                        Privacy Policy
                      </a>{" "}
                      *
                    </span>
                  </label>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">
                      Subscribe to our newsletter for skin health tips and
                      updates
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading || !formData.agreeTerms}
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Creating Account...
                    </div>
                  ) : (
                    "Join DOCHELP Community"
                  )}
                </button>

                <p className="text-sm text-center mt-4">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-blue-500 hover:underline">
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === "benefits" && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Join DOCHELP?
              </h2>
              <p className="text-gray-600 text-lg">
                Discover the exclusive benefits of being part of our community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {membershipBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                >
                  <div className="text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setActiveTab("register")}
                className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Journey Today
              </button>
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === "testimonials" && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Our Community Says
              </h2>
              <p className="text-gray-600 text-lg">
                Real stories from real people in our community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="text-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-100"
                    />
                    <h3 className="text-xl font-bold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-emerald-600 font-semibold">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl text-emerald-500 mb-3">❝</div>
                    <p className="text-gray-600 italic leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Share Your Success Story?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of satisfied community members
              </p>
              <button
                onClick={() => setActiveTab("register")}
                className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinUsTab;

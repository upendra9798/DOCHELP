import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tools = [
    {
      title: "Join DOCHELP: Your Skin Health Community Hub",
      img: "/tools1.jpg",
      author: "Upendra Kushwaha",
      category: "Community",
    },
    {
      title: "Revolutionizing Skin Health: DOCHELP Community Platform",
      img: "/tools2.jpg",
      author: "Upendra Kushwaha",
      category: "Innovation",
    },
    {
      title: "Personalized Skin Disease Detection with DOCHELP",
      img: "/tools3.jpg",
      author: "Upendra Kushwaha",
      category: "AI Detection",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      name: "Facebook",
      color: "hover:text-blue-400",
      url: "https://facebook.com",
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      color: "hover:text-sky-400",
      url: "https://twitter.com",
    },
    {
      icon: <FaLinkedinIn />,
      name: "LinkedIn",
      color: "hover:text-blue-300",
      url: "https://linkedin.com",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      color: "hover:text-pink-400",
      url: "https://instagram.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent leading-tight">
              Your Skin's Best Ally
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Join DOCHELP to share photos of your skin conditions and receive
              tailor-made advice from our supportive community of health
              professionals and fellow users.
            </p>
            <button
              onClick={() => navigate("/join")}
              className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-emerald-700 hover:to-green-700"
            >
              Get Started Today
            </button>
          </div>

          {/* Hero Images */}
          <div
            className={`mt-16 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { src: "/homeImg1.jpg", alt: "Skin 1" },
                { src: "/homeImg2.jpg", alt: "Skin 2" },
                { src: "/homeImg3.jpg", alt: "Skin 3" },
              ].map((img, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold">Skin Health Care</p>
                    <p className="text-sm">Professional Treatment</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="relative group">
                <img
                  src="/aboutImg.jpg"
                  alt="About"
                  className="w-80 h-80 object-cover rounded-3xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="lg:w-2/3 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                About DOCHELP
              </h2>
              <p className="text-emerald-600 text-xl font-semibold mb-4">
                Dr. Alexa Young - Founder & Lead Dermatologist
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
                With over 15 years of experience in dermatology, I founded
                DOCHELP to bridge the gap between professional medical advice
                and accessible skin care guidance. Our platform combines
                cutting-edge AI technology with human expertise to provide
                personalized skin health solutions for everyone.
              </p>

              <div className="flex justify-center lg:justify-start gap-6 text-2xl">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${social.color} transform hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                    title={social.name}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidance in Healing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Guidance in Healing
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our comprehensive approach to skin health combines expertise,
              community, and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Our Purpose",
                description:
                  "We help individuals understand their skin conditions better through expert guidance and AI-powered analysis.",
                icon: "🎯",
                img: "/healing1.jpg",
              },
              {
                number: "02",
                title: "Drive Collaboration",
                description:
                  "Our community thrives on shared experiences, peer support, and collaborative learning.",
                icon: "🤝",
                img: "/healing2.jpg",
              },
              {
                number: "03",
                title: "Available Resources",
                description:
                  "Access essential tools, expert advice, and comprehensive resources for optimal skin health.",
                icon: "📚",
                img: "/healing3.jpg",
              },
              {
                number: "04",
                title: "Supportive Community",
                description:
                  "Join a network of individuals dedicated to skin care, recovery, and mutual support.",
                icon: "👥",
                img: "/healing4.jpg",
              },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <div className="text-emerald-600 font-bold text-lg mb-2">
                      {item.number} • {item.title}
                    </div>
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Tools Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Helpful Tools
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our suite of innovative tools designed to support your
              skin health journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tool.img}
                    alt="Tool"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {tool.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {tool.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-medium">{tool.author}</p>
                    <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm hover:underline transition-all duration-300">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Skin Health?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who trust DOCHELP for their skin care
            journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

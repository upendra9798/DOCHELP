import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"; 

const Footer = () => {
 const socialLinks = [
    { icon: <FaFacebookF />, name: "Facebook", color: "hover:text-blue-400", url: "https://facebook.com" },
    { icon: <FaTwitter />, name: "Twitter", color: "hover:text-sky-400", url: "https://twitter.com" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", color: "hover:text-blue-300", url: "https://linkedin.com" },
    { icon: <FaInstagram />, name: "Instagram", color: "hover:text-pink-400", url: "https://instagram.com" },
  ];

  return (
    <footer className="relative mt-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-600/10 to-green-600/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your skin health journey? We're here to help you every step of the way.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Address */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:bg-white/10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-bold text-2xl mb-4 text-emerald-400">Visit Us</h3>
              </div>
              <div className="text-center space-y-2 text-gray-300">
                <p className="font-medium">500 Terry Francine St.</p>
                <p className="font-medium">San Francisco, CA 94158</p>
                <p className="text-sm text-gray-400 mt-4">
                  Located in the heart of San Francisco's medical district
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:bg-white/10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="font-bold text-2xl mb-4 text-emerald-400">Contact</h3>
              </div>
              <div className="text-center space-y-3 text-gray-300">
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:123-456-7890" className="text-white hover:text-emerald-400 transition-colors duration-300">
                    123-456-7890
                  </a>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:info@dochelp.com" 
                    className="text-white hover:text-emerald-400 transition-colors duration-300 break-all"
                  >
                    info@dochelp.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:bg-white/10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🕒</span>
                </div>
                <h3 className="font-bold text-2xl mb-4 text-emerald-400">Hours</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Mon - Fri:</span>
                  <span>8:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Saturday:</span>
                  <span>9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sunday:</span>
                  <span>9:00 AM – 9:00 PM</span>
                </div>
                <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg text-center">
                  <p className="text-emerald-400 text-sm font-medium">24/7 Online Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center border-t border-white/10 pt-12">
          <h3 className="font-bold text-2xl mb-6 text-emerald-400">Connect With Us</h3>
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-14 h-14 bg-white/10 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20 border border-white/20 hover:border-emerald-400/50`}
                title={social.name}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto mb-8">
            <p className="text-gray-300 mb-4">Stay updated with our latest skin health tips</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-full font-medium hover:from-emerald-600 hover:to-green-600 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌸</span>
              <span className="font-bold text-lg bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                DOCHELP
              </span>
            </div>
            <p>© 2024 DOCHELP. All rights reserved. | Transforming skin health through community.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] pt-20 px-4 flex items-center justify-center text-center ">
      <div>
        <h1 className="text-9xl font-bold mb-4">Your Skin's Best Ally</h1>
        <p className="text-gray-600 text-lg mb-6 max-w-xl mx-auto">
          Join DOCHELP to share photos of your skin conditions and receive
          tailor-made advice from our supportive community of health
          professionals and fellow users.
        </p>
        <Link to="/signup">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition duration-300">
            Get Started
          </button>
        </Link>

        <div className="mt-10 flex justify-center items-center gap-6 px-4">
          <img
            src="/homeImg1.jpg"
            alt="Skin 1"
            className="h-110 w-[40%] object-cover rounded shadow"
          />
          <img
            src="/homeImg2.jpg"
            alt="Skin 2"
            className="h-110 w-[40%] object-cover rounded shadow"
          />
          <img
            src="/homeImg3.jpg"
            alt="Skin 3"
            className="h-110 w-[40%] object-cover rounded shadow"
          />
        </div>

        <div className="mt-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* About Image */}
          <img
            src="/aboutImg.jpg"
            alt="About"
            className="w-64 h-64 object-cover rounded-xl shadow-md"
          />

          {/* About Text and Socials */}
          <div className="text-center md:text-left flex-1 ">
            <h2 className="text-3xl font-semibold mb-2 ml-32">About</h2>
            <p className="text-gray-600 text-lg mb-2 ml-32">My name is Alexa Young</p>
            <p className="text-gray-500 mb-4 max-w-xl mx-auto">
              Briefly introduce yourself and share something interesting with
              website visitors. Double click to edit the text.
            </p>

            {/* Social Media Icons */}
            {/* Social Media Icons */}
            <div className="flex ml-32 gap-6 text-xl text-gray-600">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <section className="mt-20 px-4 max-w-6xl mx-auto bg-white p-5 rounded-lg shadow-md">
  <h2 className="text-3xl font-semibold mb-10 text-center md:text-left  ">
    Guidance in Healing
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    {/* Item 1 */}
    <div className="text-center md:text-left">
      <p className="font-semibold mb-1">01 &nbsp;&nbsp; Our Purpose</p>
      <img
        src="/healing1.jpg"
        alt="Our Purpose"
        className="w-full  h-48 object-cover rounded-lg shadow"
      />
      <p className="mt-2 text-sm text-gray-600">
        We help individuals understand their skin conditions better.
      </p>
    </div>

    {/* Item 2 */}
    <div className="text-center md:text-left">
      <p className="font-semibold mb-1">02 &nbsp;&nbsp; Drive Collaboration</p>
      <img
        src="/healing2.jpg"
        alt="Collaboration"
        className="w-full h-48 object-cover rounded-lg shadow"
      />
      <p className="mt-2 text-sm text-gray-600">
        Our community thrives on shared experiences and knowledge.
      </p>
    </div>

    {/* Item 3 */}
    <div className="text-center md:text-left">
      <p className="font-semibold mb-1">03 &nbsp;&nbsp; Available Resources</p>
      <img
        src="/healing3.jpg"
        alt="Resources"
        className="w-full h-48 object-cover object-top rounded-lg shadow"
      />
      <p className="mt-2 text-sm text-gray-600">
        Access essential tools and expert advice for your skin health.
      </p>
    </div>

    {/* Item 4 */}
    <div className="text-center md:text-left">
      <p className="font-semibold mb-1">04 &nbsp;&nbsp; Supportive Community</p>
      <img
        src="/healing4.jpg"
        alt="Supportive Community"
        className="w-full h-48 object-cover rounded-lg shadow"
      />
      <p className="mt-2 text-sm text-gray-600">
        Join a network dedicated to skin care and recovery.
      </p>
    </div>
  </div>
</section>

      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] pt-20 px-4 flex items-center justify-center text-center">
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


      </div>
    </div>
  );
};

export default HomePage;

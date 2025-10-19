import React from "react";

export default function Banner() {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1950&q=80)",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-0">
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-500 mb-6 drop-shadow-lg">
          Drive Your Dream Car
        </h1>
        <p className="text-lg md:text-xl text-lime-500 mb-8 max-w-xl mx-auto drop-shadow-md">
          Experience premium car rentals with top-notch service and unbeatable comfort. 
          Your journey starts here.
        </p>
        <div className="flex justify-center gap-4">
          <button className="btn bg-pink-500 border-0 text-white btn-lg transition-transform transform hover:scale-105">
            Get Started
          </button>
          <button className="btn btn-outline btn-secondary btn-lg transition-transform transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Decorative Element (Optional) */}
      <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

import React from "react";
import Lottie from "react-lottie"; // Import Lottie
import animationData from "../public/mental-therapy.json"; // Import your Lottie animation file

const Hero = () => {
  // Lottie options (you can customize these as needed)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Make sure the path is correct
  };

  return (
    <section className="bg-blue-500 text-white h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto text-left">
        <h1 className="text-5xl font-bold mb-4">
          Selamat Datang pada Web Riset Kami
        </h1>
        <p className="text-xl mb-8">
          Menjelajahi Dunia AI serta Kesehatan Mental
        </p>
      </div>

      {/* Add Lottie animation */}
      <Lottie options={defaultOptions} height={200} width={200} />

      {/* Footer */}
      <footer className="mt-8 text-center">&copy; 2023 PsyBot Research</footer>
    </section>
  );
};

export default Hero;

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import Mental from "../public/mental.json"; // Import your Lottie animation JSON file

const Hero = () => {
  const [isFaded, setIsFaded] = useState(false);

  // Add a fade-in effect when the component mounts
  useEffect(() => {
    setIsFaded(true);
  }, []);

  const animationOptions = {
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true to auto-play the animation
    animationData: Mental, // The JSON data for your Lottie animation
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

  return (
    <section
      className={`text-green-500 min-h-screen p-4 md:p-10 flex flex-col justify-center items-center ${
        isFaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hidden md:inline">
              PKM Riset Sosio Humaniora UGM
            </span>
            <span className="md:hidden text-3xl md:text-5xl">PKM RSH UGM</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8">
            &quot;Efektifitas Kecerdasan Buatan Model Bot Whatsapp sebagai
            Pertolongan Pertama Psikologis untuk Kondisi Kesepian pada
            Mahasiswa&quot;
          </p>
        </div>
        <Lottie options={animationOptions} height={500} width={500} />
      </div>
      <footer className="mt-8 text-center">
        &copy; 2023 PsyBot Research Team
      </footer>
    </section>
  );
};

export default Hero;

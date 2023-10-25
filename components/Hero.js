import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isFaded, setIsFaded] = useState(false);

  // Add a fade-in effect when the component mounts
  useEffect(() => {
    setIsFaded(true);
  }, []);

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
        <Image
          src="/positive-mind.png" // Specify the image source
          alt="Positive Mind" // Add a descriptive alt text
          width={250} // Set the desired width for mobile screens
          height={200} // Set the desired height for mobile screens
          className="mb-6 md:mb-0 md:flex-row" // Add margin for spacing on mobile
        />
      </div>
      <footer className="mt-8 text-center">
        &copy; 2023 PsyBot Research Team
      </footer>
    </section>
  );
};

export default Hero;

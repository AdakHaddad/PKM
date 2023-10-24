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
      className={`bg-blue-500 text-white h-screen px-10 flex flex-col justify-center items-center ${
        isFaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      <div className="flex justify-center items-center">
        <div className=" mx-auto text-left">
          <h1 className="text-5xl font-bold mb-4">
            PKM Riset Sosio Humaniora UGM
          </h1>
          <p className="text-xl mb-8">
            &quot;Efektifitas Kecerdasan Buatan Model Bot Whatsapp sebagai PPP
            untuk Kondisi Kesepian pada Mahasiswa&quot;
          </p>
        </div>
        <Image
          src="/positive-mind.png" // Specify the image source
          alt="Positive Mind" // Add a descriptive alt text
          width={300} // Set the desired width (adjust as needed)
          height={225} // Set the desired height (adjust as needed)
        />
      </div>
      <footer className="mt-8 text-center">
        &copy; 2023 PsyBot Research Team
      </footer>
    </section>
  );
};

export default Hero;

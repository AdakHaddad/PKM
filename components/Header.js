import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons";
import PKM from "/public/PKM.png";
import LogoButton from "/public/logo.png"; // Import your logo.png

function Header() {
  return (
    <header className="bg-transparent py-4 px-10 text-green-400">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={LogoButton}
            width={30} // Set the width as needed
            height={30} // Set the height as needed
            alt="Logo Button"
            className=" cursor-pointer mr-2 rounded-xl" // Add a cursor-pointer for the button effect
          />
          <a href="#" className="text-2xl font-sans">
            PsyBot Research
          </a>
        </div>
        <div className="flex justify-center">
          <Image
            src="/UGM.png"
            width={100}
            height={100}
            alt="UGM Logo"
            className="h-9 w-9 mr-2"
          />
          <Image src={PKM} alt="PKM Logo" className=" h-9 w-16 ml-2" />
        </div>
        <div className="flex space-x-5">
          <a
            href="https://www.instagram.com/psybot_pkmugm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094688048978&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/6285879615783"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/company/psybot-pkm-ugm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

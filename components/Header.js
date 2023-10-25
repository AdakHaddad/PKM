import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import PKM from "/public/PKM.png";
import LogoButton from "/public/logo.png"; // Import your logo.png

function Header() {
  return (
    <header className="bg-white bg-opacity-20 py-4 px-4 md:px-10 text-green-500">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <Image
            src={LogoButton}
            width={30}
            height={30}
            alt="PKM Center"
            className="cursor-pointer rounded-xl"
          />
          <a href="#" className="text-2xl font-sans">
            PsyBot Research
          </a>
        </div>
        <div className="hidden md:flex justify-center">
          <Image
            src="/UGM.png"
            width={100}
            height={100}
            alt="Universitas Gadjah Mada"
            className="h-9 w-9 mr-2"
          />
          <Image
            src={PKM}
            width={160}
            height={90}
            alt="PKM Logo"
            className="h-9 w-16 ml-2"
          />
        </div>
        <div className="flex space-x-2 md:space-x-5 mt-4 md:mt-0 text-2xl">
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

import React from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

const Publication = () => {
  return (
    <section
      id="publication"
      className="text-green-500 py-16 px-4 md:p-10 bg-white bg-opacity-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Publication</h2>
        <p className="text-lg md:text-xl mb-2 font-semibold">
          PsyBot: A randomized controlled trial of WhatsApp-based psychological
          first aid to reduce loneliness among 18–22-year-old students in
          Yogyakarta, Indonesia
        </p>
        <p className="text-sm md:text-base mb-8 opacity-80">
          Indrayanti, Salsabila, A. K., Amrita, V., Alhaddad, M. M., Saskia,
          A. B., &amp; Ramadhani, D. P. — SSM - Mental Health (Elsevier),
          published July 31, 2025
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://www.scopus.com/pages/publications/105012400282"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            View on Scopus <FaExternalLinkAlt />
          </a>
          <a
            href="/Modul PsyBot PKM-RSH 2023.pdf"
            download
            className="inline-flex items-center justify-center gap-2 border-2 border-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors"
          >
            Download Paper (PDF) <FaDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publication;

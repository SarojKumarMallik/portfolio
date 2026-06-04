import React from "react";
import { FiDownload } from "react-icons/fi";

const FloatingDownloadCV: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Saroj-Kumar-Mallik-CV.pdf"; // Place your CV in public folder
    link.download = "Saroj-Kumar-Mallik-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-5 md:bottom-8 right-5 md:right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#915EFF] text-white shadow-lg hover:scale-110 transition-all duration-300 group"
      aria-label="Download CV"
    >
      <FiDownload size={24} />

      {/* Tooltip */}
      <span className="absolute right-16 whitespace-nowrap bg-black text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
        Download CV
      </span>
    </button>
  );
};

export default FloatingDownloadCV;
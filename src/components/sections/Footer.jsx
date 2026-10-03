import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#20263e] px-4 py-8 text-white sm:px-8 md:px-12 xl:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

        {/* Left: Logo + Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left ">
          <img
            src="/images/C1.png" 
            alt="Logo"
            className="w-20 h-20 my-3 rounded-3xl"
          />
          <h2 className="text-xl font-bold">Yash Surywanshi</h2>
          <p className="text-sm text-gray-400">
            Frontend Developer | React | Creative Designer
          </p>
        </div>

        {/* Middle: Navigation */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-center md:justify-start">
          <a href="#hero" className="hover:text-blue-400 transition">Home</a>
          <a href="#tech" className="hover:text-blue-400 transition">Skills</a>
          <a href="#content" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Right: Social Media */}
        <div className="flex flex-wrap justify-center gap-5">
          <a href="https://github.com/erYashSurywanshi" target="_blank" rel="noreferrer">
            <FaGithub size={24} className="hover:text-blue-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/yash-surywanshi-81714a366/" target="_blank" rel="noreferrer">
            <FaLinkedin size={24} className="hover:text-blue-400 transition" />
          </a>
          <a href="https://x.com/Su_yash05?t=u24Iw9KeY0SP_qrrA0dCSw&s=09" target="_blank" rel="noreferrer">
            <FaTwitter size={24} className="hover:text-blue-400 transition" />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram size={24} className="hover:text-blue-400 transition" />
          </a>
        </div>
      </div>

      {/* Bottom small text */}
      <div className="py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Yash Surywanshi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

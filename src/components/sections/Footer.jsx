import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111320] text-white border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Brand / Studio Identity */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3 sm:gap-4 sm:pb-11">
              <img
                src="/images/mark.png"
                alt="Y2X Digital Growth Agency Logo"
                className="w-14 sm:w-16 md:w-20 h-auto shrink-0 rounded-xl border border-white/10 shadow-lg object-contain bg-white/5 p-1"
              />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Digital Growth Agency
                </h3>
                <p className="text-[11px] sm:text-xs text-[#34D399] font-medium">
                  Web · App · Social · Marketing · SEO
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xs">
              Architecting bespoke digital experiences, high-performance web
              applications, and transformative brand growth.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Global Collaborations</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors inline-block py-0.5">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors inline-block py-0.5">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors inline-block py-0.5">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors inline-block py-0.5">
                  3D Skills
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors inline-block py-0.5">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors inline-block py-0.5">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="hover:text-neutral-200 transition-colors">
                Full-Stack Web Development
              </li>
              <li className="hover:text-neutral-200 transition-colors">
                Mobile & App Development
              </li>
              <li className="hover:text-neutral-200 transition-colors">
                Interactive 3D WebGL
              </li>
              <li className="hover:text-neutral-200 transition-colors">
                UI/UX Design Systems
              </li>
              <li className="hover:text-neutral-200 transition-colors">
                Social Media & Marketing
              </li>
              <li className="hover:text-neutral-200 transition-colors">
                Technical SEO & Optimization
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Socials */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Connect With Us
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Have an upcoming product launch or ambitious vision? Let's discuss your next breakthrough.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://github.com/erYash05/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="www.linkedin.com/in/y2x-solution-411511442/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://x.com/Su_yash05?t=u24Iw9KeY0SP_qrrA0dCSw&s=09"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/y2x_20/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
              >
                <FaInstagram size={18} />
              </a>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors pt-2"
            >
              <FiMail className="w-3.5 h-3.5" />
              <span>Start a Conversation</span>
              <FiArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Y2X Studio / Yash Suryawanshi. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>High-Performance Digital Engineering</span>
            <span>·</span>
            <span>Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

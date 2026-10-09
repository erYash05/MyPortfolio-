"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import { cn } from "../../../lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const prev = scrollYProgress.getPrevious() ?? 0;
      const direction = current - prev;

      if (current < 0.04) {
        setVisible(true);
      } else if (direction < -0.002) {
        setVisible(true);
      } else if (direction > 0.005 && !mobileMenuOpen) {
        setVisible(false);
      }
    }
  });

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    itemOnClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  ) => {
    setMobileMenuOpen(false);
    if (itemOnClick) {
      itemOnClick(e);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        aria-label="Primary Navigation"
        className={cn(
          "flex w-[calc(100%-1.5rem)] max-w-[94vw] md:w-fit md:max-w-fit fixed top-2.5 sm:top-4 inset-x-0 mx-auto border border-white/10 rounded-full bg-[#11121d]/90 backdrop-blur-md shadow-[0_8px_28px_rgba(0,0,0,0.65)] z-[5000] px-3 sm:px-5 py-1.5 sm:py-2 items-center justify-between md:justify-center gap-2 sm:gap-4",
          className
        )}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            const homeItem = navItems.find((i) => i.link === "#hero");
            handleItemClick(e, homeItem?.onClick);
          }}
          className="flex items-center gap-2 shrink-0 pl-1 pr-1.5 py-0.5 rounded-full hover:bg-white/5 transition-colors"
          title="Y2X Digital Growth Agency"
        >
          <img
            src="/images/mark.png"
            alt="Y2X Logo"
            width={96}
            height={28}
            className="h-5 sm:h-6 w-auto object-contain drop-shadow-[0_2px_8px_rgba(52,211,153,0.35)]"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 shrink-0">
          {navItems.map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              onClick={(e) => handleItemClick(e, navItem.onClick)}
              className="relative text-neutral-300 hover:text-white px-2.5 py-1 rounded-full text-xs lg:text-sm font-medium transition-colors hover:bg-white/10 whitespace-nowrap shrink-0"
            >
              {navItem.name}
            </a>
          ))}
        </div>

        {/* Right Actions: CTA + Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              const contactItem = navItems.find((i) => i.link === "#contact");
              handleItemClick(e, contactItem?.onClick);
            }}
            className="shrink-0 text-[11px] sm:text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-3 sm:px-4 py-1.5 rounded-full hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all whitespace-nowrap"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[4990] md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="fixed top-14 inset-x-3 max-w-sm mx-auto rounded-2xl bg-[#121320]/95 backdrop-blur-xl border border-white/15 shadow-2xl p-3 z-[4995] md:hidden"
            >
              <div className="grid grid-cols-2 gap-1.5">
                {navItems.map((navItem, idx) => (
                  <a
                    key={`mobile-link-${idx}`}
                    href={navItem.link}
                    onClick={(e) => handleItemClick(e, navItem.onClick)}
                    className="flex items-center px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                  >
                    {navItem.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};


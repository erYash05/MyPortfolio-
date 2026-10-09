import React from "react";

const Button = ({ text, className, id }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const target = document.getElementById("counter");

    if (target && id) {
      const offset = window.innerHeight * 0.12;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a
      href="#counter"
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper block`}
    >
      <div className="cta-button group w-full h-full">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img
            src="/images/arrow-down.svg"
            alt="Scroll down"
            width={20}
            height={20}
          />
        </div>
      </div>
    </a>
  );
};

export default React.memo(Button);

import React from "react";

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 max-w-full">
      {sub && (
        <div className="hero-badge">
          <p className="truncate max-w-[88vw] sm:max-w-none">{sub}</p>
        </div>
      )}
      {title && (
        <div>
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-5xl text-center leading-tight">
            {title}
          </h2>
        </div>
      )}
    </div>
  );
};

export default React.memo(TitleHeader);

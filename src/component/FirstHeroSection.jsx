import React from "react";

const FirstHeroSection = ({ firstSectionInfo }) => {
  return (
    <div className="section-container mb-40 pt-16">
      <img
        src={firstSectionInfo.imageUrl}
        alt=""
        className={firstSectionInfo.imageUrlStyle}
      />
      <h3>{firstSectionInfo.header}</h3>
      <p className="section-content mb-10 ">{firstSectionInfo.description}</p>
      {/* Button Container */}
      <div className="button-container">
        <a
          href="1"
          className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
        >
          Download for iOS
        </a>
        <a
          href="1"
          className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
        >
          Download for Mac
        </a>
      </div>
    </div>
  );
};

export default FirstHeroSection;

import React from "react";

const FifthSuperChargeSection = () => {
  const items = [
    {
      header:"Create Blacklists",
      description:"Easily search your snippets by content, category, web address, application, and more.",
      image:"assets/images/icon-blacklist.svg",
    },
    {
      header:"Plane Text Snippets",
      description:"Remove unwanted formatting from copied text for a consistent look.",
      image:"assets/images/icon-text.svg",
    },
    {
      header:"Sneak Preview",
      description:"Quick preview of all snippets on your Clipboard for easy access.",
      image:"assets/images/icon-preview.svg",
    },
  ]
  return (
    <div className="section-container my-20">
      <h3>Supercharge your workflow</h3>
      <p className="section-content mb-16 text-xl">
        We’ve got the tools to boost your productivity.
      </p>
      {/* Items Container */}
      <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
        {/* Items */}
        {items.map((item, index) => (
          <div className="flex flex-col items-center space-y-5" key={index}>
          <img src={item.image} alt="" className="mb-6" />
          <h5>{item.header}</h5>
          <p className="max-w-md text-grayishBlue">{item.description}</p>
       </div>
        ))}
        
      </div>
    </div>
  );
};

export default FifthSuperChargeSection;

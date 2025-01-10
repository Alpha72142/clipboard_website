import React from "react";

const SeventhFooterSection = () => {
    const menus = [
        {
            item1:'FAQs',
            item2:'Contact Us',
        },
        {
            item1:'Privacy Policy',
            item2:'Press Kit',
        },
        {
            item1:'Install Guide',
            item2:'',
        }

    ]
    const socialIcons = [
        {
            imageUrl:'assets/images/icon-facebook.svg',
        },
        {
            imageUrl:'assets/images/icon-twitter.svg',
        },
        {
            imageUrl:'assets/images/icon-instagram.svg',
        }
    ]

  return (
    <footer className="bg-gray-100">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/*Image*/}
          <img src="assets/images/logo.svg" alt="" className="scale-50" />
          {/*Container for Menus & Social*/}
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
            {/*Menus*/}
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                {/*Menu 1*/}
                {menus.map((menu) => (
                 <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div><a href="" className="hover:text-strongCyan">{menu.item1}</a></div>
                    <div><a href="" className="hover:text-strongCyan">{menu.item2}</a></div>
                 </div>
                ))}
            </div>
            {/*Social Icons*/}
            <div className="flex justify-between w-32 py-1">
              {socialIcons.map((socialIcon) => (
                  <a href="/"><img src={socialIcon.imageUrl} alt="" className="duration-200 ficon" /></a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SeventhFooterSection;

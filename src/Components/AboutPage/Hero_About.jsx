import React from "react";
import bg_1 from '../../assets/bg-pattern-about-1-mobile-nav-1.svg'

const Hero_About = () => {
  return (
    <div className="text-white relative -z-10 max-h-[42vh] overflow-hidden">
      <div className="  mt-20 lg:mt-32 flex flex-col lg:flex-row max-w-[320px] justify-between md:max-w-lg lg:max-w-6xl mx-auto text-center lg:text-left">
        <h2 className="title">About</h2>
        <p className="mt-4 relative about_text text-[15px] leading-7 max-w-[730px] font-semibold">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
      </div>
      <img src={bg_1} alt=""  className="relative lg:-top-12 top-8 lg:left-[94%] md:left-[87%] left-72"/>
    </div>
  );
};

export default Hero_About;

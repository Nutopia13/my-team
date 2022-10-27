import React from "react";
import bg_hero from "../../assets/bg-pattern-home-2.svg";
import {motion} from "framer-motion";

const Hero = () => {
  return (
    <div>
      <motion.div
        className="flex max-w-6xl mx-auto flex-row flex-wrap items-end md:justify-center lg:justify-start mt-20 md:mt-32 text-center lg:text-left"
      >
        <h1 className="hero_title max-w-[620px]  text-white">
          Find the best <span className="text-primary_coral">talent</span>
        </h1>
        <p className="pt-5 lg:relative hero_text lg:text-lg px-6 max-w-[445px] font-semibold text-white">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </motion.div>
      <img
        src={bg_hero}
        alt=""
        className="mt-24 md:mt-40 md:relative md:mx-auto lg:mx-0 lg:left-2/3"
      />
    </div>
  );
};

export default Hero;

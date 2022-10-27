import React from "react";
import bg_6 from '../../assets/bg-pattern-home-6-about-5.svg'
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="bg-primary_coral  relative overflow-hidden text-center text-state_green">
      <div className="mx-auto flex flex-col pt-20 md:flex-row justify-evenly items-center">
        <h4 className="title max-w-[200px] md:max-w-lg lg:max-w-full">Ready to get started?</h4>
        <Link to='/contact'><button className=" hover:bg-state_green hover:text-white transition-all duration-200 mt-6 lg:mt-0 font-bold text-base border-2 border-state_green py-2.5 px-8 lowercase rounded-3xl">
          Contact Us
        </button></Link>
      </div>
      <img src={bg_6} alt="" className="relative  " />
    </div>
  );
};

export default ContactUs;

import React from "react";
import verge from '../../assets/logo-the-verge.png'
import techradar from '../../assets/logo-tech-radar.png'
import gadgets from '../../assets/logo-gadgets-now.png'
import guardian from '../../assets/logo-the-guardian.png'
import jakarta from '../../assets/logo-jakarta-post.png'
import bg_7 from '../../assets/bg-pattern-about-4.svg'


const Clients = () => {
  return (
    <div className="bg-state_green relative overflow-hidden text-white">
        <img src={bg_7} alt="" className="absolute lg:-top-0 lg:left-0 -top-20 -left-28" />
      <div className="pt-28 flex flex-col justify-center items-center">
        <h3 className="title">Some of our clients</h3>
        <div className="flex md:flex-row flex-col space-y-14 md:space-y-0 md:space-x-8 lg:space-x-14 lg:py-28 py-16">
          <img src={verge} alt='' className="max-w-[38%] md:max-h-5 lg:max-h-9 mx-auto" />
          <img src={jakarta} alt='' className="max-w-[38%] md:max-h-5 lg:max-h-9 mx-auto" />
          <img src={guardian} alt='' className="max-w-[38%] md:max-h-5 lg:max-h-9 mx-auto" />
          <img src={techradar} alt='' className="max-w-[38%] md:max-h-5 lg:max-h-9 mx-auto" />
          <img src={gadgets} alt="" className='max-w-[38%] md:max-h-5 lg:max-h-9 mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default Clients;

import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import twitter from "../assets/icon-twitter.svg";
import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="bg-dark_green text-white text-center md:text-left">
      <div className=" lg:py-12 py-16 lg:max-w-6xl md:max-w-2xl max-w-[320px] m-auto">
        <div className="flex md:space-x-32  flex-col md:flex-row items-center justify-between mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between lg:w-1/2 items-center">
            <div>
              <img
                src={logo}
                alt=""
                className="max-w-[96px] md:max-w-[170px]"
              />
              <ul className="flex mt-6 space-x-4">
                <Link to="/">
                  <li className="hover:text-primary_coral duration-150 transition-all">home</li>
                </Link>
                <Link to="/about">
                  <li className="hover:text-primary_coral duration-150 transition-all">about</li>
                </Link>
              </ul>
            </div>
            <div className="md:ml-8 mt-6 md:mt-0">
              <p className="opacity-60">
                987 Hillcrest Lane<br></br>Irvine, CA<br></br>California 92714
                <br></br>Call Us : 949-833-7432
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className=" flex mt-10 space-x-4 items-center">
              <a href="https://twitter.com/V_Nechytailo">
                <img src={facebook} alt="" />
              </a>
              <a href="https://twitter.com/V_Nechytailo">
                <img src={pinterest} alt="" />
              </a>
              <a href="https://twitter.com/V_Nechytailo">
                <img src={twitter} alt="" />
              </a>
            </div>
            <p className="opacity-60 mt-6 text-[15px]">
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

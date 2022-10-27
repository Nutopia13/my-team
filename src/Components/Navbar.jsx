import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamb from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import navcircle from "../assets/bg-pattern-about-1-mobile-nav-1.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div className="hidden md:block">
        <nav className="flex text-lg mx-auto mt-20 md:max-w-2xl lg:max-w-6xl text-white justify-between items-center">
          <div className="flex space-x-20 items-center">
            <img src={logo} alt="Logo" />
            <ul className="flex space-x-10">
              <Link to="/">
                <li className="hover:text-primary_coral duration-150 transition-all">
                  home
                </li> 
              </Link>
              <Link to="/about">
                <li className="hover:text-primary_coral duration-150 transition-all">
                  about
                </li>
              </Link>
            </ul>
          </div>
          <Link to='/contact'><button className="border-2 hover:bg-white hover:text-black transition-all duration-200 py-2.5 px-8 lowercase rounded-3xl">
            Contact Us
          </button></Link>
        </nav>
      </div>
      <div className="md:hidden mt-12">
        <nav className="navbar mx-auto  max-w-[20.4rem] flex items-center justify-between">
          <img src={logo} alt="" className="max-w-[128px]" />
          <img
            onClick={() => setIsOpen(!isOpen)}
            src={hamb}
            alt=""
            className="max-h-[17px] w-[20px]"
          />
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full h-full z-50 absolute top-0 flex justify-end bg-black/40"
            >
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{
                  type: "spring",
                  duration: 2,
                  ease: "easeInOut",
                  stiffness: 90,
                }}
                className="text-white relative overflow-hidden w-2/3 pt-14 bg-primary_green"
              >
                <img
                  onClick={() => setIsOpen(!isOpen)}
                  src={close}
                  alt=""
                  className="relative left-52"
                />
                <ul className="space-y-6 ml-12 mt-9 mx-auto">
                  <Link to="/">
                    <li onClick={() => setIsOpen(!isOpen)}>home</li>
                  </Link>
                  <Link to="/about">
                    <li onClick={() => setIsOpen(!isOpen)} className="pt-6">
                      about
                    </li>
                  </Link>
                  <Link to='/contact'><button className="text-base mt-6 border-2 py-2.5 px-8 lowercase rounded-3xl">
                    Contact Us
                  </button></Link>
                </ul>
                <img
                  src={navcircle}
                  alt=""
                  className="h-[200px] w-[200px] absolute top-96 -right-24"
                />
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;

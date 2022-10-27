import React from "react";
import bg_2 from "../../assets/bg-pattern-about-2-contact-1.svg";
import bg_4 from "../../assets/bg-pattern-home-4-about-3.svg";
import nikita from "../../assets/avatar-nikita.jpg";
import cristian from "../../assets/avatar-christian.jpg";
import cruz from "../../assets/avatar-cruz.jpg";
import drake from "../../assets/avatar-drake.jpg";
import griffin from "../../assets/avatar-griffin.jpg";
import aden from "../../assets/avatar-aden.jpg";
import cross from "../../assets/icon-cross.svg";
import { AnimatePresence, motion } from "framer-motion";
import twitter from "../../assets/icon-twitter.svg";
import linkdIn from "../../assets/icon-linkedin.svg";
import close from "../../assets/icon-close.svg";

const Staff = () => {
  const [cartOpen1, setCartOpen1] = React.useState(false);
  const [cartOpen2, setCartOpen2] = React.useState(false);
  const [cartOpen3, setCartOpen3] = React.useState(false);
  const [cartOpen4, setCartOpen4] = React.useState(false);
  const [cartOpen5, setCartOpen5] = React.useState(false);
  const [cartOpen6, setCartOpen6] = React.useState(false);
  const [cartOpen7, setCartOpen7] = React.useState(false);

  return (
    <div className="bg-jungle_green relative overflow-hidden md:pt-12 text-center text-white">
      <img
        src={bg_2}
        alt=""
        className="absolute -top-24 lg:-top-12 md:top-0 lg:-left-24 md:right-[87%] right-72 "
      />
      <div className="max-w-[320px] py-24 lg:max-w-6xl mx-auto">
        <h3 className="title mx-auto">Meet the directors</h3>
      </div>
      <div className="py-14 gap-12 items-center flex flex-wrap max-w-[327px]  justify-center md:max-w-6xl mx-auto">
        <div className="staff_cart relative z-10 w-[350px] bg-state_green flex flex-col">
          <img
            src={nikita}
            alt=""
            className="max-w-[96px] mx-auto mt-8 rounded-full border-2 border-[#C4FFFE]"
          />
          <p className="text-light_blue text-lg pt-4 font-bold">Nikita Marks</p>
          <p className="italic font-medium text-[15px]">Founder & CEO</p>
          {!cartOpen1 ? (
            <div
              onClick={() => setCartOpen1(!cartOpen1)}
              className="dot z-50 bg-primary_coral mt-7 rounded-full mx-auto w-[56px] relative top-7 py-5"
            >
              <img src={cross} className="mx-auto" alt="" />
            </div>
          ) : (
            <div
              onClick={() => setCartOpen1(!cartOpen1)}
              className="dot z-50 bg-light_blue mt-7 rounded-full mx-auto w-[56px] relative top-7 py-5"
            >
              <img src={close} className="mx-auto" alt="" />
            </div>
          )}
          <AnimatePresence>
            {cartOpen1 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="staff_cart max-w-[350px] absolute  z-40 bg-dark_green flex flex-col"
              >
                <p className="text-light_blue text-lg pt-4 font-bold mt-9">
                  Nikita Marks
                </p>
                <p className="pt-2 px-12">
                  “Empowered teams create truly amazing products. Set the north
                  star and let them follow it.”
                </p>
                <div className="flex mx-auto space-x-4 pt-7 pb-20 ">
                  <img src={twitter} alt="" />
                  <img src={linkdIn} alt="" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="staff_cart relative z-10 w-[350px] bg-state_green flex flex-col">
          <img
            src={cristian}
            alt=""
            className="max-w-[96px] mx-auto mt-8 rounded-full border-2 border-[#C4FFFE]"
          />
          <p className="text-light_blue text-lg pt-4 font-bold">
            Cristian Duncan
          </p>
          <p className="italic font-medium text-[15px]">Co-founder & COO</p>
          {!cartOpen2 ? (
            <div
              onClick={() => setCartOpen2(!cartOpen2)}
              className="dot z-50 bg-primary_coral mt-7 rounded-full mx-auto w-[56px] relative top-7 py-5"
            >
              <img src={cross} className="mx-auto" alt="" />
            </div>
          ) : (
            <div
              onClick={() => setCartOpen2(!cartOpen2)}
              className="dot z-50 bg-light_blue mt-7 rounded-full mx-auto w-[56px] relative top-7 py-5"
            >
              <img src={close} className="mx-auto" alt="" />
            </div>
          )}
          <AnimatePresence>
            {cartOpen2 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="staff_cart max-w-[350px] absolute  z-40 bg-dark_green flex flex-col"
              >
                <p className="text-light_blue text-lg pt-4 font-bold mt-9">
                  Cristian Duncan
                </p>
                <p className="pt-2 px-12">
                  “Empowered teams create truly amazing products. Set the north
                  star and let them follow it.”
                </p>
                <div className="flex mx-auto space-x-4 pt-7 pb-12 ">
                  <img src={twitter} alt="" />
                  <img src={linkdIn} alt="" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="staff_cart relative z-10 w-[350px] bg-state_green flex flex-col">
          <img
            src={cruz}
            alt=""
            className="max-w-[96px] mx-auto mt-8 rounded-full border-2 border-[#C4FFFE]"
          />
          <p className="text-light_blue text-lg pt-4 font-bold">Cruz Hamer</p>
          <p className="italic font-medium text-[15px]">Co-founder & CTO</p>
          {!cartOpen3 ? (
            <div
              onClick={() => setCartOpen3(!cartOpen3)}
              className="dot z-50 bg-primary_coral mt-7 rounded-full mx-auto w-[56px] relative top-7 py-5"
            >
              <img src={cross} className="mx-auto" alt="" />
            </div>
          ) : (
            <div
              onClick={() => setCartOpen3(!cartOpen3)}
              className="dot z-50 bg-light_blue mt-7 rounded-full mx-auto w-[56px] relative top-7 py-5"
            >
              <img src={close} className="mx-auto" alt="" />
            </div>
          )}
          <AnimatePresence>
            {cartOpen3 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="staff_cart max-w-[350px] absolute  z-40 bg-dark_green flex flex-col"
              >
                <p className="text-light_blue text-lg pt-4 font-bold mt-9">
                  Cruz Hamer
                </p>
                <p className="pt-2 px-12">
                  “Empowered teams create truly amazing products. Set the north
                  star and let them follow it.”
                </p>
                <div className="flex mx-auto space-x-4 pt-7 pb-12 ">
                  <img src={twitter} alt="" />
                  <img src={linkdIn} alt="" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="staff_cart relative z-10 w-[350px] bg-state_green flex flex-col">
          <img
            src={drake}
            alt=""
            className="max-w-[96px] mx-auto mt-8 rounded-full border-2 border-[#C4FFFE]"
          />
          <p className="text-light_blue text-lg pt-4 font-bold">Drake Heaton</p>
          <p className="italic font-medium text-[15px]">
            Business Development Lead
          </p>
          {!cartOpen4 ? (
            <div
              onClick={() => setCartOpen4(!cartOpen4)}
              className="dot z-50 bg-primary_coral mt-7 rounded-full mx-auto w-[56px] relative top-7 py-5"
            >
              <img src={cross} className="mx-auto" alt="" />
            </div>
          ) : (
            <div
              onClick={() => setCartOpen4(!cartOpen4)}
              className="dot z-50 bg-light_blue mt-7 rounded-full mx-auto w-[56px] relative top-7 py-5"
            >
              <img src={close} className="mx-auto" alt="" />
            </div>
          )}
          <AnimatePresence>
            {cartOpen4 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="staff_cart max-w-[350px] absolute  z-40 bg-dark_green flex flex-col"
              >
                <p className="text-light_blue text-lg pt-4 font-bold mt-9">
                  Drake Heaton
                </p>
                <p className="pt-2 px-12">
                  “Empowered teams create truly amazing products. Set the north
                  star and let them follow it.”
                </p>
                <div className="flex mx-auto space-x-4 pt-7 pb-12 ">
                  <img src={twitter} alt="" />
                  <img src={linkdIn} alt="" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="staff_cart relative z-10 w-[350px] bg-state_green flex flex-col">
          <img
            src={griffin}
            alt=""
            className="max-w-[96px] mx-auto mt-8 rounded-full border-2 border-[#C4FFFE]"
          />
          <p className="text-light_blue text-lg pt-4 font-bold">Griffin Wise</p>
          <p className="italic font-medium text-[15px]">Lead Marketing</p>
          {!cartOpen5 ? (
            <div
              onClick={() => setCartOpen5(!cartOpen5)}
              className="dot z-50 bg-primary_coral mt-7 rounded-full mx-auto w-[56px] relative top-7 py-5"
            >
              <img src={cross} className="mx-auto" alt="" />
            </div>
          ) : (
            <div
              onClick={() => setCartOpen5(!cartOpen5)}
              className="dot z-50 bg-light_blue mt-7 rounded-full mx-auto w-[56px] relative top-7 py-5"
            >
              <img src={close} className="mx-auto" alt="" />
            </div>
          )}
          <AnimatePresence>
            {cartOpen5 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="staff_cart max-w-[350px] absolute  z-40 bg-dark_green flex flex-col"
              >
                <p className="text-light_blue text-lg pt-4 font-bold mt-9">
                  Griffin Wise
                </p>
                <p className="pt-2 px-12">
                  “Empowered teams create truly amazing products. Set the north
                  star and let them follow it.”
                </p>
                <div className="flex mx-auto space-x-4 pt-7 pb-12 ">
                  <img src={twitter} alt="" />
                  <img src={linkdIn} alt="" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="staff_cart relative z-10 w-[350px] bg-state_green flex flex-col">
          <img
            src={aden}
            alt=""
            className="max-w-[96px] mx-auto mt-8 rounded-full border-2 border-[#C4FFFE]"
          />
          <p className="text-light_blue text-lg pt-4 font-bold">Aden Allan</p>
          <p className="italic font-medium text-[15px]">Full Stack Developer</p>
          {!cartOpen6 ? (
            <div
              onClick={() => setCartOpen6(!cartOpen6)}
              className="dot z-50 bg-primary_coral mt-7 rounded-full mx-auto w-[56px] relative top-7 py-5"
            >
              <img src={cross} className="mx-auto" alt="" />
            </div>
          ) : (
            <div
              onClick={() => setCartOpen6(!cartOpen6)}
              className="dot z-50 bg-light_blue mt-7 rounded-full mx-auto w-[56px] relative top-7 py-5"
            >
              <img src={close} className="mx-auto" alt="" />
            </div>
          )}
          <AnimatePresence>
            {cartOpen6 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="staff_cart max-w-[350px] absolute  z-40 bg-dark_green flex flex-col"
              >
                <p className="text-light_blue text-lg pt-4 font-bold mt-9">
                  Aden Allan
                </p>
                <p className="pt-2 px-12">
                  “Empowered teams create truly amazing products. Set the north
                  star and let them follow it.”
                </p>
                <div className="flex mx-auto space-x-4 pt-7 pb-12 ">
                  <img src={twitter} alt="" />
                  <img src={linkdIn} alt="" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <img
        src={bg_4}
        alt=""
        className="relative left-60  md:left-[82%] lg:left-[92%]"
      />
    </div>
  );
};

export default Staff;

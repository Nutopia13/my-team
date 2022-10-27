import React from "react";
import human from "../../assets/icon-person.svg";
import cog from "../../assets/icon-cog.svg";
import chart from "../../assets/icon-chart.svg";
import bg_3 from "../../assets/bg-pattern-home-3.svg";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="bg-state_green  max-h-[100vh] md:max-h-full lg:max-h-[100vh]  relative overflow-hidden text-white">
      <img src={bg_3} alt="" className="md:hidden absolute left-[71.3%]" />
      <div className="md:pt-36 pb-16 pt-16 max-w-[320px] md:max-w-2xl lg:max-w-6xl items-start mx-auto flex justify-between flex-wrap">
        <h2 className="title  relative max-w-[240px]  md:max-w-lg :max-w-[445px]">
          Build & manage distributed teams like no one else.
        </h2>
        <div className="services_text lg:mt-0 mt-14">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delayChildren: 1, staggerChildren: 0.3 }}
            className="cart_cont  space-y-12 max-w-[540px] text-center md:text-left"
          >
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="cart1 flex flex-col md:flex-row space-y-4 lg:space-y-0 md:space-x-6 justify-center"
            >
              <img
                src={human}
                alt="Experienced Individuals"
                className="max-w-[74px] max-h-[74px] mx-auto"
              />
              <div>
                <h3 className="text-primary_coral text-lg ">
                  Experienced Individuals
                </h3>
                <p className="opacity-80 pt-2 text-[15px] font-semibold">
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="cart2 flex flex-col md:flex-row space-y-4 lg:space-y-0 items-center md:space-x-6 justify-center"
            >
              <img
                src={cog}
                alt="Cog"
                className="max-w-[74px] max-h-[74px] mx-auto"
              />
              <div>
                <h3 className="text-primary_coral text-lg">
                  Easy to Implement
                </h3>
                <p className="opacity-80 pt-2 text-[15px] font-semibold">
                  Our processes have been refined over years of implementation
                  meaning our teams always deliver.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="cart3 flex flex-col md:flex-row space-y-4 lg:space-y-0 items-center md:space-x-6 justify-center"
            >
              <img
                src={chart}
                alt="Enhanced Productivity"
                className="max-w-[74px] max-h-[74px] mx-auto"
              />
              <div>
                <h3 className="text-primary_coral text-lg">
                  Enhanced Productivity
                </h3>
                <p className="opacity-80 pt-2 text-[15px] font-semibold">
                  Our customized platform with in-built analytics helps you
                  manage your distributed teams.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <img
        src={bg_3}
        alt=""
        className="hidden md:block absolute left-[90%] -bottom-14"
      />
    </div>
  );
};

export default Services;

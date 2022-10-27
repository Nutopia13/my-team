import React from "react";
import Hero from "../Components/HomePage/Hero";
import Section from "../Components/Section";
import Services from "../Components/HomePage/Services";
import Reviews from "../Components/HomePage/Reviews";
import ContactUs from "../Components/HomePage/ContactUs";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Section>
      <section>
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Reviews />
      </section>
      <section>
        <ContactUs />
      </section>
    </Section>
  );
};

export default Home;

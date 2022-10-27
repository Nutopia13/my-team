import React from "react";
import Clients from "../Components/AboutPage/Clients";
import Hero_About from "../Components/AboutPage/Hero_About";
import Staff from "../Components/AboutPage/Staff";
import Section from "../Components/Section";
import ContactUs from "../Components/HomePage/ContactUs";

const About = () => {
  return (
    <Section>
      <Hero_About />
      <Staff />
      <Clients/>
      <ContactUs />
    </Section>
  );
};

export default About;

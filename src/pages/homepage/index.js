import React from "react";
import Faq from "../../components/faq";
import Header from "../../components/header";
import Hero from "../../components/hero-section";
import JumboCard from "../../components/jumbo-card";
import OurService from "../../components/our-service";
import Testimonial from "../../components/testimonial";
import WhyUs from "../../components/why-us";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <OurService />
      <WhyUs />
      <Testimonial />
      <JumboCard />
      <Faq />
    </>
  );
};

export default Homepage;

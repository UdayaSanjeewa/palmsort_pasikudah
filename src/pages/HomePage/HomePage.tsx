import Hero from "@/components/HomePage/Hero";
import LandingImageDesktop from "@/components/HomePage/LandingImageDesktop";
import LandingImageMobile from "@/components/HomePage/LandingImageMobile";
import Packages from "@/components/HomePage/Packages";
import NavBar from "@/components/NavBar";
import ContactSection from "@/components/HomePage/ContactSection";
import React from "react";
import OwnersSection from "@/components/HomePage/OwnersSection";
import BottomSection from "@/components/HomePage/BottomSection";
import Footer from "@/components/Footer";

import * as motion from "framer-motion/client";
import fadeIn from "../../variants";


function HomePage() {
  return (
    <>
      <NavBar />
      <div className="lg:block hidden">
      <LandingImageDesktop />
      </div>
      
      <div className="lg:hidden">
      <LandingImageMobile/>
      </div>

      <motion.div
        variants={fadeIn("up", 0.3)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.4 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.3)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.4 }} 
      >
        <Packages />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.3)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.4 }} 
      >
        <ContactSection />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.3)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.4 }} 
      >
        <OwnersSection />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.3)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.4 }} 
      >
        <BottomSection />
      </motion.div>

      <Footer />
    </>
  );
}

export default HomePage;

"use client";
import React from "react";
import "react-slideshow-image/dist/styles.css";
import LandingImgThree from "@/resources/LandingIMGThree.jpeg";
import Image from "next/image";

import * as motion from "framer-motion/client";
import fadeIn from "../../variants";
import Link from "next/link";
import { FaBed, FaCar, FaSpa, FaUtensils } from "react-icons/fa";

function LandingImageMobile() {
  return (
    <div className="slide-container">
      <div className="relative h-[620px] flex justify-center overflow-hidden bg-cover">
        <Image
          src={LandingImgThree}
          alt={""}
          layout="fill"
          className="z-0 object-cover scale-110 h-[620px]"
        />
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className=" flex flex-col text-white  items-center text-[50px] font-paprika font-[400] z-10"
        >
          <div className="h-[250px] flex mt-4 gap-5 flex-col">
            <div >
              <p>Palm Sort</p>
              <p>Pasikudah</p>
            </div>
            <p className="text-[18px]">Your Ultimate Coastal Escape</p>
          </div>

          <div className="flex flex-col items-center mt-10">
            <Link
              href="#booking-section"
              className="pl-[60px] pr-[60px] pt-[13px] pb-[13px] text-[28px] font-[600] rounded-[10px] bg-[#4CBB16] font-onest"
            >
              Book Now
            </Link>

            <div className="flex space-x-4 p-4 w-[315px] mt-10 rounded-[330px] h-[70px] justify-evenly items-center bg-white/10 backdrop-blur-lg  shadow-lg">
              <div className="text-white drop-shadow-lg">
                <FaBed size={24} />
              </div>
              <div className="text-white drop-shadow-lg">
                <FaUtensils size={24} />
              </div>
              <div className="text-white drop-shadow-lg">
                <FaCar size={24} />
              </div>
              <div className="text-white drop-shadow-lg">
                <FaSpa size={24} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LandingImageMobile;

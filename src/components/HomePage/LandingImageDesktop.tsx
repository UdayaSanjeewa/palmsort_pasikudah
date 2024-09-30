"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import LandingImgOne from "@/resources/LandingIMGOne.jpeg";
import LandingImgTwo from "@/resources/LandingIMGTwo.jpeg";
import LandingImgThree from "@/resources/LandingIMGThree.jpeg";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaCar, FaSpa, FaUtensils } from "react-icons/fa";

const slideImages = [
  {
    url: LandingImgOne,
    caption: "Slide 1",
  },
  {
    url: LandingImgTwo,
    caption: "Slide 2",
  },
  {
    url: LandingImgThree,
    caption: "Slide 3",
  },
];

function LandingImageDesktop() {
  return (
    <div className="slide-container relative">
      <Slide duration={1500} arrows={false}>
        {slideImages.map((slideImage, index) => (
          <div
            key={index}
            className="relative h-[850px] flex items-center justify-center bg-cover"
          >
            <Image
              src={slideImage.url}
              alt={slideImage.caption}
              layout="fill"
              className="object-cover"
            />
          </div>
        ))}
      </Slide>

      {/* This text stays fixed over the slideshow */}
      <div className="absolute  text-white font-paprika z-10 top-[350px] left-[100px] 2xl:left-[200px] ">
        <p className="w-[830px] text-[65px] font-[400] drop-shadow-lg">
          Experience Serenity and Adventure in Pasikudah
        </p>
        <p className="w-[589px] text-[35px] font-[400] pt-[10px] pb-[50px]">{`– Your Ultimate Coastal Escape!`}</p>
        <div className="flex items-center gap-[80px]">
          <Link
            href="#booking-section"
            className="pl-[106px] pr-[106px] pt-[17px] pb-[17px] text-[28px] font-[600] rounded-[10px] bg-[#4CBB16] font-onest"
          >
            Book Now
          </Link>

          <div className="flex space-x-4 p-4 w-[315px] h-[70px] justify-evenly items-center bg-white/10 backdrop-blur-lg rounded-lg shadow-lg">
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
      </div>
    </div>
  );
}

export default LandingImageDesktop;

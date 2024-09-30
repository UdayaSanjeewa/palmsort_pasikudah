import React from "react";
import { HeroSection } from "@/components/Rooms";
import Image from "next/image";

import * as motion from "framer-motion/client";
import fadeIn from "../../variants";

interface HeroProps {
  data: HeroSection;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className="relative w-full h-[246px]  lg:h-[460px]">
      <Image
        src={data.Img.src}
        alt={data.title}
        layout="fill"
        className="object-cover"
      />
      {/* Linear gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to left, 
            rgba(0, 25, 70, 0.0425) 4.25%, 
            rgba(0, 25, 70, 0.5525) 55.25%, 
            rgba(0, 25, 70, 0.765) 76.5%
          )`,
        }}
      />

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="absolute inset-0 flex flex-col gap-8 lg:gap-10 font-onest text-white z-10 ml-[20px] lg:ml-[200px]">
          <p className=" text-[28px] lg:text-[60px] font-[400] font-paprika mt-[20px] lg:mt-[60px]">
            {data.title}
          </p>
          <div className="flex">
            <p className="text-[20px] lg:text-[30px] font-[500] items-center w-[160px] lg:w-[230px]">
              Non A/C Room
            </p>
            <p className="items-center text-[20px] lg:text-[30px] font-[500] w-[20px] lg:w-[40px]">
              -
            </p>
            <div className="w-[100px] lg:w-[163px] flex items-center justify-center h-[36px] rounded-[15px] text-[20px] font-[700] bg-[#41BB16]">
              {data.NonACPrice}
            </div>
          </div>
          <div className="flex items-center ">
            <p className="text-[20px] lg:text-[30px] font-[500] items-center w-[160px] lg:w-[230px]">
              A/C Room
            </p>
            <p className="items-center text-[20px] lg:text-[30px] font-[500] w-[20px] lg:w-[40px]">
              -
            </p>
            <div className="w-[100px] lg:w-[163px] flex items-center justify-center h-[36px] rounded-[15px] text-[20px] font-[700] bg-[#41BB16]">
              {data.ACprice}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

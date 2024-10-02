import Image from "next/image";
import React from "react";
import OwnersIMGOne from "@/resources/OwnersIMGOne.jpeg";
import OwnersIMGTwo from "@/resources/OwnersIMGTwo.jpeg";
import OwnersIMGThree from "@/resources/OwnersIMGThree.jpeg";

function OwnersSection() {
  return (
    <div className="h-[700px] lg:h-[900px] flex justify-center">
      <div className="">
        <Image
          src={OwnersIMGOne}
          alt="OwnersIMGOne"
          className="2xl:w-[1020px] lg:w-[600px] hidden lg:block h-[800px] rounded-r-[12px]"
        />
      </div>

      <div className="flex flex-col items-center justify-center h-[800px] gap-20">
        <p className="font-paprika text-[30px] lg:text-[45px]  2xl:ml-[50px] text-[#001946] text-center lg:w-[650px] xl:w-[900px]">
          Meet the Owners
        </p>

        <div className="xl:w-[552px] h-[400px] w-[320px] lg:h-[500px] border-[3px] border-[#00329599] flex flex-col justify-center gap-10">
          <div className="flex gap-5 items-center ml-[30px] xl:ml-[80px]">
            <Image
              src={OwnersIMGThree}
              alt="OwnersIMGThree"
              className="xl:w-[161px] xl:h-[161px] w-[100px] h-[100px] rounded-[85px]"
            />
            <p className="text-[25px] font-[500] ">Mrs. V Nirmaladevi</p>
          </div>
          <div className="flex gap-5 items-center ml-[30px]  xl:ml-[80px]">
            <Image
              src={OwnersIMGTwo}
              alt="OwnersIMGTwo"
              className=" xl:w-[161px] xl:h-[161px] w-[100px] h-[100px] rounded-full"
            />
            <p className="text-[25px] font-[500]">Mr. C David</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnersSection;

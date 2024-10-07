import Image from "next/image";
import React from "react";
import Vision from "@/resources/vision.jpeg";
import Mission from "@/resources/Mission.jpeg";

function BottomSection() {
  return (
    <div className="h-[1100px] lg:[1000px]  w-full flex flex-col  items-center">
      <div className="2xl:w-[1476px] lg:w-[1000px] h-[370px] lg:h-[420px] flex flex-col lg:flex-row ">
        <div className="lg:w-[500px] 2xl:w-[738px] w-[320px] bg-[#EAEDF2] flex  justify-center flex-col gap-5 text-balance p-10 lg:p-0 lg:pl-[60px]">
          <p className="lg:text-[30px] font-[400] font-paprika">Our Vision</p>
          <p className="lg:w-[400px] 2xl:w-[619px] lg:text-[28px] font-[300]">
            {`"To become a renowned retreat, known for offering a peaceful,
            nature-filled getaway where guests can relax under the shade of palm
            trees, enjoying personalized service and easy access to the beauty
            of Passikudah."`}
          </p>
        </div>

        <div className="lg:w-[500px] 2xl:w-[738px]">
          <Image
            src={Vision}
            alt=""
            className="lg:w-[500px] 2xl:w-[738px] w-[320px] h-[270px] lg:h-[420px] object-cover object-top"
          />
        </div>
      </div>

      <div className="2xl:w-[1476px] lg:w-[1000px] h-[370px] lg:h-[420px] flex lg:mt-[0] lg:flex-row mt-[315px] flex-col-reverse">
        <div className="lg:w-[500px] 2xl:w-[738px]">
          <Image
            src={Mission}
            alt=""
            className="lg:w-[500px] 2xl:w-[738px] w-[320px] h-[200px] lg:h-[420px] object-cover object-top"
          />
        </div>

        <div className="lg:w-[500px] 2xl:w-[738px] w-[320px] bg-[#EAEDF2] flex  justify-center flex-col gap-5 text-balance p-10 lg:p-0 lg:pl-[60px]">
          <p className="lg:text-[30px] font-[400] font-paprika">Our Mission</p>
          <p className="lg:w-[400px] 2xl:w-[619px] lg:text-[28px] font-[300]">
            {`"To offer a serene escape amidst lush palm trees, providing guests with a tranquil environment, exceptional hospitality, and modern comforts, creating a rejuvenating experience just a short distance from the attractions of Passikudah."`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;

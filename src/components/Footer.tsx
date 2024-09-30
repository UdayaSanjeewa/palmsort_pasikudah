import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaAt } from "react-icons/fa";

function Footer() {
  return (
    <div className="font-onest flex flex-col pl-[20px] lg:pl-[0px] lg:flex-row lg:h-[457px] h-[650px] text-white bg-[#001946] lg:justify-evenly lg:items-center">
      {/*Logo*/}
      <div className="font-paprika mt-[50px]  lg:mt-[150px] text-[35px]">
        Palm Sort
      </div>

      {/* QuickLinks */}
      <div className="flex flex-col">
        <div className="text-[30px] font-[600] mt-[50px] lg:mt-[0px] lg:mb-[60px]">
          Quick Links
        </div>
        <div className="text-[18px] mt-[30px] lg:text-[22px] text-[#D9D9D9CC] opacity-[80%] flex flex-col gap-5">
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      {/* Contact */}
      <div>
        <div className="flex flex-col">
          <div className="text-[30px] font-[600] mt-[50px] lg:mt-[0px] lg:mb-[80px]">
            Contact
          </div>

          <div className="text-[18px] mt-[30px] lg:text-[22px] font-[600] flex flex-col gap-5 lg:mb-[25px]">
            <div className="flex gap-5 items-center">
              <FiPhoneCall className="text-[#41BB16]" />
              <p>+94 652 053682 / +94 777 670333</p>
            </div>
            <div className="flex gap-5 items-center">
              <FaAt className="text-[#41BB16]" />
              <p>PALMSORTPASIKUDAH@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import Image from "next/image";
import React from "react";
import ContactFormIMG from "@/resources/ContactFormIMG.jpeg";
import ContactForm from "../Forms/ContactForm";
import { FiPhoneCall } from "react-icons/fi";
import { FaAt } from "react-icons/fa";

function ContactSection() {
  return (
    <div
      id="contact-us"
      className="flex lg:h-[1000px] justify-center scroll-mt-[100px]"
    >
      {/* Contact form */}
      <div className="flex flex-col items-center gap-5 lg:w-[600px]  xl:w-[900px]">
        <p className="text-[#001946] lg:text-[40px] lg:font-[400] text-center text-[28px] font-paprika">
          Contact Form
        </p>
        <ContactForm />
        <div className="xl:w-[550px] lg:w-[400px] w-[350px] h-[80px] lg:h-[120px] xl:h-[150px] flex flex-col xl:pl-[50px] bg-[#41BB16] items-center rounded-[12px] text-white font-onest lg:text-[20px] xl:text-[22px] lg:font-[600] justify-evenly">
          <div className="flex gap-5 items-center">
            <FiPhoneCall />
            <p>+94 652 053680 / +94 777 670333</p>
          </div>
          <div className="flex gap-5 items-center">
            <FaAt />
            <p>info@pasikudahpalmsort.com</p>
          </div>
        </div>
      </div>

      {/* IMG */}
      <div>
        <Image
          src={ContactFormIMG}
          alt="ContactFormIMG"
          className="lg:w-[850px] 2xl:w-[1020px] lg:h-[600px] xl:h-[800px] rounded-l-[12px] hidden lg:block"
        />
      </div>
    </div>
  );
}

export default ContactSection;

import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import * as motion from "framer-motion/client";

function Whatsapp() {
  const variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="fixed bottom-10 right-10"
    >
      <Link
        href="/"
        className="text-green-500 bg-[#c9f4d9] rounded-full h-[50px] w-[50px]  lg:w-[85px] lg:h-[85px] items-center flex justify-center shadow-lg z-50"
      >
        <FaWhatsapp size={45} />
      </Link>
    </motion.div>
  );
}

export default Whatsapp;

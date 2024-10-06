'use client'
import React, { useState } from "react";
import Link from "next/link";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Main Container
    <div className="w-full h-[50px] lg:h-[75px] flex justify-around items-center shadow-lg sticky top-0 z-20 bg-white">
      {/* Logo */}
      <div className="text-[22px] font-[400] font-paprika">
        Palm Sort
      </div>

      {/* Menu Button for Small Screens */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Nav Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:w-[650px] lg:justify-between lg:text-[20px] lg:font-[600] absolute font-onest lg:static top-[100%] left-0 w-full bg-white lg:bg-transparent`}
      >
        <Link
          href="/"
          className="block py-2 px-4 text-center lg:inline-block lg:py-0 lg:px-0"
        >
          Home
        </Link>
        <Link
          href="/#about-us"
          className="block py-2 px-4 text-center lg:inline-block lg:py-0 lg:px-0"
        >
          About Us
        </Link>
        <Link
          href="/#contact-us"
          className="block py-2 px-4 text-center lg:inline-block lg:py-0 lg:px-0"
        >
          Contact Us
        </Link>
        <Link
          href="/Gallery"
          className="block py-2 px-4 text-center lg:inline-block lg:py-0 lg:px-0"
        >
          Gallery
        </Link>
        <Link
          href="/PrivacyPolicy"
          className="block py-2 px-4 text-center lg:inline-block lg:py-0 lg:px-0"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

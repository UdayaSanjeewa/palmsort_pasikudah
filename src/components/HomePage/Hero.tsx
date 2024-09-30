import Image from "next/image";
import React from "react";
import HeroSecIMGOne from "@/resources/HeroSecIMGOne.jpeg";
import HeroSecIMGTwo from "@/resources/HeroSecIMGTwo.jpeg";

function Hero() {
  return (
    <div
      id="about-us"
      className="flex flex-row h-[500px] lg:mt-10 lg:h-[1240px] justify-center items-center lg:gap-10 xl:gap-20 gap-32 scroll-mt-[100px]"
    >
      {/* About */}
      <div className="lg:w-[400px] 2xl:w-[738px] w-[320px] flex flex-col gap-5 lg:p-5 2xl:p-0">
        <h2 className="text-[65px] font-[400] font-paprika hidden lg:block">
          Palm Sort Pasikudah
        </h2>

        <div className="flex flex-col gap-5 text-[14px] font-onest  text-center lg:gap-5 lg:text-[22px] lg:font-[400]">
          <p>
            Immerse yourself in the tranquil beauty of Palm Sort Pasikudah, a
            hidden gem nestled in the picturesque region of Pasikudah. Our
            resort is an oasis of calm, surrounded by majestic palm trees that
            offer a serene escape from the everyday.
          </p>
          <p>
            Indulge in our meticulously designed rooms, where comfort and
            elegance meet. Choose from our air-conditioned or
            non-air-conditioned options, each featuring a private washroom for
            your convenience. Our accommodations are thoughtfully arranged to
            ensure a restful and rejuvenating stay.
          </p>
          <p>
            At Palm Sort Pasikudah, we pride ourselves on providing a sanctuary
            of peace and quiet. Our lush garden invites you to bask in the
            gentle breeze of the surrounding palm trees, while our evening
            bonfire offers a perfect setting for relaxation and intimate
            gatherings.
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="flex-col hidden lg:flex">
        <Image src={HeroSecIMGOne} alt="" className="h-[218px] w-[350px] 2xl:h-[318px] 2xl:w-[510px]" />
        <Image
          src={HeroSecIMGTwo}
          alt=""
          className="h-[218px] w-[350px] 2xl:h-[318px] 2xl:w-[510px] lg:ml-[80px] 2xl:ml-[130px]"
        />
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import PackagesCard from "./PackagesCard";
import SingleRoom from "@/resources/SingleRoom.jpeg";
import DoubleRoom from "@/resources/DoubleRoom.jpeg";
import TribleRoom from "@/resources/TribleRoom.jpeg";

const SRoom = {
  IMG: SingleRoom,
  name: "Single Room",
  price: "2500",
  link: "/SingleRoom",
};

const DRoom = {
  IMG: DoubleRoom,
  name: "Double Room",
  price: "3500",
  link: "/DoubleRoom",
};

const TRoom = {
  IMG: TribleRoom,
  name: "Trible Room",
  price: "5000",
  link: "/TribleRoom",
};

function Packages() {
  return (
    <div
      id="booking-section"
      className="lg:h-[820px] h-[1650px] flex flex-col gap-[40px] lg:scroll-mt-[100px]"
    >
      <p className="lg:text-[50px] font-paprika text-[35px] font-[400] text-center">
        Our Packages
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 lg:justify-evenly">
        <PackagesCard {...SRoom} />
        <PackagesCard {...DRoom} />
        <PackagesCard {...TRoom} />
      </div>
    </div>
  );
}

export default Packages;

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Rooms from '@/components/Rooms';
import React from 'react';

// Images
import RoomsHeroIMG from "@/resources/RoomsHeroIMG.jpeg";
import RoomsMidtopLeft from "@/resources/RoomsMidTopLeft.jpeg"
import RoomsMidtopRight from "@/resources/RoomsMidTopRight.jpeg"
import RoomsMidbottomleft from "@/resources/RoomsMidleftBottom.jpeg"
import RoomsMidbottomright from "@/resources/RoomsMidrightBottom.jpeg"
import GalleryIMG01 from "@/resources/GalleryIMG01.jpeg";
import GalleryIMG02 from "@/resources/GalleryIMG02.jpeg";
import GalleryIMG03 from "@/resources/GalleryIMG03.jpeg";
import GalleryIMG04 from "@/resources/GalleryIMG04.jpeg";
import GalleryIMG05 from "@/resources/GalleryIMG05.jpeg";
import GalleryIMG06 from "@/resources/GalleryIMG06.jpeg";

// Icons
import { FaWifi } from "react-icons/fa";
import { FaSquareParking } from "react-icons/fa6";
import { FaDog } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

const DoubleRoomData = {
  HeroSection: {
    title: "Double Room",
    NonACPrice: "3500",
    ACprice: "5000",
    Img: RoomsHeroIMG,
  },

  Mid: {
    imgtopLeft: RoomsMidtopLeft,
    imgtopright: RoomsMidtopRight,
    imgbottomLeft: RoomsMidbottomleft,
    imgbottomright: RoomsMidbottomright,
  },

  AmenitiesData: {
    items: [
      { icon: <FaWifi key={"Wifi"} />, name: "Free WIFI" },
      { icon: <FaSquareParking key={"parking"} />, name: "Free Parking" },
      { icon: <FaDog key={"pets"} />, name: "Pets Allowed" },
      { icon: <FaCreditCard key={"cards"} />, name: "Pay with Credit/Debit Card" },
      { icon: <MdFamilyRestroom key={"family"} />, name: "Family Rooms" },
    ],
  },

  GalleryData: {
    img01: GalleryIMG01,
    img02: GalleryIMG02,
    img03: GalleryIMG03,
    img04: GalleryIMG04,
    img05: GalleryIMG05,
    img06: GalleryIMG06,
  },
};

function DoubleRoom() {
  return (
    <>
      <NavBar />
      <Rooms data={DoubleRoomData} /> 
      <Footer />
    </>
  );
}

export default DoubleRoom;

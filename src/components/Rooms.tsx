import React from 'react';
import Hero from './Rooms/Hero';
import MidSection from './Rooms/MidSection';
import Amenities from './Rooms/Amenities';
import Gallery from './Rooms/Gallery';
import { StaticImageData } from "next/image";

export interface HeroSection {
  title: string;
  NonACPrice: string;
  ACprice: string;
  Img: StaticImageData;
}

export interface Mid {
  imgtopLeft: StaticImageData;
  imgtopright: StaticImageData;
  imgbottomLeft: StaticImageData;
  imgbottomright: StaticImageData;
}

export interface Amenity {
  icon: JSX.Element; 
  name: string;
}

export interface AmenitiesData {
  items: Amenity[];  // Array of amenities
}

export interface GalleryData {
  img01: StaticImageData;
  img02: StaticImageData;
  img03: StaticImageData;
  img04: StaticImageData;
  img05: StaticImageData;
  img06: StaticImageData;
}

export interface RoomDataType {
  HeroSection: HeroSection;
  Mid: Mid;
  AmenitiesData: AmenitiesData;
  GalleryData: GalleryData;
}

export interface RoomProps {
  data: RoomDataType;
}

const Rooms: React.FC<RoomProps> = ({ data }) => {

  return (
    
    <div>
      <Hero data={data.HeroSection} /> {/* Pass the HeroSection data */}
      <MidSection data={data.Mid} /> {/* Pass the Mid data */}
      <Amenities data={data.AmenitiesData} />{/* Pass the Amenities data */}
      <Gallery data={data.GalleryData} /> {/* Pass the Gallery data */}
    </div>
  );
};

export default Rooms;

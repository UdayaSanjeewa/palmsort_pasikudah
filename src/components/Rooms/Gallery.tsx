import React from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";
import fadeIn from "../../variants";
import { GalleryData } from "../Rooms";

interface GalleryProps {
  data: GalleryData;
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="lg:h-[600px] xl:h-[800px] h-[1350px] flex justify-center"
    >
      <div className="lg:grid lg:grid-cols-3 lg:h-[400px] 2xl:w-[1366px] 2xl:h-[566px]">
        {Object.values(data).map((img, index) => (
          <Image
            key={index}
            src={img}
            className="lg:w-[320px] lg:h-[200px] xl:w-[455px] w-[300px] h-[215px] xl:h-[283px] object-cover"
            alt={`Gallery Image ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;

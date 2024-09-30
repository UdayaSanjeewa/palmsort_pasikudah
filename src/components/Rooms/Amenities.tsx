import React from "react";
import * as motion from "framer-motion/client";
import fadeIn from "../../variants";
import type { AmenitiesData } from "../Rooms";

interface AmenitiesProps {
  data: AmenitiesData;
}


const Amenities: React.FC<AmenitiesProps> = ({ data }) => {

  if (!data || !data.items) {
    return <div>No amenities available.</div>;
  }

  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="text-[#001946] font-paprika font-[400] text-[40px] text-center">
        Amenities
      </div>

      <div className="flex lg:flex-row flex-col justify-center lg:gap-[100px]  ml-[30px] lg:ml-[10px] lg:text-center gap-5 p-[50px] lg:p-[0] lg:h-[150px]">
        {data.items.map((amenity, index) => (
          <div key={index} className="flex items-center text-[#41BB16]">
            {amenity.icon}
            <span className="ml-2 text-black text-[16px] font-[500]">
              {amenity.name}
            </span>{" "}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Amenities;

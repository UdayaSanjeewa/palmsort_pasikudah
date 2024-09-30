import React from "react";
import { Mid } from "@/components/Rooms";
import ReservationForm from "../Forms/ReservationForm";
import MidImageGrid from "./MidImageGrid";

import * as motion from "framer-motion/client";
import fadeIn from "../../variants";

interface MidSectionProps {
  data: Mid;
}

const MidSection: React.FC<MidSectionProps> = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row h-[1000px] items-center justify-evenly">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <ReservationForm />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <MidImageGrid data={data} />
      </motion.div>
    </div>
  );
};

export default MidSection;

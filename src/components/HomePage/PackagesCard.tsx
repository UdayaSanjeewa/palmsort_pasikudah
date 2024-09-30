import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface PackagesCardProps {
  IMG: StaticImageData;
  name: string;
  price: string;
  link: string;
}

const PackagesCard: React.FC<PackagesCardProps> = (props) => {
  return (
    <Link
      href={props.link}
      className="lg:w-[300px]  2xl:w-[486px] w-[320px] h-[450px] flex flex-col font-onest 2xl:h-[620px] bg-[#EAEDF2] hover:bg-[#003295] hover:text-white rounded-[23px] group"
    >
      <div className="flex justify-center lg:w-[300px] 2xl:w-[486px]  w-[320px] ">
        <Image
          src={props.IMG}
          alt={props.name}
          className="lg:w-[250px] lg:h-[229px] 2xl:w-[460px] w-[300px] h-[250px] 2xl:h-[329px] mt-[20px] rounded-[10px]"
        />
      </div>

      <div className="flex flex-col mt-[20px] ml-[20px] lg:ml-[0]  gap-[10px] lg:gap-[20px]">
        <p className="text-[26px] lg:ml-[40px] lg:text-[30px] 2xl:text-[35px] font-[600] text-[#001946] group-hover:text-white">
          {props.name}
        </p>
        <p className="text-[18px] lg:ml-[40px] lg:[20px] 2xl:text-[25px] font-[400] group-hover:text-white">
          A/C or Non A/C
        </p>

        <div className="w-[271px] lg:ml-[15px] 2xl:mt-[20px] flex items-center justify-center text-white rounded-[12px] h-[52px] group-hover:bg-[#4CBB16] bg-[#003295]">
          <p className="text-[20px] font-[700] group-hover:text-white">
            {props.price} LKR Onwards
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PackagesCard;

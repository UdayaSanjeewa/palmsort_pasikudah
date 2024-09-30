import Image from "next/image";
import { Mid } from "@/components/Rooms";

interface MidSectionProps {
  data: Mid;
}

const ImageGrid: React.FC<MidSectionProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2">
      <Image
        src={data.imgtopLeft}
        alt="Top-left"
        className="lg:w-[250px] xl:w-[498px] w-[150px] h-[110px]  lg:h-[220px] xl:h-[300px] rounded-[5px] lg:rounded-[15px]"
      />

      <Image
        src={data.imgtopright}
        alt="Top-right"
        className="lg:w-[250px] xl:w-[498px]  w-[150px] h-[110px]  lg:h-[220px] xl:h-[300px] rounded-[5px] lg:rounded-[15px]"
      />

      <Image
        src={data.imgbottomLeft}
        alt="Bottom-left"
        className="lg:w-[250px] xl:w-[498px] w-[150px] h-[110px]  lg:h-[220px] xl:h-[300px] rounded-[5px] lg:rounded-[15px] "
      />

      <Image
        src={data.imgbottomright}
        alt="Bottom-right"
        className="lg:w-[250px] xl:w-[498px]   w-[150px] h-[110px]  lg:h-[220px] xl:h-[300px] rounded-[5px] lg:rounded-[15px]"
      />
    </div>
  );
};

export default ImageGrid;

import React from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Img02 from "@/resources/gallery/OutDoor/Out2.jpeg";
import Img03 from "@/resources/gallery/OutDoor/Out3.jpeg";
import Img04 from "@/resources/gallery/OutDoor/Out4.jpeg";
import Img05 from "@/resources/gallery/OutDoor/Out5.jpeg";
import Img06 from "@/resources/gallery/OutDoor/Out6.jpeg";
import Img07 from "@/resources/gallery/OutDoor/Out7.jpeg";
import Img08 from "@/resources/gallery/OutDoor/Out8.jpeg";
import Img09 from "@/resources/gallery/OutDoor/Out9.jpeg";
import Img10 from "@/resources/gallery/OutDoor/Out10.jpeg";
import Img11 from "@/resources/gallery/OutDoor/Out11.jpeg";
import Img12 from "@/resources/gallery/OutDoor/Out12.jpeg";
import Img13 from "@/resources/gallery/OutDoor/Out13.jpeg";
import Img14 from "@/resources/gallery/OutDoor/Out14.jpeg";
import Img15 from "@/resources/gallery/OutDoor/Out15.jpeg";
import Img16 from "@/resources/gallery/OutDoor/Out16.jpeg";
import Img18 from "@/resources/gallery/OutDoor/Out18.jpeg";
import Img19 from "@/resources/gallery/OutDoor/Out19.jpeg";
import Img20 from "@/resources/gallery/OutDoor/Out20.jpeg";
import Img21 from "@/resources/gallery/OutDoor/Out21.jpeg";
import Img22 from "@/resources/gallery/OutDoor/Out22.jpeg";
import Img23 from "@/resources/gallery/OutDoor/Out23.jpeg";
import Img24 from "@/resources/gallery/OutDoor/Out24.jpeg";
import Img25 from "@/resources/gallery/OutDoor/Out25.jpeg";
import Img26 from "@/resources/gallery/Indoor/In1.jpeg";
import Img27 from "@/resources/gallery/Indoor/In2.jpeg";
import Img28 from "@/resources/gallery/Indoor/In3.jpeg";
import Img29 from "@/resources/gallery/Indoor/In4.jpeg";
import Img30 from "@/resources/gallery/Indoor/In5.jpeg";
import Img31 from "@/resources/gallery/Indoor/In6.jpeg";
import Img32 from "@/resources/gallery/Indoor/In7.jpeg";
import Footer from "@/components/Footer";


function Gallery() {
  const images = [
    Img02,
    Img03,
    Img04,
    Img05,
    Img06,
    Img07,
    Img08,
    Img09,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img18,
    Img19,
    Img20,
    Img21,
    Img22,
    Img23,
    Img24,
    Img25,
    Img26,
    Img27,
    Img28,
    Img29,
    Img30,
    Img31,
    Img32,

  ];

  return (
    <div>
      <NavBar />
      <p className="h-[100px] flex justify-center items-center text-center font-paprika font-[700] text-[28px]">
        Gallery
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mb-[100px]">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-lg"
              
            />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Gallery;

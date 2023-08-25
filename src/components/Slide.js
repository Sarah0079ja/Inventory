import React,{useState} from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import battery1 from "../assets/battery1.png";
import filter1 from "../assets/filter1.png";
import tyre1 from "../assets/tyre1.png";
import Gasket from "../assets/Gasket.png";
import carstereo from "../assets/carstereo.png";
import carheadlights from "../assets/carheadlights.png";



const images = [
  battery1,
  filter1,
  tyre1,
  tyre1,
  Gasket,
  carheadlights,
  carstereo
];

const Slide = () => {
    const [pic, setPic] = useState(false)

    const handleNextClick = ()=> {
        const newPic = pic + 3;
        if (newPic < images.length) {
            setPic(newPic)
        }
    }

    const handlePrevClick = () => {
      const newPic = pic - 3;
      if (newPic >= 0) {
        setPic(newPic);
      }
    };

    const displayedImages = images.slice(pic, pic + 3);
  return (
    <div className="p-4">
      <div className="flex justify-center space-x-4">
        <button className="" onClick={handlePrevClick}>
          <MdKeyboardArrowLeft className="mt-[20px] bg-white rounded-full" />
        </button>
        {displayedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="h-[50px] w-[50px]  border hover:border-[#fa7d5c]
             rounded-[5px] bg-white mt-[20px]"
          />
        ))}
        <button className="" onClick={handleNextClick}>
          <MdKeyboardArrowRight className="mt-[20px] bg-white rounded-full" />
        </button>
      </div>
    </div>
  );
}

export default Slide
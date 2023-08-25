import React from "react";
import { FaBolt, FaEllipsisV } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineCar, AiFillStar, AiOutlineLike } from "react-icons/ai";
import { GiBrain, GiHomeGarage, GiCartwheel } from "react-icons/gi";
import { RiHandbagLine } from "react-icons/ri";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import battery1 from "../assets/battery1.png";
import filter1 from "../assets/filter1.png";
import tyre1 from "../assets/tyre1.png";
import mech2 from "../assets/mech2.png";
import rims2 from "../assets/rims2.png";
import car1 from "../assets/car1.png";
import mech3 from "../assets/mech3.png";
import carlogo1 from "../assets/carlogo1.png";
import carlogo2 from "../assets/carlogo2.png";
import carlogo3 from "../assets/carlogo3.png";
import carlogo4 from "../assets/carlogo4.png";
import carlogo5 from "../assets/carlogo5.png";
import carlogo6 from "../assets/carlogo6.png";
import carlogo7 from "../assets/carlogo7.png";
import Google from "../assets/Google.png";
import Star from "./Star";
import Slide from './Slide'

const Main = () => {
  return (
    <>
      <div>
        <div className="container px-[25px] pt-[25px] bg-[#FCF5F2] mx-auto">
          {" "}
          <div className="justify-evenly mt-[25px] pb-[15px]">
            <div className="flex items-center p-4">
              <div className="p-2 bg-[#fde4db] text-slate-500 rounded-l-full h-[30px] cursor-pointer items-center">
                <div className="flex bg-[#fa7d5c] rounded-full h-[20px] w-[20px] items-center justify-center">
                  <FaBolt color="white" size="15px" className="" />
                </div>
              </div>
              <button
                className="h-[30px] pr-[14px]  r-0 outline-none w-[80px] items-center justify-center
               rounded-r-full bg-[#fde4db] text-[#fa7d5c] font-bold text-[10px] text-center sm:text-left"
              >
                Introducing
              </button>
            </div>

            <div className="grid sm:grid-cols-3">
              {/* prof1 */}
              <div className="items-center justify-center">
                <div className="mx-auto">
                  <h1 className="font-bold text-4xl md:text-3xl lg:text-4xl p-4 leading-snug truncate-2-lines">
                    Professional <h1>& Reliable</h1>
                    <span className="text-[#fa7d5c]"> Service</span>
                  </h1>
                  <p className="text-[14px] text-left leading-relaxed md:text-[12px] md:truncate-2-lines lg:text-2xl p-4 py-[20px] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum facer
                  </p>
                </div>

                <div className="flex  p-4 py-[20px] gap-[20px] items-center mx-auto">
                  <Slide/>
                </div>

                <div className="flex p-4 py-[20px] items-center justify-start gap-[10px] font-bold">
                  <button className="bg-[#FC7E5E] text-[14px] text-white px-[20px] py-1 rounded-full cursor-pointer flex items-center justify-center relative">
                    Buy Now
                  </button>

                  <h3>$ 2,000</h3>
                </div>
              </div>
              <div>
                <div className="pr-[45px]">
                  <img
                    src={tyre1}
                    alt="tyre"
                    className="h-[300px] bg-[#fa7d5c] py-3px rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="justify-start items-center basis-1/3 px-[25px]">
                  <div className="flex  flex-cols justify-start items-center gap-[20px]">
                    <div className="grid justify-start">
                      <div className="h-[40px] w-[40px] bg-[#fa7d5c]  flex items-center justify-center flex-col  px-[10px]  rounded-full mt-2">
                        <GiBrain fontSize={24} color="#ffffff" />
                      </div>

                      <FaEllipsisV
                        color="#fa7d5c"
                        className="flex items-center justify-center cursor-pointer ml-[10px] mt-[10px]"
                      />
                    </div>

                    <div>
                      <h2 className="font-bold text-[14px]">Original Parts</h2>
                      <p>2 years warranty</p>
                    </div>
                  </div>

                  <div className="flex justify-start items-center gap-[20px]">
                    <div className="grid">
                      <div className="h-[40px] w-[40px] bg-[#fa7d5c]  flex items-center justify-center flex-col px-[10px]  rounded-full mt-2">
                        <GiBrain fontSize={24} color="#ffffff" />
                      </div>
                      <FaEllipsisV
                        color="#fa7d5c"
                        className="cursor-pointer ml-[10px] mt-[10px]"
                      />
                    </div>

                    <div className="">
                      <h2 className="font-bold text-[14px]">Weather Fit</h2>
                      <p>Last for all Seasons</p>
                    </div>
                  </div>

                  <div className="flex flex-cols-2 justify-start items-center gap-[20px]">
                    <div className="grid">
                      <div className="h-[40px] w-[40px] bg-[#fa7d5c]  flex items-center justify-center flex-col px-[10px]  rounded-full mt-2">
                        <GiBrain fontSize={24} color="#ffffff" />
                      </div>
                    </div>
                    <div className="">
                      <h2 className="font-bold text-[14px]">High Tenacity</h2>
                      <p>Made from superior Materials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* services */}
          <section className="grid mt-[25px] md:grid-cols-4 sm:grid-cols-1  md:my-[100px] p-4 md:justify-center bg-[#000000] md:gap-[20px] gap-[10px] pb-[15px] rounded-[20px] ">
            <div className="  h-[200px] p-4 py-[20px] justify-between cursor-pointer gap-[20px]">
              <div>
                <h1 className="text-[#ffffff] text-[20px] leading-[17px] font-bold pt-[20px]">
                  Our Services
                </h1>
                <p className="py-[20px] text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="h-[200px] p-4 rounded-[10px] py-[20px] justify-between cursor-pointer gap-[20px] mt-[20px] bg-[#fa7d5c] ">
              <div>
                <AiOutlineCar
                  color="#fe5f37"
                  fontSize={24}
                  className="border bg-[#ffffff] rounded-[5px]"
                />
                <h1 className="text-[#ffffff] text-[20px] leading-[17px] font-bold pt-[20px]">
                  Car Wash
                </h1>
                <p className="py-[10px] text-[#f0ecec]">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>

            <div className="h-[200px] p-4 rounded-[10px] py-[20px] bg-slate-700 justify-between cursor-pointer gap-[20px] mt-[20px]">
              <div>
                <GiHomeGarage
                  color="#ffffff"
                  fontSize={24}
                  className="border bg-slate-500 rounded-[5px]"
                />
                <h1 className="text-[#ffffff] text-[20px] leading-[17px] font-bold pt-[20px]">
                  Car Garage
                </h1>
                <p className="py-[10px] text-[#f0ecec]">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>

            <div className="h-[200px] p-4 rounded-[10px] py-[20px] bg-slate-700 justify-between cursor-pointer gap-[20px] mt-[20px] ">
              <div>
                <GiCartwheel
                  color="#ffffff"
                  fontSize={24}
                  className="border bg-slate-500 rounded-[5px]"
                />
                <h1 className="text-[#ffffff] text-[20px] leading-[17px] font-bold pt-[20px]">
                  Car Repair
                </h1>
                <p className="py-[10px] text-[#f0ecec]">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </section>
          <section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:justify-between md:items-center py-20  bg-[#FCF5F2]">
            {/* <img
          src={mech2}
          alt="car repair man"
          className=" w-100 h-100"
        /> */}

            <div class="container relative">
              <div class="ml-60 pt-4 pl-4  transform -translate-x-1/2 md:h-[185px] md:w-[350px] h-40 w-[270px] rounded-t-full border-l-[10px] border-r-[10px] border-t-[10px] border-[#fad3c8]">
                <div className=" left-20  bg-[#fa7d5c] rounded-full h-[300px] w-[300px]"></div>
              </div>
              <img
                src={mech2}
                alt="car repair man"
                className="absolute right-20 bottom-0 "
              />
            </div>

            <div className="md:p-4 justify-start items-start md:justify-center md:items-center">
              <h1 className="text-2xl  md:text-4xl font-bold md:p-4 md:py-[20px] pt-16">
                Get best Service experience
              </h1>
              <p className="pt-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                aperiam ullam non necessitatibus sint nostrum molestiae sit
                voluptates repellat aspernatur, atque cumque deleniti amet
                voluptatem eos quam temporibus et? Libero.
              </p>
            </div>
          </section>
          {/* best Services */}
          <section className="grid md:grid-cols-2 lg:grid-cols-1 justify-between items-center md:py-[20px] p-4 bg-[#FCF5F2]">
            <div className="md:py-[80px]">
              <h1 className=" text-2xl md:text-4xl font-bold px-[25px] py-[15px] md:py-[20px] ">
                Explore our products
              </h1>
              <p className="  w-full md:w-2/3 md:px-[25px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                quae facere quasi quod consectetur adipisicing elit. Magni quae
                adipisicing elit. Magni quae.
              </p>
            </div>

            {/* Products */}
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-[15px]">
              <div
                className=" px-[10px] rounded-[10px] py-[10px] justify-between 
           cursor-pointer mt-[20px] bg-[#fffff3] "
              >
                <img
                  src={filter1}
                  alt=""
                  className="bg-slate-200 rounded-md w-full h-[200px] object-cover"
                />
                <div>
                  <h1 className="text-slate-700 text-[20px] leading-[17px] font-bold pt-[20px]">
                    Car Oil fuel air filter
                  </h1>
                  <p className="py-[10px] text-slate-500">Lorem ipsum dolor.</p>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-700 font-bold">$199.99</p>
                    <div className="py-[5px] px-[10px] bg-[#FCF5F2] flex items-center justify-between border border-[#fad3c8] rounded-full">
                      <AiFillStar color="gold" />
                      <p className="pl-[5px] text-slate-700 font-bold">4.8</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className=" px-[10px] rounded-[10px] py-[10px] justify-between 
          border border-r-3 border-white cursor-pointer mt-[20px] bg-[#fffff3] "
              >
                <img
                  src={tyre1}
                  alt=""
                  size="15px"
                  className="bg-slate-200 rounded-md h-[200px] w-full object-cover"
                />
                <div>
                  <h1 className="text-slate-700 text-[20px] leading-[17px] font-bold pt-[20px]">
                    Tyres
                  </h1>
                  <p className="py-[10px] text-slate-500">Lorem ipsum dolor.</p>
                  <div className="flex items-center justify-between">
                    <p>$399.99</p>
                    <div className="py-[5px] px-[10px] bg-[#FCF5F2] flex items-center justify-between border border-[#fad3c8] rounded-full">
                      <AiFillStar color="gold" />
                      <p className="pl-[5px] font-bold text-slate-700">4.8</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className=" px-[10px] rounded-[10px] py-[10px] justify-between 
          border border-r-3 border-white cursor-pointer  mt-[20px] bg-[#fffff3] "
              >
                <img
                  src={battery1}
                  alt=""
                  size="15px"
                  className="bg-slate-200 rounded-md h-[200px] w-full object-cover"
                />
                <div>
                  <h1 className="text-slate-700 text-[20px] leading-[17px] font-bold pt-[20px]">
                    Battery
                  </h1>
                  <p className="py-[10px] text-slate-500">Lorem ipsum dolor.</p>
                  <div className="flex items-center justify-between">
                    <p>$299.99</p>
                    <div className="py-[5px] px-[10px] bg-[#FCF5F2] flex items-center justify-between border border-[#fad3c8] rounded-full">
                      <AiFillStar color="gold" />
                      <p className="pl-[5px] font-bold text-slate-700">4.8</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className=" px-[10px] rounded-[10px] py-[10px] justify-between 
          border border-r-3 border-white cursor-pointer gap-[20px] mt-[20px] bg-[#fffff3] "
              >
                <img
                  src={filter1}
                  alt=""
                  size="15px"
                  className="bg-slate-200 rounded-md h-[200px] w-full object-cover"
                />
                <div>
                  <h1 className="text-slate-700 text-[20px] leading-[17px] font-bold pt-[20px]">
                    Car Oil fuel air filter
                  </h1>
                  <p className="py-[10px] text-slate-600">Lorem ipsum dolor.</p>
                  <div className="flex items-center justify-between">
                    <p>$100.99</p>
                    <div className="py-[5px] px-[10px] bg-[#FCF5F2] flex items-center justify-between border border-[#fad3c8] rounded-full">
                      <AiFillStar color="gold" />
                      <p className="pl-[5px] font-bold text-slate-700">4.8</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center py-[40px]">
              <button
                className="py-[5px] px-[10px] bg-[#ff532c] flex items-center 
          justify-between border border-[#fad3c8] rounded-full text-white"
              >
                View More
              </button>
            </div>
          </section>
          <section className="grid md:px-[25px] md:py-[80px]  md:grid-cols-2 lg:grid-cols-1 justify-between items-center bg-[#FCF5F2]">
            <div className="grid justify-center items-center md:px-[25px] px-[10px]">
              <h3 className="text-[15px] justify-center">
                Special Offer Limited Time
              </h3>
              <h1 className="text-3xl font-bold justify-start">
                Deal of The Day
              </h1>
            </div>

            <div>
              <div className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-2 p-4 bg-[#FCF5F2]">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 border ">
                  <div className="">
                    <p className="bg-[#ff532c] w-[45px] rounded-[5px] pl-[5px] py-[5px] mx-[10px] mt-[10px]">
                      -33%
                    </p>
                    <p className=" bg-yellow-300 text-[15px] pl-[5px] w-[45px] rounded-[5px] py-[2px] mx-[10px] mt-[10px]">
                      NEW
                    </p>

                    <img
                      src={rims2}
                      alt=""
                      className="w-64 aspect-16/9 justify-center items-center"
                    />
                  </div>

                  <div className="p-4">
                    <h1 className="flex items-center px-[10px] text-red-700 font-bold py-[40px]">
                      Hurry Up! Offer ends in:
                    </h1>
                    <div className="flex gap-[10px] justify-center items-center py-[15px]">
                      <p className="w-[50px] border  font-bold border-slate-300 px-[8px] items-center justify-center">
                        247 <span className="font-normal">Day</span>
                      </p>
                      <p className="w-[50px]  border  font-bold border-slate-300 px-[8px] items-center justify-center">
                        2 <span className="font-normal">Hour</span>
                      </p>
                      <p className="w-[50px] border  font-bold border-slate-300 px-[8px] items-center justify-center">
                        45 <span className="font-normal">Min</span>
                      </p>{" "}
                      <p className="w-[50px] border font-bold border-slate-300 px-[8px] items-center justify-center">
                        58 <span className="font-normal">Sec</span>
                      </p>
                    </div>
                    <Star />
                    <h1 className="font-bold pt-[25px]">
                      26'' Stainless Steel acrylic coated tyre rims
                    </h1>
                    <p className="font-bold items-center pt-[15px]">
                      $98.00{" "}
                      <span className="font-normal text-sm text-slate-500 line-through  px-[5px]">
                        $146.00
                      </span>
                    </p>
                    <div className="flex items-center py-[15px]">
                      <RiHandbagLine className=" text-slate-700 h-[50px] w-[30px] outline-none bg-[#ff532c] rounded-l-[5px] pl-[5px] " />
                      <button className="font-bold text-[14px]  bg-[#ff532c] h-[50px] w-full rounded-r-[5px]  mr-[5px] ">
                        ADD TO CART
                      </button>
                      <div className=" px-[5px] ml-[10px]  border border-[#ff532c] rounded-[5px] justify-center h-[50px]">
                        <AiOutlineLike size="30px" className="pt-[15px]" />
                      </div>
                      <div className=" px-[5px] ml-[5px]  border border-[#ff532c] rounded-[5px] justify-center h-[50px]">
                        <TbAdjustmentsHorizontal
                          size="30px"
                          className="pt-[15px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-2 p-4 border">
                  <div className="mt-[-90px]">
                    <p className="bg-[#ff532c] w-[45px] rounded-[5px] pl-[5px] py-[5px] mx-[10px] mt-[10px]">
                      -33%
                    </p>
                    <p className=" bg-yellow-300 text-[15px] pl-[5px] w-[45px] rounded-[5px] py-[2px] mx-[10px] mt-[10px]">
                      NEW
                    </p>
                    <div>
                      <img
                        src={rims2}
                        alt=""
                        className="w-64 aspect-16/9 justify-center items-center"
                      />
                    </div>
                  </div>

                  <div className="px-[20px]">
                    <h1 className="flex items-center px-[10px] text-red-700 font-bold py-[40px]">
                      Hurry Up! Offer ends in:
                    </h1>
                    <div className="flex gap-[10px] md:justify-center md:items-center py-[15px]">
                      <p className="w-[50px] border  font-bold border-slate-300 px-[8px] md:items-center md:justify-center">
                        247 <span className="font-normal">Day</span>
                      </p>
                      <p className="w-[50px]  border  font-bold border-slate-300 px-[8px] items-center justify-center">
                        2 <span className="font-normal">Hour</span>
                      </p>
                      <p className="w-[50px] border  font-bold border-slate-300 px-[8px] items-center justify-center">
                        45 <span className="font-normal">Min</span>
                      </p>{" "}
                      <p className="w-[50px] border font-bold border-slate-300 px-[8px] items-center justify-center">
                        58 <span className="font-normal">Sec</span>
                      </p>
                    </div>
                    <Star />
                    <h1 className="font-bold pt-[25px]">
                      26'' Stainless Steel Brake Pads with rings
                    </h1>
                    <p className="font-bold items-center pt-[15px]">
                      $98.00{" "}
                      <span className="font-normal text-sm text-slate-500 line-through  px-[5px]">
                        $146.00
                      </span>
                    </p>
                    <div className="flex items-center py-[15px]">
                      <RiHandbagLine className=" text-slate-700 h-[50px] w-[30px] outline-none bg-[#ff532c] rounded-l-[5px] pl-[5px] " />
                      <button className="font-bold text-[14px]  bg-[#ff532c] h-[50px] w-full rounded-r-[5px] mr-[5px] ">
                        ADD TO CART
                      </button>
                      <div className=" px-[5px] ml-[10px]  border border-[#ff532c] rounded-[5px] justify-center h-[50px]">
                        <AiOutlineLike size="30px" className="pt-[15px]" />
                      </div>
                      <div className=" px-[5px] ml-[5px]  border border-[#ff532c] rounded-[5px] justify-center h-[50px]">
                        <TbAdjustmentsHorizontal
                          size="30px"
                          className="pt-[15px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1  md:pt-[0px]  border border-[#fad3c8] bg-[#FCF5F2] ">
            <img src={car1} alt="" className="w-full h-[600px]" />

            <div className="grid grid-cols-3 absolute  h-[500px] ">
              <div className="grid pt-[130px] justify-center items-center ">
                <p className="text-sm justify-center ">(+1234) 500-500</p>
                <p className="uppercase font-light justify-center leading-none">
                  Anytime & Anywhere
                </p>
                <h1 className="uppercase font-bold text-2xl md:text-4xl justify-center leading-none">
                  you are
                </h1>
                <p className="text-sm justify-center leading-none">
                  Lorem ipsum dolor, sit adipisicing elit. Aperiam, culpa.
                </p>
                <p className="underline text-[#ff532c] py-[25px]">
                  Learn More...
                </p>
              </div>
              <img src={mech3} alt="" className="h-[500px] pt-[60px]" />
              <div className="">
                <div
                  class=" py-4 justify-center items-center pt-[130px] w-1/3
           leading-relaxed md:text-5xl text-2xl md:pl-[30px] font-bold uppercase "
                >
                  <p class="mb-1 text-[#ff532c] font-light ">pluto</p>
                  <p class="mb-1 text-[#ff532c] font-bold ">car</p>
                  <p class="mb-1 text-[#ff532c] font-medium  ">services</p>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-[200px]">
            <div className="grid justify-center items-center">
              <p className="text-sm justify-center items-center ml-[45px] ">
                Top Quality Partners
              </p>
              <h1 className="text-3xl font-bold justify-start font-Bold md:text-4xl capitalize">
                Shop By Brands
              </h1>
            </div>

            <div className="grid justify-center items-center  md:grid-cols-7 grid-cols-1 md:px-4 md:justify-center md:items-center pb-[15px] ">
              <div className="h-[200px] pt-4 justify-center cursor-pointer mt-[20px] outline-none border border-[#fad3c8] ">
                <img
                  src={carlogo1}
                  alt=""
                  className="h-[160px]  w-full object-contain"
                />
              </div>
              <div className="h-[200px] pt-4 justify-center cursor-pointer mt-[20px] outline-none border border-[#fad3c8] ">
                <img
                  src={carlogo2}
                  alt=""
                  className="h-[160px] w-full object-contain"
                />
              </div>
              <div className="h-[200px] pt-4 justify-center cursor-pointer mt-[20px] outline-none border border-[#fad3c8] ">
                <img
                  src={carlogo3}
                  alt=""
                  className="h-[160px]  w-full object-contain"
                />
              </div>
              <div className="h-[200px] pt-4 justify-center cursor-pointer mt-[20px] outline-none border border-[#fad3c8] ">
                <img
                  src={carlogo4}
                  alt=""
                  className="h-[160px]  w-full object-contain"
                />
              </div>
              <div className="h-[200px] pt-4 justify-center cursor-pointer mt-[20px] outline-none border border-[#fad3c8] ">
                <img
                  src={carlogo5}
                  alt=""
                  className="h-[160px]  w-full object-contain"
                />
              </div>
              <div className="h-[200px] pt-4 justify-center cursor-pointer mt-[20px] outline-none border border-[#fad3c8] ">
                <img
                  src={carlogo6}
                  alt=""
                  className="h-[160px]  w-full object-contain"
                />
              </div>
              <div className="h-[200px] pt-4 justify-center cursor-pointer mt-[20px] outline-none border border-[#fad3c8] ">
                <img
                  src={carlogo7}
                  alt=""
                  className="h-[160px]  w-full object-contain"
                />
              </div>
            </div>
          </section>
        </div>
        <footer>
          <div className="bg-[#fad3c8] ">
            <div className="flex bg-[#fad3c8] mt-[80px] justify-between">
              <div className="flex gap-[40px] mt-[80px] px-[25px] pr-4  ">
                <div>
                  <h1 className="font-bold">Company</h1>
                  <p>About Us</p>
                  <p>Newroom</p>
                  <p>Careers</p>
                  <p>Partnerships</p>
                </div>
                <div>
                  <h1 className="font-bold">Support</h1>
                  <p>Help Center</p>
                  <p>Open with Pluto</p>
                  <p>Careers</p>
                  <p>Partnerships</p>
                </div>
                <div>
                  <h1 className="font-bold">Connect</h1>
                  <p>Blog</p>
                  <p>Instagram</p>
                  <p>Facebook</p>
                  <p>Twitter</p>
                </div>
              </div>
              <div className=" mt-[80px] ">
                <h1 className="font-bold ">Get the Pluto App</h1>
                <p className="w-3/5">
                  Shop on the go, connect with the pluto shop and teack orders
                  with the pluto app.
                  <img src={Google} alt="" className="w-[300px]" />
                </p>
              </div>
            </div>
            <div className="border border-t-2 border-[#ff532c] mb-[25px] pl-4 px-[25px]">
              <div>
                <p> &copy; Pluto Car Repair.</p>
                <p className="pb-[25px]">
                  Terms of Service • Privacy Policy • Cookie Policy • IP Policy
                  • Sitemap
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Main;

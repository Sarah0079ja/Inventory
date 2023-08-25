import React,{useState} from 'react'
import { FaSearch, FaEnvelope,FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import anisha from '../assets/anisha.png'

const Header = () => {

    const[open, setOpen] = useState(false)
    const [dropDown, setDropDown] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    const drop = () => {
      setDropDown(!dropDown)
    }
  return (
    <div
      className="container flex lg:grid-cols-2 md:flex-cols-2 mx-auto 
    items-center justify-between py-[20px] px-[25px] bg-[#FCF5F2] relative"
    >
      <div className="flex gap-[10px] Py-[20px]">
        <h1 className="text-[20px] font-semibold items-center">Logo</h1>
      </div>

      {/* hamburger menu for mobile */}
      <div className="md:hidden cursor-pointer" onClick={toggle}>
        <FaBars />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-4 text-1xl items-center justify-evenly">
        <ul className="flex text-[16px] justify-between items-center gap-[15px] leading-[20px] text-slate-600 px-[30px]  ">
          <li className="hover:text-[#FC7E5E] ">
            <a href="/home">Home</a>
          </li>
          <li className="hover:text-[#FC7E5E] ">
            <a href="/services">Services</a>
          </li>
          <li className="hover:text-[#FC7E5E] ">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-[#FC7E5E]">
            <a href="/blog">Blog</a>
          </li>
          <li className="hover:text-[#FC7E5E]">
            <a href="/contact">Contact Us</a>
          </li>
        </ul>

        <div className="flex items-center p-4">
          <input
            type="text"
            className=" h-[30px] pl-[14px] p-2 r-0 
        outline-none w-[200px] placeholder:text-[14px] rounded-l-full font-normal"
            placeholder="Search..."
          />

          <div className="p-2 bg-[#FFFFFF] text-slate-500 rounded-r-full h-[30px] cursor-pointer">
            <FaSearch color="gray" />
          </div>
        </div>

        <div className="flex items-center gap-[15px] relative">
          <div className="flex items-center  border-r-[1px] pr-[25px]">
            <FaEnvelope />
          </div>

          <div className="flex items-center justify-center gap-[15px] relative ">
            <button
              className="bg-[#FC7E5E] text-white px-[14px] py-5[px] rounded-[5px] cursor-pointer flex items-center justify-center relative"
              onClick={toggle}
            >
              Login
            </button>
            {open && (
              <div
                className="bg-white items-center px-[20px] sm:flex-cols-2 lg:grid-cols-3
              border h-[120px] w-[160px] absolute bottom-[-135px] z-20 right-0 pt-[15px] space-y-10px"
              >
                <p className="text-[14px] text-slate-500 cursor-pointer hover:text-[#FC7E5E] font-normal">
                  Create Account
                </p>
                <p className="text-[14px] text-slate-500 cursor-pointer hover:text-[#FC7E5E] font-normal">
                  Settings
                </p>
                <p className="text-[14px] text-slate-500 cursor-pointer hover:text-[#FC7E5E] font-normal">
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Nav Bar */}
      {open && (
        <div className="md:hidden absolute bg-white top-0 left-0 h-screen w-[250px] transform-transform ease-in-out duration-300 ">
          <nav>
            <div className="flex items-center p-4">
              <input
                type="text"
                className=" h-[30px] pl-[14px] r-0 bg-slate-200
                 outline-none w-[200px] placeholder:text-[14px] rounded-l-full font-normal"
                placeholder="Search..."
              />

              <div className="p-2 bg-slate-200 text-slate-500 rounded-r-full h-[30px] cursor-pointer">
                <FaSearch color="gray" />
              </div>
            </div>

            <div className="p-4 justify-center gap-[15px] relative ">
              <div className="flex">
                <button className="flex justify-start place-items-center bg-[#FC7E5E] text-white px-[14px] py-5[px] rounded-[5px] cursor-pointer">
                  Login
                </button>

                <MdKeyboardArrowDown
                  fontSize={24}
                  onClick={drop}
                  className="ml-[10px] hover:text-[#FC7E5E]"
                />
                {dropDown && (
                  <div className="bg-[#fde4db] divide-y divide-[#FC7E5E] items-center px-[20px] border h-[120px] w-[160px] absolute bottom-[-120px] pt-[15px] space-y-10px rounded-[5px]">
                    <p className="text-[16px] text-slate-500 cursor-pointer hover:text-[#FC7E5E] font-bold">
                      Create Account
                    </p>
                    <p className="text-[16px] text-slate-500 cursor-pointer hover:text-[#FC7E5E] font-bold">
                      Settings
                    </p>
                    <p className="text-[16px] text-slate-500 cursor-pointer hover:text-[#FC7E5E] font-bold">
                      Logout
                    </p>
                  </div>
                )}
              </div>
            </div>

            <ul className="flex flex-col  text-[16px]  gap-[10px] space-y-4 text-slate-600 pl-[14px] ">
              <li className="hover:text-[#FC7E5E] ">
                <a href="/home">Home</a>
              </li>
              <li className="hover:text-[#FC7E5E] ">
                <a href="/services">Services</a>
              </li>
              <li className="hover:text-[#FC7E5E] ">
                <a href="/about">About</a>
              </li>
              <li className="hover:text-[#FC7E5E]">
                <a href="/blog">Blog</a>
              </li>
              <li className="hover:text-[#FC7E5E]">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>

            <div className="flex items-center gap-[15px] relative">
              <div className="flex items-center pr-[25px] px-[14px] py-4">
                <FaEnvelope />
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header
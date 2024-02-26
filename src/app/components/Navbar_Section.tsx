"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

function Navbar_Section() {
  const [hideNav, setHideNav] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Check scroll position
      if (currentScrollY >= 180) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideNav]);
  return (
    <div
      className={`bg-white flex flex-col shadow duration-700 ease-in-out w-full ${
        hideNav ? "fixed z-[10000]" : "relative"
      }`}
    >
      <div
        className={`w-full ${
          dropDown ? "h-fit" : "h-0 md:h-16"
        } flex overflow-hidden duration-300 ease-in-out  flex-col md:flex-row justify-between px-10 bg-gray-100`}
      >
        <div className="flex flex-col md:w-full md:flex-row md:space-x-5 md:divide-x-2 py-4">
          <p className="flex flex-row text-sm justify-center px-4 items-center text-gray-400">
            <FaPhoneAlt className="mr-3" /> +918866230766 / +918460663017
          </p>
          <p className="flex flex-row text-sm justify-center px-4 items-center text-gray-400">
            <TfiEmail className="mr-3" /> ancorporation.anc24@gmail.com
          </p>
        </div>
        <div className="flex flex-row w-full md:w-fit justify-center items-center  text-lg py-4 space-x-4 divide-x-2 text-gray-300 ">
          <Link href={`/`} className=" hover:text-gray-400">
            <FaFacebook />
          </Link>
          <Link href={`/`} className="  hover:text-gray-400 ">
            <FaInstagram className=" ml-3" />
          </Link>
          <Link href={`/`} className="  hover:text-gray-400">
            <FaTwitter className=" ml-3" />
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between p-6">
        <div className="w-full md:w-fit flex flex-row justify-between items-center">
          <Link
            href={`/`}
            className="text-xl md:text-3xl font-extrabold text-yellow-400 "
          >
            A.N.CORPORATION
          </Link>
          {dropDown ? (
            <MdClose
              className="text-xl text-yellow-400 md:hidden"
              onClick={() => setDropDown((dropDown) => !dropDown)}
            />
          ) : (
            <RxHamburgerMenu
              className="text-xl text-yellow-400 md:hidden"
              onClick={() => setDropDown((dropDown) => !dropDown)}
            />
          )}
        </div>
        <div
          className={`flex flex-col ${
            dropDown ? "h-fit  my-10" : "h-0 md:h-fit"
          } overflow-hidden
          mx-auto md:mx-0 md:flex-row text-base md:my-auto space-y-4 md:space-y-0 md:space-x-7`}
        >
          <Link href={`/`} className="hover:text-yellow-400">
            Home
          </Link>
          <Link href={`/services`} className="hover:text-yellow-400">
            Services
          </Link>
          <Link href={`/about`} className="hover:text-yellow-400">
            About
          </Link>
          <Link href={`/`} className="hover:text-yellow-400">
            Blog
          </Link>
          <Link href={`/contact`} className="hover:text-yellow-400">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar_Section;

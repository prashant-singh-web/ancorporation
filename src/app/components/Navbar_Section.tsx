"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

function Navbar_Section() {
  const [hideNav, setHideNav] = useState(false);
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
    <div className={`bg-white flex flex-col shadow duration-700 ease-in-out w-full ${hideNav ? "fixed z-[10000]":"relative"}`}>
      <div className="w-full flex flex-row justify-between px-10 bg-gray-100">
        <div className="flex flex-row space-x-5 divide-x-2 py-4">
          <p className="flex flex-row text-sm justify-center px-4 items-center text-gray-400">
            <FaPhoneAlt className="mr-3" /> +918866230766 / +918460663017
          </p>
          <p className="flex flex-row text-sm justify-center px-4 items-center text-gray-400">
            <TfiEmail className="mr-3" /> ancorporation.anc24@gmail.com
          </p>
        </div>
        <div className="flex flex-row  text-lg py-4 space-x-4 divide-x-2 text-gray-300">
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
      <div className="w-full flex flex-row justify-between p-6">
        <Link href={`/`} className="text-3xl font-extrabold text-yellow-400">
            A.N.CORPORATION
        </Link>
        <div className="flex flex-row text-base my-auto space-x-7">
            <Link href={`/`} className="hover:text-yellow-400">Home</Link>
            <Link href={`/services`} className="hover:text-yellow-400">Services</Link>
            <Link href={`/about`} className="hover:text-yellow-400">About</Link>
            <Link href={`/`} className="hover:text-yellow-400">Blog</Link>
            <Link href={`/contact`} className="hover:text-yellow-400">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar_Section;

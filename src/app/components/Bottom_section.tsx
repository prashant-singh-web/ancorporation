import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarked, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

function Bottom_section() {
  return (
    <footer className="w-full flex flex-col">
        {/* contact information */}
      <div className="w-full grid grid-cols-1 gap-y-5 md:gap-y-0 md:grid-cols-3 bg-yellow-400 p-5">
        <div className="flex w-full flex-row space-x-3 ">
          <MdEmail className="size-20 rounded-full p-4 bg-white text-yellow-400" />
          <div className="flex flex-col text-white my-auto">
            <h4 className="text-base font-semibold">Email :</h4>
            <p className="text-sm">ancorporation.anc24@gmail.com</p>
          </div>
        </div>
        <div className="flex w-full flex-row space-x-3 ">
          <FaMapMarked className="size-20 rounded-full p-4 bg-white text-yellow-400" />
          <div className="flex flex-col text-white my-auto">
            <h4 className="text-base font-semibold">Address :</h4>
            <p className="text-sm">AN CORPORATION</p>
            <p className="text-sm">C/304 ,SHAHJANAND PARK,KAPODARA</p>
            <p className="text-sm">ANKLESHWAR 393002</p>
          </div>
        </div>
        <div className="flex w-full flex-row space-x-3 ">
          <MdLocalPhone className="size-20 rounded-full p-4 bg-white text-yellow-400" />
          <div className="flex flex-col text-white my-auto">
            <h4 className="text-base font-semibold">Phone Number :</h4>
            <p className="text-sm">+918866230766 / +918460663017</p>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-5 bg-[#F5F5F5]">
        <div className="flex w-full flex-col">
            <h2 className="text-sm font-semibold border-b-2 pb-1 border-yellow-400 w-20">About Us</h2>
            <hr />
            <p className="text-sm px-3 mt-3 text-gray-900/80">Founded in 2020, A.N. Corporation has quickly established itself as a leading provider of Pipeline, Structural, and Maintenance services. With over 15 years of industry experience, we have built a reputation for professionalism, reliability, and excellence.</p>
        </div>
        <div className="flex w-full flex-col">
            <h2 className="text-sm font-semibold border-b-2 pb-1 border-yellow-400 w-20">Our Services</h2>
            <hr />
            <p className="text-sm  mt-3 text-gray-900/80 flex items-center"><FaCheck className="text-yellow-400 text-lg mr-2"/> All type pipe line Fabrication & Erection</p>
            <p className="text-sm  mt-3 text-gray-900/80 flex items-center"><FaCheck className="text-yellow-400 text-lg mr-2"/>  MS, SS, GLR Reactor Installation</p>
            <p className="text-sm  mt-3 text-gray-900/80 flex items-center"><FaCheck className="text-yellow-400 text-lg mr-2"/>   Expert in API, Chemical, Pharma Formulation Plant Erection</p>
            <p className="text-sm  mt-3 text-gray-900/80 flex items-center"><FaCheck className="text-yellow-400 text-lg mr-2"/>   Expert in Pigment plant Erection & Maintenance</p>
            <p className="text-sm  mt-3 text-gray-900/80 flex items-center"><FaCheck className="text-yellow-400 text-lg mr-2"/>   Expert in all type of Boiler Installation work</p>
        </div>
        <div className="flex w-full flex-col">
            <h2 className="text-sm font-semibold border-b-2 pb-1 border-yellow-400 w-20">Other Links</h2>
            <hr />
            <div className="w-full flex flex-row m-3 space-x-3 ">
            <Link href={`/`} ><FaFacebook className="size-10 p-2 bg-yellow-400 border hover:bg-white hover:text-yellow-400 border-yellow-400 text-white"/></Link>
            <Link href={`/`} ><FaInstagram className="size-10 p-2 bg-yellow-400 border hover:bg-white hover:text-yellow-400 border-yellow-400 text-white"/></Link>
            <Link href={`/`} ><FaTwitter className="size-10 p-2 bg-yellow-400 border hover:bg-white hover:text-yellow-400 border-yellow-400 text-white"/></Link>
            <Link href={`/`} ><FaYoutube className="size-10 p-2 bg-yellow-400 border hover:bg-white hover:text-yellow-400 border-yellow-400 text-white"/></Link>
            <Link href={`/`} ><FaLinkedin className="size-10 p-2 bg-yellow-400 border hover:bg-white hover:text-yellow-400 border-yellow-400 text-white"/></Link>
            </div>
            
        </div>
      </div>
      <div className="w-full p-6 bg-white">
        <p className="text-sm text-center text-gray-950/85">© Copyright {new Date().getFullYear()}
          <b className="ml-2">A.N.CORPORATION</b>
        </p>
      </div>
    </footer>
  );
}

export default Bottom_section;

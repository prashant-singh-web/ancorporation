import React from "react";
import { CgSmartHomeBoiler } from "react-icons/cg";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiBrokenBottle } from "react-icons/gi";
import { FcAutomotive } from "react-icons/fc";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { GiFertilizerBag } from "react-icons/gi";
import { GiCementShoes } from "react-icons/gi";
import About_Team from "../components/About_Team";

function About() {
  return (
    <div className="w-full flex flex-col bg-[#F5F5F5]">
      <div className="w-full flex flex-row justify-between p-10 bg-white">
        <h3 className="text-xl font-semibold text-gray-950/85">ABOUT</h3>
      </div>
      <h2 className="mx-auto text-2xl font-bold mt-10 my-3 text-gray-950/85">
        SERVED INDUSTRY
      </h2>
      <hr className="mx-auto w-16 h-0.5 bg-yellow-400" />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 text-center /40 p-10">
        <div className="w-full flex flex-col p-4 hover:bg-white ease-in-out duration-200 hover:shadow-sm">
          <MdOutlineLocalPharmacy className="text-gray-500 text-9xl m-auto py-5" />
          <h3 className="text-base font-semibold">Pharmaceuticals</h3>
          <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
          <p className="text-sm text-left text-balance mt-3 text-gray-600">
            We provide comprehensive solutions for pharmaceutical companies,
            from pipeline fabrication and erection to plant erection and
            maintenance. Our services ensure smooth operations, adhering to the
            stringent standards of the pharmaceutical industry.
          </p>
        </div>
        <div className="w-full flex flex-col p-4 hover:bg-white ease-in-out duration-200 hover:shadow-sm">
          <LiaIndustrySolid className="text-gray-500 text-9xl m-auto py-5" />
          <h3 className="text-base font-semibold">Chemical Plants</h3>
          <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
          <p className="text-sm text-center text-balance my-3 text-gray-600">
            Our team is skilled in handling the unique requirements of chemical
            plants. We offer a range of services, including reactor
            installation, pipeline fabrication, and maintenance works.
          </p>
        </div>
        <div className="w-full flex flex-col p-4 hover:bg-white ease-in-out duration-200 hover:shadow-sm">
          <FcAutomotive className="text-gray-500 text-9xl m-auto py-5" />
          <h3 className="text-base font-semibold">Automobile Industries</h3>
          <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
          <p className="text-sm text-center text-balance my-3 text-gray-600">
            We provide comprehensive solutions for the automobile industry,
            ensuring efficient operations and high productivity.
          </p>
        </div>
        <div className="w-full flex flex-col p-4 hover:bg-white ease-in-out duration-200 hover:shadow-sm">
          <GiBrokenBottle className="text-gray-500 text-9xl m-auto py-5" />
          <h3 className="text-base font-semibold">
            Breweries & Distilleries Plants
          </h3>
          <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
          <p className="text-sm text-center text-balance my-3 text-gray-600">
            Our services for breweries and distilleries include pipeline
            fabrication, reactor installation, and plant erection and
            maintenance.
          </p>
        </div>
        <div className="w-full flex flex-col p-4 hover:bg-white ease-in-out duration-200 hover:shadow-sm">
          <IoFastFoodOutline className="text-gray-500 text-9xl m-auto py-5" />
          <h3 className="text-base font-semibold">Food Processing</h3>
          <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
          <p className="text-sm text-center text-balance my-3 text-gray-600">
            We offer a range of services for the food processing industry,
            ensuring compliance with food safety standards.
          </p>
        </div>
        <div className="w-full flex flex-col p-4 hover:bg-white ease-in-out duration-200 hover:shadow-sm">
          <ImPower className="text-gray-500 text-9xl m-auto py-5" />
          <h3 className="text-base font-semibold">Power Generation Plants</h3>
          <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
          <p className="text-sm text-center text-balance my-3 text-gray-600">
            We provide comprehensive solutions for power generation plants,
            ensuring efficient operations and minimal downtime.
          </p>
        </div>
        <div className="w-full flex flex-col p-4 hover:bg-white ease-in-out duration-200 hover:shadow-sm">
          <GiFertilizerBag className="text-gray-500 text-9xl m-auto py-5" />
          <h3 className="text-base font-semibold">Fertilizer & Sugar Plants</h3>
          <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
          <p className="text-sm text-center text-balance my-3 text-gray-600">
            Our services for the fertilizer and sugar industry include pipeline
            fabrication, reactor installation, and plant erection and
            maintenance.
          </p>
        </div>
        <div className="w-full flex flex-col p-4 hover:bg-white ease-in-out duration-200 hover:shadow-sm">
          <GiCementShoes className="text-gray-500 text-9xl m-auto py-5" />
          <h3 className="text-base font-semibold">Cement Plants</h3>
          <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
          <p className="text-sm text-center text-balance my-3 text-gray-600">
            Our services for the cement industry include pipeline fabrication,
            reactor installation, and plant erection and maintenance.
          </p>
        </div>
      </div>
      <About_Team/>
    </div>
  );
}

export default About;

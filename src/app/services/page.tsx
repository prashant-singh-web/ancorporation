import React from "react";
import { CgSmartHomeBoiler } from "react-icons/cg";
import { GiLeadPipe } from "react-icons/gi";
import { PiFactoryLight } from "react-icons/pi";
import { GiReactor } from "react-icons/gi";
import { MdOutlineWbShade } from "react-icons/md";
import { FaCloudDownloadAlt, FaHandPointUp } from "react-icons/fa";


function Services() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-between p-10 bg-white">
        <h3 className="text-xl font-semibold text-gray-950/85">OUR SERVICES</h3>
      </div>
      <div className="w-full grid grid-cols-3 text-center bg-[#F5F5F5]/40 p-10">
        <div className="w-full flex flex-col p-4 hover:bg-white ease-in-out duration-200 hover:shadow-sm">
          <CgSmartHomeBoiler className="text-gray-500 text-9xl m-auto py-5" />
          <h3 className="text-base font-semibold">Boiler Installation work</h3>
          <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
          <p className="text-sm text-left text-balance mt-3 text-gray-600">
            Our team is skilled in all types of boiler installation work. We
            adhere to the highest safety standards, ensuring that each
            installation is carried out efficiently and safely.
          </p>
        </div>
        <div className="w-full flex flex-col p-4 hover:bg-white ease-in-out duration-200 hover:shadow-sm">
          <PiFactoryLight className="text-gray-500 text-9xl m-auto py-5" />
          <h3 className="text-base font-semibold">
            {" "}
            Pigment plant Erection & Maintenance
          </h3>
          <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
          <p className="text-sm text-left text-balance mt-3 text-gray-600">
            We specialize in the erection and maintenance of various types of
            plants. Whether it’s an API, Chemical, Pharma Formulation, or
            Pigment Plant, our team has the expertise to ensure smooth
            operations and minimal downtime.
          </p>
        </div>
        <div className="w-full flex flex-col p-4 hover:bg-white ease-in-out duration-200 hover:shadow-sm">
          <GiLeadPipe className="text-gray-500 text-9xl m-auto py-5" />
          <h3 className="text-base font-semibold">
            {" "}
            Pipeline Fabrication & Erection
          </h3>
          <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
          <p className="text-sm text-left text-balance mt-3 text-gray-600">
            Our expertise lies in the fabrication and erection of pipelines made
            from various materials. Whether it’s Mild Steel (MS), Stainless
            Steel (SS), or Galvanized Iron (GI), we ensure the highest standards
            of quality and safety.
          </p>
        </div>
        
        <div className="w-full flex flex-col p-4 hover:bg-white ease-in-out duration-200 hover:shadow-sm">
          <GiReactor className="text-gray-500 text-9xl m-auto py-5" />
          <h3 className="text-base font-semibold">
            {" "}
            Reactor Installation
          </h3>
          <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
          <p className="text-sm text-left text-balance mt-3 text-gray-600">
          We handle the installation of reactors made from MS, SS, and Glass Lined Reactors (GLR). Our team ensures that each installation is carried out with precision and adherence to industry standards.
          </p>
        </div>
        <div className="w-full flex flex-col p-4 hover:bg-white ease-in-out duration-200 hover:shadow-sm">
          <MdOutlineWbShade className="text-gray-500 text-9xl m-auto py-5" />
          <h3 className="text-base font-semibold">
            {" "}
            Shade & Godown Erection
          </h3>
          <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
          <p className="text-sm text-left text-balance mt-3 text-gray-600">
          We undertake the erection of all types of Mild Steel shades and godowns. Our structures are built to last, providing reliable storage solutions for our clients.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center h-full bg-yellow-400  p-4 hover:bg-white text-gray-500 ease-in-out duration-200 hover:shadow-sm">
        <a href="file-url" download>
          <FaCloudDownloadAlt className="size-28  "/>

        </a>
        <p className="flex items-center text-sm font-semibold">For more click <FaHandPointUp className="text-xl ml-2"/></p>
        </div>
      </div>
    </div>
  );
}

export default Services;

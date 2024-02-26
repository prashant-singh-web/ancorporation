import Image from "next/image";
import React from "react";
import { GiLeadPipe } from "react-icons/gi";
import { CgSmartHomeBoiler } from "react-icons/cg";
import { PiFactoryLight } from "react-icons/pi";
import Link from "next/link";


function Company_Expertise() {
  return (
    <div className="full bg-[#F5F5F5] py-10 flex flex-col">
      <div className="w-[80%] mx-auto">
        <h2 className="text-center text-xl font-semibold">OUR SERVICES</h2>
        <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
        <p className="text-base text-center my-10">
        At <b>A.N.CORPORATION </b> our services are comprehensive and tailored to meet the diverse needs of our clients. Here’s a detailed overview of what we offer:
        </p>
        <div className="w-full grid grid-cols-3 text-center bg-white">
          <div className="w-full flex flex-col p-4">
            <CgSmartHomeBoiler className="text-gray-500 text-9xl m-auto py-5" />
            <h3 className="text-base font-semibold">
              Boiler Installation work
            </h3>
            <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
            <p className="text-sm text-left text-balance mt-3 text-gray-600">
              Our team is skilled in all types of boiler installation work. We
              adhere to the highest safety standards, ensuring that each
              installation is carried out efficiently and safely.
            </p>
          </div>
          <div className="w-full flex flex-col p-4">
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
          <div className="w-full flex flex-col p-4">
            <GiLeadPipe className="text-gray-500 text-9xl m-auto py-5" />
            <h3 className="text-base font-semibold">
              {" "}
              Pipeline Fabrication & Erection
            </h3>
            <hr className="w-16 mt-2 mx-auto h-1 bg-yellow-400" />
            <p className="text-sm text-left text-balance mt-3 text-gray-600">
              Our expertise lies in the fabrication and erection of pipelines
              made from various materials. Whether it’s Mild Steel (MS),
              Stainless Steel (SS), or Galvanized Iron (GI), we ensure the
              highest standards of quality and safety.
            </p>
          </div>
        </div>
      </div>
      <Link
        href={`/services`}
        className="w-fit mt-10 py-2 px-7 bg-yellow-400 text-sm font-semibold text-white rounded-xl mx-auto relative overflow-hidden before:absolute before:top-0 before:left-0 before:h-full before:w-3 before:bg-white/30 before:skew-x-12 before:translate-x-[-30px] hover:before:translate-x-[200px] before:duration-700 before:ease-in-out "
      >
        VIEWS ALL SERVICES
      </Link>
    </div>
  );
}

export default Company_Expertise;

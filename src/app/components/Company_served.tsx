import Image from "next/image";
import React from "react";

function Company_served() {
  const Industry_type = [
    {
      id: 1,
      industryType: "Refineries & Petrochemicals",
      url: "/oil-industry.jpg",
    },
    {
      id: 2,
      industryType: "Pharmaceuticals",
      url: "/med-industry.jpg",
    },
    {
      id: 3,
      industryType: "Chemical Plants",
      url: "/chamical-industry.jpg",
    },
  ];
  return (
    <div className="w-full my-10 " data-aos="fade-up">
      <div className="m-auto w-[90%] flex flex-col">
        <h2 className="text-3xl font-bold text-gray-900/90 mx-auto border-b-4 border-black pb-2">
          Indusrty Served
        </h2>
        <p className="text-base font-normal text-gray-900/85 my-2 mt-6">
          Founded in 2020, A.N. Corporation has quickly established itself as a
          leading provider of Pipeline, Structural, and Maintenance services.
          With over 15 years of industry experience, we have built a reputation
          for professionalism, reliability, and excellence.
        </p>
        <p className="text-base font-normal text-gray-900/85 my-2">
          Our services are comprehensive and tailored to meet the diverse needs
          of our clients. Here’s a detailed overview of what we offer:
        </p>
        <div className="w-full grid grid-cols-4 px-5 gap-[2px]">
          {Industry_type.map((industry) => {
            return (
              <div
                key={industry.id}
                className="w-full cursor-pointer aspect-square relative group overflow-hidden ease-in-out duration-200"
              >
                <div className="absolute inset-0 -z-10 group-hover:z-30 bg-black/20 ease-in-out duration-200 backdrop-blur-sm grid place-items-center">
                  <h5 className=" text-white font-bold text-xl px-10 text-center">
                    {industry.industryType}{" "}
                  </h5>
                </div>
                <Image
                  src={industry.url}
                  alt="hii"
                  width={100}
                  height={100}
                  unoptimized
                  className="w-full h-full ease-in-out duration-200 group-hover:scale-150"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Company_served;

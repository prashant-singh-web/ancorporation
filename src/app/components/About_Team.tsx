import Image from "next/image";
import React from "react";

function About_Team() {
  return (
    <div className="w-full flex flex-col py-10">
      <h2 className="text-2xl font-bold text-gray-950/80 mx-auto my-2">
        OUR TEAM
      </h2>
      <hr className="mx-auto w-16 h-1 bg-yellow-400" />
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 mx-auto mt-10">
        <div className="flex flex-col shadow rounded-md md:w-3/4 bg-white">
          <Image
            src={`/owner-1.png`}
            alt="logo"
            width={100}
            height={100}
            className="mx-auto mt-10 mb-5 w-32 aspect-square rounded-full bg-blue-400 ring-2 ring-offset-2 ring-blue-400"
          />
          <h3 className="text-xl font-semibold text-gray-950/75 mx-auto">
            MR MUKESH PARMAR
          </h3>
          <p className="text-xs font-medium text-gray-500 mx-auto">
            PROPRIETOR
          </p>
          <hr className="w-16 h-0.5 bg-yellow-400 mx-auto my-2" />
          <p className="text-sm mx-5 my-5 text-gray-900/80">
            I have been working in this field since 2000. We have successfully
            provided our services to some of the well renowned chemical &
            pharmaceutical plant in Gujrat{`'`}s , Anleshwar GIDC and Panoli GIDC. I
            and my partner MR. DHANANJAY are there to serve you . Feel free to
            contact us.
          </p>
          
        </div>
        <div className="flex flex-col  shadow rounded-md md:w-3/4 bg-white">
          <Image
            src={`/owner-2.png`}
            alt="logo"
            width={100}
            height={100}
            className="mx-auto mt-10 mb-5 w-32 aspect-square rounded-full bg-blue-400 ring-2 ring-offset-2 ring-blue-400"
          />
          <h3 className="text-xl font-semibold text-gray-950/75 mx-auto">
            MR DHANANJAY SINGH
          </h3>
          <p className="text-xs font-medium text-gray-500 mx-auto">
            PROPRIETOR
          </p>
          <hr className="w-16 h-0.5 bg-yellow-400 mx-auto my-2" />
          <p className="text-sm mx-5 my-5 text-gray-900/80">
            I have been working in this field since 2005. I have experience of
            working in{" "}
            <b>
              {" "}
              Bengaluru, Gujrat, Mumbai, Ankleshwor GIDC, Panoli GIDC, Dahej
              GIDC, Dehej SEZ{" "}
            </b>
            . We as a company have successfully completed more then 10 projects
            and several are still going on .
          </p>
        </div>
      </div>
    </div>
  );
}

export default About_Team;

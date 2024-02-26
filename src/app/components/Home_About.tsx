import Image from "next/image";
import React from "react";
import { MdEngineering } from "react-icons/md";
import { RiPaintBrushLine } from "react-icons/ri";
import { SiJfrogpipelines } from "react-icons/si";

function Home_About() {
  return (
    <div className="full bg-white py-14 flex flex-col">
      <h2 className="text-center text-2xl font-semibold">ABOUT US</h2>
      <hr className="w-16 mt-2 mx-auto h-0.5 bg-yellow-400" />
      <p className="text-base text-center my-10 w-3/4 mx-auto text-gray-900/70">
        Established in 2020, A.N. Corporation has swiftly risen to prominence as
        a leading provider of comprehensive solutions in the realm of Pipeline,
        Structural, and Maintenance works. Our journey spans over 15 years,
        during which we have built a reputation anchored in professionalism and
        a proven track record of success.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="w-full  h-fit hidden md:grid place-items-center">
          <Image
            src={`/home_about_logo.jpg`}
            alt="home_about"
            title="img"
            width={100}
            height={100}
            unoptimized
            className="size-96  rounded-full "
          />
        </div>
        <div className="w-full flex flex-col justify-between h-full px-5 md:px-0 space-y-5 md:space-y-0">
          <div className="w-full flex flex-row space-x-5">
            <MdEngineering className="size-32 border border-gray-300 text-yellow-400 p-4 h-fit rounded-full" />
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg font-semibold">
                OVER 15 YEARS EXPERIENCE
              </h3>
              <p className="w-3/4 text-sm text-gray-900/80">
                We combine quality workmanship, superior knowledge and low
                prices to provide you with service unmatched by our competitors.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row space-x-5">
            <RiPaintBrushLine className="size-32 border border-gray-300 text-yellow-400 p-4 h-fit rounded-full" />
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg font-semibold">BEST MATERIALS</h3>
              <p className="w-3/4 text-sm text-gray-900/80">
                We have the experience, personel and resources to make the
                project run smoothly. We can ensure a job is done on time.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row space-x-5">
            <SiJfrogpipelines className="size-32 border border-gray-300 text-yellow-400 p-4 h-fit rounded-full" />
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg font-semibold">PROFESSIONAL STANDARDS</h3>
              <p className="w-3/4 text-sm text-gray-900/80">
                Work with us involve a carefully planned series of steps,
                centered around a schedule we stick to and daily communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_About;

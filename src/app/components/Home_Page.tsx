"use client"
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";


function Home_Page() {
  const scrollToDown = () => {
    window.scrollTo({
      top: 1135,
      behavior: "smooth"  // if you want a smooth scrolling
    });
  };
  

  return (
    <div className="w-full min-h-[100vh] relative bg-black duration-300 ease-in-out  grid place-items-center  ">
       <div className=" text-white">
        <h1 className="text-8xl text-center font-bold tracking-tight my-auto" data-aos="fade-up">“Your Partner in Pipeline Innovation!”</h1>
        {/* <p className="text-3xl font-semibold mt-2 text-center " data-aos="fade-up">A.N.CORPORATION</p> */}
        <button onClick={scrollToDown} className="size-16 absolute bottom-5 left-1/2 flex flex-row rounded-full border mt-8 text-gray-200/35 hover:text-gray-300/80 hover:bg-white/25 font-semibold duration-200 ease-in-out  group "><FaArrowDown className="text-2xl m-auto group-hover:translate-y-1 duration-300 ease-in-out" /> </button>
       </div>
       <div className="w-full h-full  grid place-items-center">
{/*         <div className=" bg-white absolute inset-0 -z-10  overflow-hidden">
            <Image src={`/home.jpg`} alt="home" width={100} height={100} unoptimized className="w-full h-full hover:scale-125 duration-300 ease-in-out" />
        </div> */}
       </div>
    </div>
  );
}

export default Home_Page;

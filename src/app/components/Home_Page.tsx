"use client"
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";


function Home_Page() {
  // const scrollToDown = () => {
  //   window.scrollTo({
  //     top: 1135,
  //     behavior: "smooth"  // if you want a smooth scrolling
  //   });
  // };
  

  return (
    <div className="w-full h-fit md:h-[80vh] relative bg-yellow-500 duration-300 ease-in-out  grid place-items-center  ">
       
        <h1 className="text-4xl line-clamp-4 text-left ml-5 md:text-8xl md:text-center font-extrabold tracking-tight  my-28 text-white md:my-auto " data-aos="fade-up">“Your <span className="break-all"><br className="md:hidden"/> Partner</span> in <br className="md:hidden"/><span>Pipeline</span> <span>Innovation!</span>”</h1>
        {/* <p className="text-3xl font-semibold mt-2 text-center " data-aos="fade-up">A.N.CORPORATION</p> */}
  
    </div>
  );
}

export default Home_Page;

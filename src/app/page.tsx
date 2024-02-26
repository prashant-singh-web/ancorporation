"use client"
import Home_Page from "./components/Home_Page";
import Home_states from "./components/Company_states";
import Company_states from "./components/Company_states";
import Company_Expertise from "./components/Company_Expertise";
import Company_served from "./components/Company_served";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home_About from "./components/Home_About";
import Why_we_home from "./components/Why_we_home";
import Home_client from "./components/Home_client";


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <main className="flex flex-col w-full h-full" >
      <Home_Page/>
      <Company_states/>
      <Company_Expertise/>
      {/* <Company_served/> */}
      <Home_About/>
      <Why_we_home/>
      <Home_client/>
  
    </main>
  );
}

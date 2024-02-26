import React from "react";
import { MdEngineering } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { GiStockpiles } from "react-icons/gi";
import { FaUsersCog } from "react-icons/fa";

function Why_we_home() {
  return (
    <div className="full bg-[#F5F5F5] py-14 flex flex-col">
      <h2 className="text-center text-2xl font-semibold">WHY CHOOSE US</h2>
      <hr className="w-16 mt-2 mx-auto h-0.5 bg-yellow-400" />
      <p className="text-base text-center my-10 w-3/4 mx-auto text-gray-900/70">
        Founded in 2020, A.N. Corporation has quickly established itself as a
        leading provider of Pipeline, Structural, and Maintenance services. With
        over 15 years of industry experience, we have built a reputation for
        professionalism, reliability, and excellence.
      </p>
      <div className="w-[90%] mx-auto grid grid-cols-1 gap-y-10 md:gap-y-0  md:grid-cols-3">
        <div className="flex w-full flex-col">
          <GiSandsOfTime className="size-32 border border-gray-300 text-yellow-400 p-5 mx-auto h-fit rounded-full" />
          <hr className="w-[0.5px] bg-gray-300 mx-auto h-5" />
          <div className="p-1.5 rounded-full border border-gray-300 mx-auto"></div>
          <h3 className="text-lg font-semibold mx-auto mt-4">
            Timely Delivery
          </h3>
          <hr className="w-16 h-0.5 bg-yellow-400 mx-auto my-2" />
          <p className="text-sm text-gray-900/70">
            We understand the importance of timely delivery and to achieve this
            goal, the company has developed an flexible distribution set-up and
            a reliable supply chain, our distributors network spreads across the
            length and breadth of city that enable us to fulfill the bulk
            requirements of our clients in minimum possible time
          </p>
        </div>
        <div className="flex w-full flex-col">
          <GiStockpiles className="size-32 border border-gray-300 text-yellow-400 p-5 mx-auto h-fit rounded-full" />
          <hr className="w-[0.5px] bg-gray-300 mx-auto h-5" />
          <div className="p-1.5 rounded-full border border-gray-300 mx-auto"></div>
          <h3 className="text-lg font-semibold mx-auto mt-4">BEST MATERIALS</h3>
          <hr className="w-16 h-0.5 bg-yellow-400 mx-auto my-2" />
          <p className="text-sm text-gray-900/70 px-1">
            To meet our client demand at any point of time We have ware house
            where all materials are available in ready stock under one roof .We
            have been able to built up ourself so strong with existing
            infrastructure, dedicated staff & Only on our Experience.
          </p>
        </div>
        <div className="flex w-full flex-col">
          <FaUsersCog className="size-32 border border-gray-300 text-yellow-400 p-5 mx-auto h-fit rounded-full" />
          <hr className="w-[0.5px] bg-gray-300 mx-auto h-5" />
          <div className="p-1.5 rounded-full border border-gray-300 mx-auto"></div>
          <h3 className="text-lg font-semibold mx-auto mt-4 uppercase">
            Project Management
          </h3>
          <hr className="w-16 h-0.5 bg-yellow-400 mx-auto my-2" />
          <p className="text-sm text-gray-900/70">
            Today A.N.Corporation has able to execute MS Fabrication and
            Erection projects on Turnkey Basis. Our high skilled man power &
            sound financial health gives us to not just undertaking Projects of
            the largest size and magnitude but accomplish them very smoothly. We
            have Branch Office, Warehouse in Gujarat. With this we are able to
            execute project even in remote corners of the country. So that our
            clients benefit more from an association with us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why_we_home;

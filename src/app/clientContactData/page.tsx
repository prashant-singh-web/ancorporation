"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";

function ClientContactData() {
  const [formArrey, setFormArrey]:any = useState();
  console.log(formArrey)
  const [page, setPage] = useState(1);
  const client = [
    {
      name: "John",
      email: "test@example.com",
      number: "123",
      message: "hey there is another message",
    },
    {
      name: "John",
      email: "test@example.com",
      number: "123",
      message: "hey there is another message",
    },
    {
      name: "John",
      email: "test@example.com",
      number: "123",
      message: "hey there is another message",
    },
    {
      name: "John",
      email: "test@example.com",
      number: "123",
      message: "hey there is another message",
    },
    {
      name: "John",
      email: "test@example.com",
      number: "123",
      message: "hey there is another message",
    },
    {
      name: "John",
      email: "test@example.com",
      number: "123",
      message: "hey there is another message",
    },
  ];
 
  const getFormData = () => {
    try {
      axios
        .get(`/api/ContactForm/getDetail?page=${page}&limit=5`)
        .then((response) => {console.log(response.data),setFormArrey(response?.data)})
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  const deleteFormData = async (id:any) => {
    try {
     await axios.delete(`/api/ContactForm/deleteDetail?id=${id}`).then((res)=>console.log(res)).catch((err)=>console.log(err))
     await getFormData();
     await setPage(1)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getFormData();
  }, [page]);
  

  return (
    <div className="w-full p-10">
      <div className="w-full shadow-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="p-2">Name</th>
              <th className="p-2">Number</th>
              <th className="p-2">Email</th>
              <th className="p-2">Message</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {formArrey?.data?.map((client: any, ind: any) => {
              return (
                <tr
                  key={ind}
                  className="border-b text-center odd:bg-white even:bg-slate-50"
                >
                  <td className="p-2">{client?.name}</td>
                  <td className="p-2">{client?.number}</td>
                  <td className="p-2">{client?.email}</td>
                  <td className="p-2">{client?.message}</td>
                  <td className="p-2" aria-label={client?._id}>
                    <RiDeleteBin5Line onClick={()=>deleteFormData(client?._id)}  className="mx-auto text-red-500" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
{/*         <div className="w-full flex flex-row justify-between p-2">
          <p className="text-sm text-gray-950/80 my-auto">
            Showing 1 to 5 of {formArrey?.totalCount} results
          </p>
          <div className="flex flex-row justify-center space-x-7">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
              {" "}
              <FaChevronLeft className="size-10 shadow-md p-2 text-gray-700/50 rounded-sm hover:text-gray-700 cursor-pointer hover:shadow-xl ease-in-out duration-200" />
            </button>{" "}
            <button onClick={() => setPage(page + 1)}>
              {" "}
              <FaChevronRight className="size-10 shadow-md p-2 text-gray-700/50 rounded-sm hover:text-gray-700 cursor-pointer hover:shadow-xl ease-in-out duration-200" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ClientContactData;

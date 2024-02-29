import React from 'react'
import { FaMapMarked } from 'react-icons/fa'
import { MdEmail, MdLocalPhone } from 'react-icons/md'

function Contact() {
  return (
    <div className='w-full flex flex-col'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29674.070453906552!2d73.0056747077672!3d21.614836480038456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023c7dc19954f%3A0x368ef173ea705c58!2sAnkleshwar%20GIDC%2C%20Ankleshwar%2C%20Gujarat%20393001!5e0!3m2!1sen!2sin!4v1709173893820!5m2!1sen!2sin" className='w-full  aspect-video'  loading="lazy" ></iframe>
      <div className="w-full grid grid-cols-1 gap-y-5 md:gap-y-0 md:grid-cols-3 bg-white p-5">
        <div className="flex w-full flex-row space-x-3 ">
          <MdEmail className="size-20 rounded-full p-4 bg-yellow-400 text-white" />
          <div className="flex flex-col text-gray-800/80 my-auto">
            <h4 className="text-base font-semibold">Email :</h4>
            <p className="text-sm">ancorporation.anc24@gmail.com</p>
          </div>
        </div>
        <div className="flex w-full flex-row space-x-3 ">
          <FaMapMarked className="size-20 rounded-full p-4 bg-yellow-400 text-white" />
          <div className="flex flex-col text-gray-800/80 my-auto">
            <h4 className="text-base font-semibold">Address :</h4>
            <p className="text-sm">AN CORPORATION</p>
            <p className="text-sm">C/304 ,SHAHJANAND PARK,KAPODARA</p>
            <p className="text-sm">ANKLESHWAR 393002</p>
          </div>
        </div>
        <div className="flex w-full flex-row space-x-3 ">
          <MdLocalPhone className="size-20 rounded-full p-4 bg-yellow-400 text-white" />
          <div className="flex flex-col text-gray-800/80 my-auto">
            <h4 className="text-base font-semibold">Phone Number :</h4>
            <p className="text-sm">+918866230766 / +918460663017</p>
          </div>
        </div>
      </div>
      <div className=" grid py-10 grid-cols-1 md:grid-cols-2 w-3/4 gap-4 mx-auto">
        <div className="w-full flex flex-col space-y-3 md:space-y-8">
          <input type="text" placeholder='Your name' className='w-full border p-2 outline-none focus-within:border-yellow-400 text-sm' />
          <input type="email" placeholder='Your email' className='w-full border p-2 outline-none focus-within:border-yellow-400 text-sm' />
          <input type="number" name="" placeholder='Your number' id="" className='w-full border p-2 outline-none focus-within:border-yellow-400 text-sm' />
        </div>
        <div className="w-full flex flex-col">
         <textarea name="" id="" placeholder='Enter your message' className='w-full h-full border p-2 outline-none focus-within:border-yellow-400 text-sm'></textarea>
        </div>
      </div>
      <button type="submit" className=' w-3/4 md:w-fit mx-auto px-10 py-3 bg-yellow-400 text-white rounded-lg border-2 border-yellow-400 hover:bg-white hover:text-yellow-400 ease-in-out duration-200 mb-10 text-sm font-semibold'>Send Message</button>
    </div>
  )
}

export default Contact
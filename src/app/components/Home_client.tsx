import Image from 'next/image'
import React from 'react'

function Home_client() {
  return (
    <div className='w-full bg-white py-10 flex flex-col '>
        <h3 className='text-2xl text-center'>WE WORK WITH</h3>
        <hr  className='w-16 h-0.5 bg-yellow-400 mx-auto my-3'/>
        <div className=" mx-auto flex flex-row space-x-5 my-10">
            <Image src={`/client/basic.png`} alt='basic' width={100} height={100} unoptimized className='w-48 my-auto h-fit'/>
            <Image src={`/client/suyog.png`} alt='basic' width={100} height={100} unoptimized className='w-48 h-fit'/>
            <Image src={`/client/siddharth.png`} alt='basic' width={100} height={100} unoptimized className='w-48 h-fit'/>
            <Image src={`/client/ganesh.png`} alt='basic' width={100} height={100} unoptimized className='w-48 h-fit my-auto'/>
            <Image src={`/client/Narmada.png`} alt='basic' width={100} height={100} unoptimized className='w-48 h-fit my-auto'/>
        </div>
    </div>
  )
}

export default Home_client
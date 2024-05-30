import React from 'react'
import { FaEllipsisVertical } from "react-icons/fa6";
import Serch from '../HomePageComonComponent/Serch';
import Firends from "../../../../friends_img/f1.png"

const GroupList = () => {
  return (
    <div>
      <div>
    <Serch className= {"w-[427px]"} />
    </div>
      
      <div className='scrollbar-thumb-sky-700 scrollbar-track-red-500 scrollbar-thin  w-[427px] mt-5 shadow-lg rounded-lg h-[347px] overflow-y-scroll'>
        <div className=' flex  justify-between items-center px-4 rounded-xl  '>
        <h1 className=' font-Poppins text-[20px] font-semibold '>GroupList</h1>
         <span>
            <FaEllipsisVertical className='text-xl text-btn-color' />
         </span>
        </div>

      <div className='grid grid-cols-1 divide-y'>

      <div className='flex justify-between items-center pt-5  py-5  '>
          <div className='pl-4 '>
            <picture>
              <img src={ Firends } alt={ Firends } className='flex justify-start h-[70px] w-[70px] rounded-full  object-cover shadow-lg ' />
            </picture>
          </div>

            <div className='pr-10 flex flex-col justify-center items-center w-[60%] text-wrap'>
              <h1 className='font-Poppins text-[18px] font-semibold'>Friends Reunion</h1>
              <p className='font-Poppins text-[14px]  font-medium text-[#4D4D4D]'>Hi Guys, Wassup!</p>
            </div>

            <div className='pr-10'>
              <button className='py-1 bg-blue-600 px-5 rounded-lg font-Poppins text-[18px] font-semibold text-[#FFFF]'>Join</button>
            </div>

        </div>

        <div className='flex justify-between items-center pt-5  py-5 '>
          <div className='pl-4 '>
            <picture>
              <img src={ Firends } alt={ Firends } className='flex justify-start h-[70px] w-[70px] rounded-full  object-cover shadow-lg ' />
            </picture>
          </div>

            <div className='pr-10 flex flex-col justify-center items-center w-[60%] text-wrap'>
              <h1 className='font-Poppins text-[18px] font-semibold'>Friends Reunion</h1>
              <p className='font-Poppins text-[14px]  font-medium text-[#4D4D4D]'>Hi Guys, Wassup!</p>
            </div>

            <div className='pr-10'>
              <button className='py-1 bg-blue-600 px-5 rounded-lg font-Poppins text-[18px] font-semibold text-[#FFFF]'>Join</button>
            </div>

        </div>

        <div className='flex justify-between items-center pt-5  py-5 '>
          <div className='pl-4 '>
            <picture>
              <img src={ Firends } alt={ Firends } className='flex justify-start h-[70px] w-[70px] rounded-full  object-cover shadow-lg ' />
            </picture>
          </div>

            <div className='pr-10 flex flex-col justify-center items-center w-[60%] text-wrap'>
              <h1 className='font-Poppins text-[18px] font-semibold'>Friends Reunion</h1>
              <p className='font-Poppins text-[14px]  font-medium text-[#4D4D4D]'>Hi Guys, Wassup!</p>
            </div>

            <div className='pr-10'>
              <button className='py-1 bg-blue-600 px-5 rounded-lg font-Poppins text-[18px] font-semibold text-[#FFFF]'>Join</button>
            </div>

        </div>

      </div>

      </div>

    </div>
  )
}

export default GroupList
import React from 'react'
import { FaEllipsisVertical } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
const Serch = ({className}) => {
  return (
    <>
      <div>
      <div className={`relative ${className}`}>
      <span className=''>
      < LuSearch className='absolute left-4 top-4 text-xl placeholder:text-xl ' />
      </span>
      <input className={`${className} p-3 pl-20 rounded-2xl  shadow-lg`}
      type="text" placeholder='search' name='search' id='search'/>
      <FaEllipsisVertical className='absolute right-4 top-5 text-xl text-btn-color' />
      </div>
    </div>
    </>
  )
}

export default Serch
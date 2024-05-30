import React from 'react'
import HomeImg from "../../../homeimg/hh.png"
import home from "../../../homeimg/h.gif"
import chat from "../../../homeimg/c.gif"
import bell from "../../../homeimg/b.png"
import set from "../../../homeimg/s.gif"
import { Link  ,useLocation } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { activate } from 'firebase/remote-config'





const HomeLeft = () => {
  const location =  useLocation()

  let Active =location.pathname.split("/")[1];
  
  return (
    <div >
      <div className='bg-[#5e3ed2]  w-50% h-[96vh] p-7 rounded-lg cursor-pointer'>
      <picture>
            <img src={HomeImg} alt={HomeImg} />
         </picture>
    <div className='mt-16'>

    <ul className='gap-y-10 flex flex-col justify-center items-center'>
      <li className={
        Active === "Home" ? "bg-white w-[160%] ml-5 flex items-center justify-center py-2 rounded-l-lg relative after:absolute after:top-0 after:right-3 after:w-3 after:h-full after:bg-btn-color after:rounded-l-lg" : " cursor-pointer"}>
     <Link to={""}>
     <img src={home} alt={home} className='h-[50px] w-[50px] '/>
     </Link>
     
      </li>

      <li className={
        Active === "Message" ? "bg-white w-[160%] ml-5 flex items-center justify-center py-2 rounded-l-lg relative after:absolute after:top-0 after:right-3 after:w-3 after:h-full after:bg-btn-color after:rounded-l-lg" : " cursor-pointer"}>
      <Link to={"/message"}>
      <img src={ chat} alt={ chat} className='h-[50px] w-[50px] '/>
      </Link>
      </li>

      <li className={
        Active === "Alert" ? "bg-white w-[160%] ml-5 flex items-center justify-center py-2 rounded-l-lg relative after:absolute after:top-0 after:right-3 after:w-3 after:h-full after:bg-btn-color after:rounded-l-lg" : " cursor-pointer"}>
      <Link to={"/alert"}>
      <img src={bell } alt={bell } className='h-[50px] w-[50px] '/>
      </Link>
      </li>

      <li className={
        Active === "Set" ? "bg-red-500 w-[160%] ml-5 flex items-center justify-center py-2 rounded-l-lg relative after:absolute after:top-0 after:right-3 after:w-3 after:h-full after:bg-btn-color after:rounded-l-lg" : " cursor-pointer"}>
     <Link to={"/set"}>
     <img src={set} alt={set} className='h-[50px] w-[50px] '/>
     </Link>
      </li>

      <li className='mt-16 cursor-pointer'>
      <MdOutlineLogout className='h-[50px] w-[50px] ' />
      </li>

    </ul>


    </div>
    </div>
    </div>
  )
}

export default HomeLeft
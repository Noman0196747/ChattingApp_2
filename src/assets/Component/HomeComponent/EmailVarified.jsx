import React from 'react'
import emailImg from "../../../assets/emailimeges/email-file.gif"
import { Link } from "react-router-dom";

const EmailVarified = ({email}) => {
  return (
    <div className='bg-blue-300 justify-center items-center h-[100vh]'>
      <div className=' justify-center items-center'>
        <picture>
          <img src={emailImg} alt= {emailImg} className='m-auto py-5' />
        </picture>
        <h1 className='text-center bg-btn-color text-4xl rounded-lg text-bold font-Open Sans text-white m-5'>Please Verified Your Email!! {email ? email : "email is missing"}</h1>
        <span className='text-center bg-btn-color text-lg  rounded-lg text-bold font-Open Sans text-white m-5 block  cursor-pointer'>
          <Link to={"https://mail.google.com/mail/"} target="._blank">Go To Email</Link></span>
      </div>

    </div>
  )
}

export default EmailVarified
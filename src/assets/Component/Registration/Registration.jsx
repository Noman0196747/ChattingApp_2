import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { getAuth, sendEmailVerification, createUserWithEmailAndPassword ,updateProfile ,onAuthStateChanged} from "firebase/auth";
import { getDatabase, ref, push, set } from "firebase/database";

import { Link ,useNavigate } from "react-router-dom";



import registrationImg from "../../../assets/Component/Registration.png"

const Registration = () => {
   const auth = getAuth();
   const db = getDatabase();
   const navigate = useNavigate()
   const  [Email, setEmail] = useState("")
   const [fullName, setFullName] = useState("")
   const [Password, setPassword] = useState("")
   const [eye, setEye] = useState("false")
   const [Loading, setLoading] = useState(false)



//   error message show
const [EmailError, setEmailError] = useState("")
const [FullNameError, setFullNameError] = useState("")
const [PasswordError, setPasswordError] = useState("")

const handleSubmit = (event)=> {
   event.preventDefault()
      }



// handleEye for password
const handleEye = () => {
   setEye(!eye);
}

const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,3}$/g
const passWordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,10}$/


// handleSignUp
const handleSignUp = () => {
   if(!Email){
      setEmailError("Enter Email Address⚠")
     
   }else if(!emailPattern.test(Email)){
      setEmailError(" Email credential missing or Wrong⚠")
   }
   else if(!fullName){
      setEmailError("")
      setFullNameError("Enter Email FullName⚠")
   }else if(!Password){
      setEmailError("")
      setFullNameError("")
      setPasswordError("Enter Email Password⚠")
   }else if (!passWordPattern.test(Password)){
      setEmailError("")
      setFullNameError("")
      setPasswordError("Password credential missing or Wrong⚠")

   }
   else{
      setLoading(true)
      setEmail("")
      setFullName("")
      setPassword("")

      setEmailError("")
      setFullNameError("")
      setPasswordError("")

   //   Sign up a new user
     createUserWithEmailAndPassword(auth, Email, Password).then((userCredential)=>{
      setLoading(false)
      sendEmailVerification(auth.currentUser)
      .then(() => {

         toast.success('Please Check your Box', {
            position: "top-center",
            // autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            updateProfile(auth.currentUser, {
               displayName: fullName,
               photoURL: null,
             }).then(() => {
               onAuthStateChanged(auth, (userInfo) => {
                  let dvRef = ref(db, 'users/' )
                  set(push(dvRef), {
                     username: auth.currentUser.displayName,
                     email:auth.currentUser.email,
                    
                   })
                   console.log("Real time database update done");
               })
             });
           
            
         setTimeout(()=>{
               navigate("/Login")
            },1000)
           

      });
     

     })

     .catch((error)=>{
      if(error.message.includes("auth/email-already-in-use"))
      toast.error(`Already register this email try another email`, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
        
         })
         .finely(() => {  
            setLoading(false
         )
        })
     })
   }
}


// return
  return (
    <>
    <div className="flex justify-between">
    <ToastContainer />

    <div className='w-1/2  h-screen flex justify-center items-center '>

      <div>
      <h1 className='text-dark-blue font-bold text-[34px] mb-[10px] font-Nunito '>Get started with easily register</h1>
      <p className='text-custom-blue font-base text-xl opacity-50 font-Nunito'>Free register and you can enjoy it</p>

      <form onSubmit={handleSubmit}>
      <div className='my-10 '>
    <label htmlFor="Email" className='font-semibold text-[12px] text-[dark-blue] opacity-50 font-Nunito'>Email Address</label>
    <input type="text" placeholder='Ladushing691@gmail.com' id='Email' name='Email' value={Email} autoComplete='off' className=' w-full py-[20px] opacity-50 rounded-lg px-4 border-2 border-blue-500 font-Nunito'
    onChange={(event)=> setEmail(event.target.value)} />
    {EmailError && (<span className='text-red-500 font-Nunito '>{EmailError}</span>) }
    
    </div>
 
    <div className='my-10'>
         <label htmlFor="Ful name" className='font-semibold text-[12px] text-[dark-blue] opacity-50 font-Nunito'>Ful name</label>
         <input type="text" placeholder='Ladushing GTG' id='Ful name' value={fullName} name='Ful name' autoComplete='off' className=' w-full py-[20px] opacity-50 rounded-lg px-4 border-2 border-blue-500 font-Nunito' accordion
          onChange={(event)=>setFullName(event.target.value)} />
          {FullNameError && (<span className='text-red-500 font-Nunito '>{FullNameError}</span>) }
         </div>

         <div className='my-10  relative '>
         <label htmlFor="Password" className='font-semibold text-[12px] text-[dark-blue] opacity-50 font-Nunito'>Password</label>
         <input type={eye ? "Password" : "text"} placeholder='.....' id='EmailPassword' value={Password} name='Password' autoComplete='off' className=' w-full py-[20px]  opacity-50 rounded-lg px-4 border-2 border-blue-500' 
         onChange={(event)=> setPassword(event.target.value)} />
         {PasswordError && (<span className='text-red-500 font-Nunito '> {PasswordError} </span>) }

         <div className='absolute top-1/2 right-8 translate-x-[50%]  cursor-pointer'
          onClick = {handleEye}>
            {eye? <FaEyeSlash /> :<FaRegEye />  }
            
            
            </div>

         </div>
         

        
         <button className='relative font-Nunito w-full bg-btn-color py-5 rounded-full text-white font-semibold text-[20px]'
         onClick={handleSignUp}>
           {Loading && (<div className='absolute left-[38%] h-4 w-4 top-6 animate-spin rounded-full border-t-4 border-b-4 bg-yellow-500'></div>) }
   
            


         Sign up
         </button>


      </form>
         <div className='text-center mt-[35px]'>
            <p className='text[#03014C] text-normal font-[213px] font-Open Sans'>Already  have an account ? <span className='text-[#EA6C00] text-[13px] font-bold font-Open Sans align-middle cursor-pointer ' >
               <Link to={"/Login"}> Sign In</Link>
              </span>
              </p>
         </div>
      </div>

    </div>

    <div className='w-1/2 bg-red-400 h-52'>
      <img src={registrationImg} alt={registrationImg} className='min-w-full h-screen object-cover' />
    </div>

    </div>
    </>
  )
}

export default Registration
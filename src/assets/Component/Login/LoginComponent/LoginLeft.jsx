import React, { useState } from 'react'
import { FaRegEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { TbError404Off } from 'react-icons/tb';


const LoginLeft = () => {
  const auth = getAuth();
  

  const provider = new GoogleAuthProvider();
  const navigate  = useNavigate()
  const [eye, setEye] = useState("false")

  const [InputValue, setInputValue] = useState({
    Email:"",
    Password:"",
  })
  const [Loading, setLoading]= useState(false)

  const [Error, setError]= useState({
    EmailError:"",
    PasswordError:""
  })

  const handleSubmit = (event)=> {
    event.preventDefault()
       }

       const handleEye = () => {
        setEye(!eye);
     }

    // Regex Checking
     const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,3}$/g
     
     const passWordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,10}$/


// handleInputField
const handleInputField =(e) =>{
  setInputValue({
    ...InputValue,
    [e.target.id]: e.target.value,
  });
 
};

  // handleLoginWithGoogle

  const handleLoginWithGoogle =() =>{
    signInWithPopup(auth, provider).then((result) =>{
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
     if(user){
      navigate("/")
     }
    }).catch((err) =>{
      console.log("err");
    })
  }

// HandleLogin
const HandleLogin =()=>{
  if(!InputValue.Email){
    setError({
      ...Error,
      EmailError:"Enter your email Address"

    })
  }else if(!emailPattern.test(InputValue.Email)){
    setError({
      ...Error,
      EmailError:"Email missing or wrong "

    })
  }else if(!InputValue.Password){
    setError({
      ...Error,
      PasswordError:"password is wrong"
    })
  }else if(!passWordPattern.test(InputValue.Password)){
    setError({
      ...Error,
      PasswordError:"password is wrong or some missing"

    })
  }else{
    setInputValue({
      Email:"",
      Password:"",
    })
    setError({
      EmailError:"",
    PasswordError:"",
    },4000)
    setLoading(true)
    signInWithEmailAndPassword(auth, InputValue.Email, InputValue.Password).then((userInfo)=>{
      localStorage.getItem("UserToken", userInfo._tokenResponse.idToken)
      navigate("/home")

    })
    .catch((Err)=>{
      console.log(Err)
    })
    .finally(()=>{
      setLoading(false)
    })
  }
}


  return (
    <div className='flex justify-center items-center h-[100vh] w-[55%] bg-[#ffffff]'>
    <div className=''>
     <h1 className='text-dark-blue font-bold text-[33px] mb-[10px] font-Open Sans py-[20px] '>Login to your account!</h1>
     <div className='cursor-pointer  flex items-center border-2 border-gray-200 py-5 px-5 w-[220px] h-[62px] rounded-[5px]'
     onClick={handleLoginWithGoogle}
     >
     <FcGoogle />
      <p className='px-2'>Login with Google</p>
    </div>

    <div>
    <form onSubmit={handleSubmit}>
      <div className='my-6 '>
    <label htmlFor="Email" className='font-semibold text-[12px] text-[black] opacity-50 font-Nunito'>Email Address</label>
    <input type="text" 
    placeholder='Ladushing691@gmail.com' 
    id='Email'
    value={InputValue.Email}
    name='Email'
    autoComplete='off' 
    onChange={handleInputField}
    className=' w-full py-[10px]    border-b-2 text-[black] border-gray-200 font-Open Sans text-[20px]'/>
     {Error.EmailError && (<span className='text-red-500 font-Nunito '>{Error.EmailError}</span>) }
    </div>
 
    <div className='my-[50px]  relative '>
         <label htmlFor="Password" className='font-semibold text-[12px] text-[dark-blue] opacity-50 font-Nunito'>Password</label>
         <input type= {eye? "password" : "text"} 
         placeholder='Enter Your Password' 
         id='Password'  
         name='Password' 
         value={InputValue.Password}
         autoComplete='off'
         onChange={handleInputField} 
         className='w-full py-[10px]    border-b-2 text-[black] border-gray-200 font-Open Sans text-[20px]'/>
                  {Error.PasswordError && (<span className='text-red-500 font-Nunito '> {Error.PasswordError} </span>) }


         <div className='absolute top-1/2 right-8 translate-x-[50%]  cursor-pointer'
          onClick = {handleEye}>
            {eye? <FaEyeSlash /> :<FaRegEye />  }
            
            
            </div>


        
    </div>
         
         <button className='relative font-Open Sans w-full bg-btn-color py-5 rounded-[8px] text-white font-semibold text-[20px]'
         onClick={HandleLogin}
         >  
         {Loading && (<div className='absolute left-[20%] h-4 w-4 top-6 animate-spin rounded-full border-t-4 border-b-4 bg-yellow-500'></div>) }
            Login to Continue
         </button>
         

 </form>
 <div className='text-center mt-[35px]'>
            <p className='text[#03014C] text-[Mixed] font-[13px] font-Open Sans'>Don’t have an account ? <span className= ' text-[#EA6C00] text-[13px] font-bold font-Open Sans align-up cursor-pointer ' >
            <Link to={"/registration"}> Sign up</Link>
            </span>
            </p>
         </div>

    </div>
    </div>

  
   
    </div>
  )
}

export default LoginLeft
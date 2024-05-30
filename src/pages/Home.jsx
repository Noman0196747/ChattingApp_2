import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import EmailVarified from '../assets/Component/HomeComponent/EmailVarified';
import HomeLeft from '../assets/Component/HomeComponent/HomeLeft/HomeLeft';
import HomeRight from '../assets/Component/HomeComponent/HomeRight/HomeRight';





const Home = () => {

  const auth = getAuth();
  const [isEmailVarified, setEmailVarified] = useState("") 
  const [DisplayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")

  const [userInfo, useUserInfo] = useState({
    emailVerified:"false",
    DisplayName:"",
    email:"",

  })
useEffect (()=>{

  onAuthStateChanged(auth ,(user) => {
  useUserInfo({
    ...userInfo,
    emailVerified:user.emailVerified,
    DisplayName:user.displayName,
    email:user.email
  })
  

  }) 
}, [userInfo.emailVerified]) 
  return (
    <div>
       
      {userInfo.emailVerified ? (
       <div  className=' flex m-5' >
         <HomeLeft />
         <HomeRight />
       </div>
      ):(
        <h1>
          <EmailVarified email={userInfo.email}/>
        </h1>
      )
      }
    </div>
  )
}

export default Home
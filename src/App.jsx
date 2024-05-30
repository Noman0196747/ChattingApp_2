
import LoginPage from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"
import EmailVarified from "./assets/Component/HomeComponent/EmailVarified";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import MessagePage from "./pages/MessagePage";
import AlertPage from "./pages/AlertPage";
import SetPage from "./pages/SetPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";




const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/registration" element={<RegistrationPage />}/>
      <Route path="/Login" element={<LoginPage />}/>
     
      <Route path="/" element={<Home />}>
      <Route index path="" element={<HomePage />}></Route>
      <Route path="/message" element={<MessagePage />}></Route>
      <Route path="/alert" element={<AlertPage />}></Route>
      <Route path="/set" element={<SetPage />}></Route>
      </Route>

      <Route path="/EmailVarified" element={<EmailVarified />}/>
     
    </Route>
     
  )
);


function App() {
 

  return (
   
      <RouterProvider router={router}></RouterProvider>
     
    
  )
  
}

export default App

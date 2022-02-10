
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import "./Pages.css"


const Login = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [alertClass,setAlertClass]=useState("alert alert-danger d-none")


    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);

        if(email&&password){
            navigate("/")
        }else{
            setAlertClass("alert alert-danger ml-5 mt-3 w-75")
        }
       
    }


 return(
    <div className="login" >
        <div className="w-50 img">
             <img className='img-fluid h-100' src="https://picsum.photos/800/800" alt="photo" />
        </div>
        <div className="login-form">
            <div className="container mx-auto">
           <h1 className="form-title display-3 mt-5">Login</h1>
           <form id="login" onSubmit={handleSubmit}>
               <div className="mb-4">
                   <label htmlFor="email" className="form-label h1  ml-5">Email</label>
                   <input type="email"
                          className="form-control ml-5  w-75"
                          id="email"
                          placeholder="Enter your email adress..."
                          onChange={(e)=>setEmail(e.target.value)}
                          value={email}
                         // required  // doldur zorunlulugu veriyor
                    />
               </div>
               <div className="mt-3">
               <label htmlFor="password" className="form-label h1  ml-5" >Password</label>
                   <input type="password"
                          className="form-control ml-5 w-75"
                          id="password"
                          placeholder="Enter your password..."
                          onChange={(e)=>setPassword(e.target.value)}
                          value={password}
                          //required
                    />
               </div>
               <div className={alertClass} role="alert">
            Fill in the blanks
               </div>
               <input type="submit" 
                      value="Login"
                      className="btn btn-primary ml-5 w-75 mt-3" />

           </form>
        </div>
        </div>
    
       
 </div>
 )

}
export default Login

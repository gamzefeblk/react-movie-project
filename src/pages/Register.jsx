import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Pages.css"

const RegisterForm=React.createContext();

const RegisterProvider = (props) => {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/login")
    }

 return(
    <RegisterForm.Provider value={{
        firstName,
        lastName,
        email,
        password
     }}>{props.children}
     <div className="register ">
         
         <div className="reg-img">
             <img className='img-fluid h-100' src="https://picsum.photos/800/800" alt="photo" />
         </div>
  
         <div className="login-form">
             <h1 className="form-title display-4 mt-5">Register</h1>
             <form id="register" onSubmit={handleSubmit}>
                 {/* First Name enter */}
                 <label htmlFor="firstName" className="form-label h1 ml-5">First Name</label>
                 <input type="text"
                        className="form-control ml-5 w-75"
                        id="firstName"
                        placeholder="Enter your first name..."
                        onChange={(e)=>setFirstName(e.target.value)}
                        value={firstName}
                        required />
                {/* Last Name enter */}
                 <label htmlFor="lastName" className="form-label h1 ml-5">Last Name</label>
                 <input type="text"
                        className="form-control ml-5 w-75"
                        id="lastName"
                        placeholder="Enter your last name..."
                        onChange={(e)=>setLastName(e.target.value)}
                        value={lastName}
                        required />
                {/* Email Enter */}
                <label htmlFor="email" className="form-label h1  ml-5">Email</label>
                 <input type="email"
                          className="form-control ml-5  w-75"
                          id="email"
                          placeholder="Enter your email adress..."
                          onChange={(e)=>setEmail(e.target.value)}
                          value={email}
                         // required  // doldur zorunlulugu veriyor
                    />
                    {/* Password Enter */}
                    <label htmlFor="password" className="form-label h1  ml-5" >Password</label>
                   <input type="password"
                          className="form-control ml-5 w-75"
                          id="password"
                          placeholder="Enter your password..."
                          onChange={(e)=>setPassword(e.target.value)}
                          value={password}
                          //required
                    />
                     <input type="submit" 
                      value="Register"
                      className="btn btn-primary ml-5 w-75 mt-3 mb-5" />
                    
             </form>
         </div>
 
     </div>
      
     </RegisterForm.Provider>
 )

}

export default RegisterProvider
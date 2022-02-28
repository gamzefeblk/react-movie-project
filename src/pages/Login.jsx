
import React, { useState, useContext } from "react";
import Loading from "./Loading";
import "./Pages.css"
import AuthContex from "../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase-config";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin, loginError} = useContext(AuthContex)
    let alertShow = loginError ? "show" : ""
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (email && password) {
        //     handleLogin(email, password)
        // }  firebaseden önce
        try {
            let user =await signInWithEmailAndPassword(auth,email,password) 
            navigate("/react-movie-project")
            
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="login" >
            <div className="w-50 img">
                <img className='img-fluid h-100' src="https://picsum.photos/800/800" alt="photo" />
            </div>
            <div className="login-form">
                <div className="container mx-auto">
                    <h1 className="form-title display-3 mt-5">Login</h1>
                    <form id="login" onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label h1  ml-5">Email</label>
                            <input type="email"
                                className="form-control ml-5  w-75"
                                id="email"
                                placeholder="Enter your email adress..."
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required  // doldur zorunlulugu veriyor
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="password" className="form-label h1  ml-5" >Password</label>
                            <input type="password"
                                className="form-control ml-5 w-75"
                                id="password"
                                placeholder="Enter your password..."
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                        </div>
                        <div className={`alert alert-warning alert-dismissible fade ${alertShow}`} role="alert">
                            <strong>Ups! </strong> You should check in on some of those fields.
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <input type="submit"
                            value="Login"
                            className="btn btn-primary ml-5 w-75 mb-5 " />

                    </form>
                </div>
            </div>


        </div>
    )

}
export default Login

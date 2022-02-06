import React from 'react';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
export default function Navbar() {

    // const navigate =useNavigate("");

    // const handleClick {
    //     navigate("/login")
    // }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">React Movie App</a>
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div className='buttons'>
                <button 
                type='button'
                className='btn btn-outline-light mx-2'
                // onClick={handleClick}
                >
                    Login
                </button>
                <button 
                type='button'
                className='btn btn-outline-light mx-2'
                // onClick={()=>navigate("/register")}
                >
                    Register
                </button>
                </div>
            </nav>
        </div>
    );
}
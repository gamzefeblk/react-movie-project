import React,{useContext} from 'react';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
import AuthContex from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../auth/firebase-config';
export default function Navbar() {

    // const {credentials,login,handleLogout} = useContext(AuthContex)
    const {currentUser} = useContext(AuthContex)
    const navigate =useNavigate("");

    const handleClick = () => {
        navigate("/login")
    }
    const handleLogOut = () => {
        signOut(auth)
    }

    return (
        <div>
            <nav className="navbar  navbar-light ">
                <a className="navbar-brand" href="/react-movie-project">React Movie App</a>
                <div className='buttons'>
                    {
                        currentUser ? 
                        <div>
                        <button type='button' disabled
                        className='btn btn-outline-light mx-2 text-capitalize'>{currentUser.displayName} </button>
                        <button type='button'
                        className='btn btn-outline-light mx-2'
                        onClick={handleLogOut}
                        >
                          Logout
                        </button>
                        </div> :
                        <>
                        <button 
                    type='button'
                    className='btn btn-outline-light mx-2'
                    onClick={(e) => handleClick(e) }>
                        Login
                    </button>
                    <button 
                    type='button'
                    className='btn btn-outline-light mx-2'
                    onClick={()=>navigate("/register")}>
                        Register
                    </button>
                        </>
                    }
                </div>
            </nav>
        </div>
    );
}
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase-config";

const AuthContex = React.createContext()

export const AuthContexProvider = (props) => {
    const [currentUser,setCurrentUser] = useState()
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{  //burdaki user kullanici giris yapmis ise dolu gelir
            setCurrentUser(user)
        })
    },[])

    return (
        <AuthContex.Provider value={{
           currentUser
        }}>
            {props.children}  {/*Bu componentla sarmallanmis bütün componentlara propslar ulasilabilsin */}
        </AuthContex.Provider>
    )
}

export default AuthContex

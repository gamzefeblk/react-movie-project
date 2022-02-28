import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContex = React.createContext()

export const AuthContexProvider = (props) => {

    const [credentials, setCredentials] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const [loginError,setLoginError]=useState(false)
    const [login,setLogin] = useState(false)

    const handleCredentials = (firstName1, lastName1, email1, password1) => {
        setCredentials({
            firstName: firstName1,
            lastName: lastName1,
            email: email1,
            password: password1
        })
    }
    const navigate = useNavigate();
    const handleLogin = (email, password) => {

        if (credentials.email == email && credentials.password==password) {
            setLogin(true)
            setLoginError(false)
            navigate('/react-movie-project')
        } else {
            setLoginError(true)
        }
    }

    const handleLogout = () => {
        setCredentials({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        })
        setLogin(false)
    }

    return (
        <AuthContex.Provider value={{
            credentials :credentials,
            handleCredentials :handleCredentials,
            handleLogin: handleLogin,
            loginError:loginError,
            login,
            handleLogout
        }}>
            {props.children}  {/*Bu componentla sarmallanmis bütün componentlara propslar ulasilabilsin */}
        </AuthContex.Provider>
    )
}

export default AuthContex

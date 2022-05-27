import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { users } from "../backend/db/users";

const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const localStorageToken = JSON.parse(localStorage.getItem('token'))
    const [token, setToken] = useState(localStorageToken && localStorageToken?.token)
    const [loginValue, setLoginValue] = useState({
        email: 'koibalika@gmail.com',
        password: 'koibalika123'
    })
    const [eye, setEye] = useState(true)
    const [password, setPassword] = useState('password')

    const ToogleEye = () => {
        setEye(eye => !eye)
        if (eye) {
            setPassword('text')
        } else {
            setPassword('password')
        }
    }


    const LoginFunc = async () => {
        try {
            const { data } = await axios.post(`/api/auth/login`, loginValue)
            localStorage.setItem("token", JSON.stringify({
                token: data.encodedToken
            }))
            setToken(data.encodedToken)
            location?.state?.from?.pathname ? navigate(location?.state?.from?.pathname, { replace: true }) : navigate('/Video')
        } catch (error) {
            console.log(error);
        }
    }



    const LogoutFunc = () => {
        setTimeout(() => {
            localStorage.removeItem("token")
            setToken("")
            navigate("/")

        }, 2000);
    }

    return <AuthContext.Provider value={{
        loginValue, setLoginValue, LoginFunc, token, ToogleEye, LogoutFunc, password, setPassword, users, eye, setEye,
    }}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }
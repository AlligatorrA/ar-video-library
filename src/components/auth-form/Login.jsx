import React from 'react'
import { useAuth } from '../../contexts/auth-context'
import './login.css'

const Login = () => {
    const { loginValue, setLoginValue, LoginFunc, ToogleEye, password, eye, error } = useAuth()


    return (
        <div className='asideAnd_main just_flex align_flex ' >
            <div className="mappedProduct bdr">
                <div className="card_box  coln_flex">
                    <div className="spacerhalf"></div>
                    <form onSubmit={(e) => e.preventDefault()} className='align_flex coln_flex margin10px'>
                        <h2>Login Form</h2>
                        <div className="spacerhalf"></div>
                        <label htmlFor="email" className='input_label'>
                            <input type="email" name='email'
                                value={loginValue.email}
                                onChange={(e) => setLoginValue(e.target.value)}
                                className='input_tag' placeholder='Enter your email' />
                            <span className=" pTectColor">
                                <i className="fa-solid fa-at"></i>
                            </span>
                        </label>
                        <label htmlFor="password" className='input_label'>
                            <input type={password} name='password'
                                value={loginValue.password}
                                onChange={(e) => setLoginValue(e.target.value)}
                                className='input_tag' placeholder='Enter your password' />
                            <span className=" pTectColor cur" onClick={ToogleEye}>
                                {
                                    eye ?
                                        <i className="fa-solid fa-eye"></i> :

                                        <i className="fa-solid fa-eye-slash"></i>
                                }
                            </span>
                        </label>

                        <div className="dis_flex align_flex just_btw_flex margin20pxhzt margin10px ">
                            <h4>forgot</h4>

                            <p className=' margin10px '><span>Sign up</span> </p>
                        </div>
                        <p>    {
                            error && <span>Please enter the correct passcode</span>
                        }
                        </p>
                        <button className="btn font1en margin20pxhzt asideAlink pTectColor" onClick={LoginFunc}>

                            <span >
                                Login as Guest
                            </span>
                        </button>
                        <button className="btn font1en margin20pxhzt asideAlink pTectColor" onClick={LoginFunc}>

                            <span >
                                Login
                            </span>
                        </button>
                    </form>
                </div>

                <div className="spacerhalf"></div>
            </div>
        </div>

    )
}

export default Login
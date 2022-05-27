import React from 'react'
import { useAuth } from '../../contexts/auth-context'

const SignUp = () => {

    const { signUpVal, SignUpFunc, setSignUpVal, ToogleEye, password, eye } = useAuth()
    return (
        <div className='asideAnd_main just_flex align_flex ' >
            <div className="mappedProduct bdr   ">
                <div className="card_box  coln_flex">
                    <div className="spacerhalf"></div>
                    <form onSubmit={(e) => e.preventDefault()} className='align_flex coln_flex margin10px'>
                        <h2>Sign-Up Form</h2>
                        <div className="spacerhalf"></div>
                        <label htmlFor="firstName" className='input_label'>
                            <input type="text" name='firstName'
                                value={signUpVal.firstName}
                                onChange={(e) => setSignUpVal(e.target.value)}
                                className='input_tag' placeholder='Enter your First name' />

                        </label>
                        <label htmlFor="lastName" className='input_label'>
                            <input type="text" name='lastName'
                                value={signUpVal.lastName}
                                onChange={(e) => setSignUpVal(e.target.value)}
                                className='input_tag' placeholder='Enter your Last name' />

                        </label>
                        <label htmlFor="email" className='input_label'>
                            <input type="email" name='email'
                                value={signUpVal.email}
                                onChange={(e) => setSignUpVal(e.target.value)}
                                className='input_tag' placeholder='Enter your email' />
                            <span className=" pTectColor">
                                <i className="fa-solid fa-at"></i>
                            </span>
                        </label>
                        <label htmlFor="password" className='input_label'>
                            <input type={password} name='password'
                                value={signUpVal.password}
                                onChange={(e) => setSignUpVal(e.target.value)}
                                className='input_tag' placeholder='Enter your password' />
                            <span className=" pTectColor cur" onClick={ToogleEye}>
                                {
                                    eye ?
                                        <i className="fa-solid fa-eye"></i> :

                                        <i className="fa-solid fa-eye-slash"></i>
                                }
                            </span>
                        </label>
                        <button className="btn font1en margin20pxhzt asideAlink pTectColor" onClick={SignUpFunc}>

                            <span >
                                Sign-Up
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
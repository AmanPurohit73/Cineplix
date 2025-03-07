import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import checkValidData from "../utils/validate";

const Login = () => {

    const [isSignInForm ,setIsSignInForm] = useState(true)

    const [errorMessage, setErrorMessage] = useState(null)

    const email = useRef(null)
    const password = useRef(null)

    const toggleSignUpForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick =() => {
        
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
        
    }


  return (
    <div>
      <Header></Header>

      <div className="absolute">
        <img
          className="brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
          alt=""
        />
      </div>
      <form onSubmit={(e) => {e.preventDefault}} className="absolute p-10 w-3/12 bg-black/80 my-50 mx-auto right-0 left-0 text-white rounded-3xl">
        <h1 className="font-extrabold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm &&<input
          type="text"
          placeholder="Name"
          className="p-4 my-2 w-full bg-gray-800 rounded-md "
        />}
        <input
        ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-2 w-full bg-gray-800 rounded-md "
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-md "
        />

            <p className='text-red-500 font-bold text-lg p-2 text-center' >{errorMessage}</p>


        <button className="p-4 my-2 bg-red-600 w-full rounded-lg cursor-pointer font-bold text-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 text-center cursor-pointer"
          onClick={toggleSignUpForm}
        >
          {isSignInForm
            ? "New to Netflix ? Sign-Up Now"
            : "Already a User ? Sign-In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login

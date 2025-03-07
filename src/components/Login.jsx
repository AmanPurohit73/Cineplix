import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {

    const [isSignInForm ,setIsSignInForm] = useState(true)

    const toggleSignUpForm = () => {
        setIsSignInForm(!isSignInForm)
    }



  return (
    <div>
      <Header></Header>

      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
          alt=""
        />
      </div>
      <form className="absolute p-10 w-3/12 bg-black/80  my-50 mx-auto right-0 left-0 text-white rounded-3xl">
        <h1 className="font-extrabold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm &&<input
          type="text"
          placeholder="Name"
          className="p-4 my-2 w-full bg-gray-800 rounded-md "
        />}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-2 w-full bg-gray-800 rounded-md "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-md "
        />
        <button className="p-4 my-2 bg-red-600 w-full rounded-lg cursor-pointer font-bold text-lg">
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

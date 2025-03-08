import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import checkValidData from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, } from "firebase/auth";
import auth from "../utils/firebase";
import { BG } from "../utils/constants";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //Sign UP
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "/" + errorMessage);
        });
        
    } else {
      //Sign IN
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "/" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header></Header>

      <div className="absolute">
        <img
          className="brightness-50"
          src={BG}
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-10 w-3/12 bg-black/80 my-50 mx-auto right-0 left-0 text-white rounded-3xl"
      >
        <h1 className="font-extrabold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-2 w-full bg-gray-800 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-2 w-full bg-gray-800 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-md"
        />

        <p className="text-red-500 font-bold text-lg p-2 text-center">
          {errorMessage}
        </p>

        <button
          className="p-4 my-2 bg-red-600 w-full rounded-lg cursor-pointer font-bold text-lg"
          onClick={handleButtonClick}
        >
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
};

export default Login;

import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_SRCSET, BG_URL } from "../constants";
import { validateName, validationCheck } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignInForm = () => {
    setError(null);
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    let message = validationCheck({ email: email.current.value, password: password.current.value });
    if (message === null && !isSignInForm) {
      message = validateName(fullName.current.value);
    }
    setError(message);
    if (message !== null) return
    //Sign Up or Sign In
    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log('User created : ',user);
          
          updateProfile(auth.currentUser, { displayName: fullName.current.value })
            .then(() => {
              console.log("Profile Updated");
            })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(`ErrorCode: ${errorCode} ErrorMessage: ${errorMessage}`)
        });
    } else {
      //sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(`ErrorCode: ${errorCode} ErrorMessage: ${errorMessage}`)

        });
    }
  }

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute w-full h-full">
        <img
          src={BG_URL}
          srcSet={BG_SRCSET}
          alt="Bg"
          className="w-full h-full object-cover"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-450 h-717 flex flex-col p-12 bg-black bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 className="text-3xl relative font-bold p-2 m-2 w-full">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-black bg-opacity-80 border-2 border-gray-500 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-2 m-2 w-full bg-black bg-opacity-80 border-2 border-gray-500 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full rounded bg-black bg-opacity-80 border-2 border-gray-500"
        />
        {error !== null && <p className="text-red-500 px-2 w-full text-bold">{error}</p>}
        <button className="p-2 m-2 w-full bg-red-700 rounded"
          onClick={handleButtonClick}
        >{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <span className="text-center p-2 m-2 w-full text-gray-500"> OR </span>
        <p className="p-2 m-2 w-full hover:cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? 'New to NetflixGPT? Sign Up Now' : 'Already have an account? Sign In'}</p>
      </form>
    </div>
  );
};

export default Login;

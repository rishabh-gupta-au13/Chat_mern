import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,

} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";



const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessages, setErrorMessages] = useState(null);
  const dispatch=useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current?.value
    );

    setErrorMessages(message);
    if (message) return;
    if (!isSignInForm) {
      // signUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user,{
            displayName:name.current.value
          }).then(()=>{
            const {uid,email,displayName }= auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          }).catch((error)=>{
            setErrorMessages("Issue In logging");



          })

         
          // ...
        })
        .catch((error) => {
          
          const errorMessage1 = error.message;
          if (errorMessage1) {
            setErrorMessages("Invalid Credentials");
          }
        });
      // PASSWORD 123456@1Aa
      // EMAIL rishabh@gmail.com
    } else {
      // sigInLogic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
        //  userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorMessage1 = error.message;
          if (errorMessage1) {
            setErrorMessages("Invalid Credentials");
          }
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt=""
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold test-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
          ref={email}
        />
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
            ref={name}
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="password"
          placeholder="Password"
          ref={password}
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessages}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New To Netflix ? Sign Up Now"
            : "Already registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

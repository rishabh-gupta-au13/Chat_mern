import React,{useState} from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)

    }
  return (
    <div>
      <Header />
      <div className="absolute">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
        alt=""
      ></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
      <h1 className="font-bold test-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
        <input className="p-4 my-4 w-full bg-gray-700" type="text" placeholder="Email Address"/>
      { !isSignInForm && <input className="p-4 my-4 w-full bg-gray-700" type="password" placeholder="Full Name"/>}
        <input className="p-4 my-4 w-full bg-gray-700" type="text" placeholder="Password"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"}</button>
    <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New To Netflix ? Sign Up Now":"Already registered ? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;

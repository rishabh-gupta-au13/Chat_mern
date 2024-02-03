import React,{useState} from "react";
import { signOut } from "firebase/auth";
import {auth} from  "../utils/firebase";
import { useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const isUser = useSelector((state) => state.user);
  console.log(isUser,"this is bokakak")
 
  const navigate=useNavigate()

  const handleSignOut=()=>{
    signOut(auth).then(() => {
     
      navigate("/")
      

      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    

    

  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      ></img>
    { isUser && <div className="flex">
        <img
          alt="usericon" className="icon w-8 h-8 mt-5"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        ></img>
           <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
      </div>
    }
   
    </div>
  );
};

export default Header;

import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { useNavigate } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const LogoutBtnHandler = () => {
    setLoader(true);
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/login");
      setLoader(false);
    });
  };
  return (
    <button
      onClick={LogoutBtnHandler}
      className=" hover:text-black hover:font-bold px-3 py-2 rounded-md"
    >
      {loader ? (
        <div className="flex items-center justify-center gap-3">
          <h1>Logout</h1>
          <ImSpinner2 className="animate-spin mx-auto" />
        </div>
      ) : (
        "Logout"
      )}
    </button>
  );
}

export default LogoutBtn

//I had used const LogoutBtn instead of function LogOutBtn.

// In JavaScript, "hoisting" is a behavior where variables and function declarations are moved, 
// or "hoisted," to the top of their containing scope before the code is executed. 
// This means that you can use functions and variables before you actually declare them in your code.



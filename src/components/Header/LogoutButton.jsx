import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const logouthandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div>
      <button
        className="className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
        onClick={logouthandler}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;

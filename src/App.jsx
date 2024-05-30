import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import "../src/index.css";
import { Footer, Header } from "./components/index";
import { Outlet } from "react-router-dom";

const App = () => {
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>{<Outlet />}</main>
        <Footer />
      </div>
    </div>
  ) : (
    <span class="loader"></span>
  );
};

export default App;

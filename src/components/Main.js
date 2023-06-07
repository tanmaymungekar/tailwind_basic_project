import React, { useState, useEffect } from "react";
import "../App.js";
import logo from "../assests/logoflight.png";
import Booking from "./Booking.js";
import Navbar from "../components/Navbar.js";
import { Navigate, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  // const [authenticated, setauthenticated] = useState(false);
  // const loggedInUser = localStorage.getItem("authenticated");
  // useEffect(() => {
  //   console.log("loggedInUser", loggedInUser);
  //   if (loggedInUser) {
  //     setauthenticated(loggedInUser);
  //   } else {
  //     setauthenticated(loggedInUser);
  //   }
  // }, [loggedInUser]);

  // console.log("authenticated", authenticated);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("authenticated"));

    if (!data) {
      console.log("sdjfsdjh");
      // return <Navigate replace to="/" />;
      navigate("/");
    }
  }, []);

  // if (!localStorage.getItem("authenticated", true)) {
  //   // return navigate("/");

  //   return <Navigate replace to="/" />;
  // } else{

  // }

  return (
    <>
      <div className="background-image relative top-0 left-0 ">
        <img
          src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg"
          alt="top"
          className="w-full max-h-[300px] object-cover"
        />
        {/* <div className="absolute top-[225px]  "> */}
        <span className="absolute top-[225px]">
          <img src={logo} alt="Logo" className=" max-h-36 object-cover" />
        </span>
        <Navbar />
        <Booking />

        {/* </div> */}
      </div>
    </>
  );
};

export default Main;

import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const returnToOrigin = () => {
    localStorage.setItem("authenticated", false);
    navigate("/");
  };
  return (
    <>
      <div>
        <div className=" ml-36 mt-4  bg-transparent">
          <ul className="flex justify-evenly gap-4 text-2xl font-bold text-black ">
            <li className="cursor-pointer" onClick={navigate("/Main")}>
              Home
            </li>
            <li className="cursor-pointer" onClick={navigate("/Main")}>
              Company
            </li>
            <li className="cursor-pointer" onClick={navigate("/Main")}>
              Resources
            </li>
            <li className="cursor-pointer" onClick={navigate("/Main")}>
              About Us
            </li>
            <li className="cursor-pointer" onClick={returnToOrigin}>
              Log Out
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "./SigninSlice";
import { useNavigate } from "react-router-dom";
import { setToken } from "./flightSlice";
// import Main from "./Main";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const token = useSelector((state) => state.counter.payload);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const payload = {
  //   email: email.email,
  //   password: password.password,
  // };

  const users = { email: "jona1@gmail.com", password: "12345678" };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === users.email && password === users.password) {
      const payload = {
        email: users.email,
        password: users.password,
      };
      // console.log("paaayyndd", payload);
      localStorage.setItem("authenticated", true);
      const response = await dispatch(userLogin(payload));
      dispatch(setToken(response.data.token));

      console.log("whether logged", response);
      navigate("/Main");
    } else {
      alert("please enter valid login details");
    }

    // const storeToken = await dispatch((userLogin(payload.data.token)))
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20 mt-20">
        <h1 className="text-5xl text-bold"> flight booking</h1>

        <h2 className="text-2xl font-bold mt-5">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label className="my-2 w-full relative rounded-2xl shadow-xl">
              Email
            </label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-[#ffffff] border border-[#edf2f7] rounded-2xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-[#ffffff] border border-[#edf2f7] rounded-2xl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button
            className="w-full my-2 p-3 bg-[#81e6d9] text-[#283141] rounded-2xl shadow-xl"
            type="submit"
            value="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;

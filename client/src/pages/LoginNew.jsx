import React from "react";
import COVER from "../img/cover.jpg";
import GOOGLEICON from "../img/google-icon-2048x2048-czn3g8x8.png";

const LoginNew = () => {
  const google = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Turn your Idea inmto reality
          </h1>
          <p className="text-xl text-white font-normal" vn>
            Start for free and get attractive offers from the communication
          </p>
        </div>
        <img src={COVER} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <h1 className="text-xl text-[#060606] mr-auto font-semibold">
          Interactive Brand
        </h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-blac py-2 my-2 bg-transparent border-black border-b outline-none focus:outline-none mb-8"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-black bg-transparent border-black border-b outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex justify-between icon">
            <div className="w-full flex">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me for 30 days?</p>
            </div>
            <p className="text-sm whitespace-nowrap  font-medium cursor-pointer underline underline-offset-2">
              Forgot Password?
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center">
              Login
            </button>
            <button className="w-full my-2 font-semibold text-[#060606] bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center">
              Register
            </button>
          </div>

          <div className="w-full flex items-center justify-center relative py-2 ">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
          </div>
          <div
            onClick={google}
            className="w-full my-2 font-semibold text-[#060606] bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
          >
            <img src={GOOGLEICON} alt="" className="h-6 mr-2" />
            Sign In With Google
          </div>
        </div>

        <div className="w-full flex item-center justify-center">
          <p className="text-sm font-mornal text-[#060606]">
            <span className="font-semibold underline nderline-offset-0"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginNew;

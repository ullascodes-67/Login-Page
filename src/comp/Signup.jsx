import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const nav = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    let enterdEmail = e.target[0].value;
    let enterdPass = e.target[1].value;
    let reenterdPass = e.target[2].value;
    localStorage.setItem("Email", enterdEmail);
    localStorage.setItem("Password", enterdPass);
    nav("/");
    console.log(enterdEmail);
    console.log(enterdPass);
  };
  return (
    <div>
      <div className="min-h-screen bg-zinc-800 flex items-center justify-center p-6">
        <div className="w-full max-w-5xl  animate-[smoothEnter_0.6s_ease-out] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex">
          {/* Left Side */}
          <div className="hidden md:flex w-1/2 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 p-10 flex flex-col justify-end text-white">
              <h1 className="text-5xl font-bold mb-4">Transform Your Body</h1>

              <p className="text-zinc-300 text-lg">
                Sign Up and continue your fitness journey.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 bg-zinc-900 p-10 flex flex-col justify-center">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-white">Welcome</h1>

              <p className="text-zinc-400 mt-2">
                Sign in and Log in again to access your workouts
              </p>
            </div>

            <div className="space-y-5">
              <form
                onSubmit={(e) => {
                  if (e.target[1].value == e.target[2].value) {
                    submitHandler(e);
                    e.target[0].value = "";
                    e.target[1].value = "";
                    e.target[2].value = "";
                  } else {
                    e.preventDefault();
                    e.target[2].value = "";
                    e.target[2].placeholder = "Check Again";
                    setError("Check Password");
                  }
                }}
                className="space-y-5"
              >
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-zinc-800 text-white p-4 rounded-xl outline-none border border-zinc-700 focus:border-orange-500"
                />
                <input
                  required
                  type="password"
                  placeholder="Password"
                  className="w-full bg-zinc-800 text-white p-4 rounded-xl outline-none border border-zinc-700 focus:border-orange-500"
                />
                <input
                  required
                  type="password"
                  placeholder="Re-Enter Password"
                  className="w-full bg-zinc-800 text-white p-4 rounded-xl outline-none border border-zinc-700 focus:border-orange-500"
                />
                <p className="text-red-500">{error}</p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-xl font-semibold">
                  Sign In
                </button>{" "}
              </form>

              <button className="w-full border border-zinc-700 text-white py-4 rounded-xl flex justify-center items-center gap-3 hover:bg-zinc-800">
                <link className="ri-google-fill text-xl"></link>
                Continue with Google
              </button>

              <p className="text-center text-zinc-400">
                have an account?
                <span className="text-orange-500 cursor-pointer ml-2">
                  <link href="/">Log in</link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

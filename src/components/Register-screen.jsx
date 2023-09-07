import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center h-screen bg-my-blue">
      <form className="w-96 py-6 px-10 shadow-lg bg-white rounded-md">
        <h1 className="text-2xl block text-center font-semibold mb-4">
          Create Account
        </h1>

        <div className="mt-3">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border w-full text-sm px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border w-full text-sm px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border w-full text-sm px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mt-3 ">
          <div>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="mx-2">
              Remember Me
            </label>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="border-2 bg-my-blue text-white py-2 px-3 w-full rounded-md hover:bg-transparent hover:text-indigo-700 hover:border-indigo-300 font-semibold"
          >
            Sign Up
          </button>
        </div>
        <div className="mt-5">
          <p className="text-center">
            Already have an account?
            <Link to="login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterScreen;

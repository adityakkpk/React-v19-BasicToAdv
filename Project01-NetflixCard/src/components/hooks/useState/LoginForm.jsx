import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      username,
      password,
    }
    console.log(loginData);
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="border shadow-lg rounded p-5 w-96 bg-white ">
        <h1 className="text-3xl mb-10">Login Form</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            className="border rounded focus:outline-none px-2 mb-8 bg-gray-200"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password :</label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            className="border rounded focus:outline-none px-2 mb-8 bg-gray-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="py-1 px-2 bg-blue-600 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

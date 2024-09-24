import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const[error,setError]=useState("");
  const navigate = useNavigate();

const handleLogin =  (e) => {
  e.preventDefault();

  if (userName ==="kshitij" && password === "kshitij"){
    setError("")
    Cookies.set("userName",  userName,{expires: 1})
    Cookies.set("password", password,{ expires: 1})
    navigate("/")
  }else{
    setError("Invalid credentials")
  }
};


  return (
    <div className="container px-4 mx-auto">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Sign in</h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="email">
              Email
            </label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
              type="text"
              id="text"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="password">
              Password
            </label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
              type="password"
              id="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
            type="submit"
          >
            Sign in
          </button>
        {error && <div className='text-red-600'>
          {error}
          </div>}
        </form>
      </div>
    </div>
  );
};

export default Login;

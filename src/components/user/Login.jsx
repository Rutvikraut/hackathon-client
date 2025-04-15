import React, { useContext, useEffect, useState } from "react";
import { loginUser } from "../../api/user.js";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App.jsx";
import { toast } from "react-toastify";

const login = () => {
  const { setUser } = useContext(AuthContext)
    const [userDetails,setUserDetails] = useState({
        email:'',
        password:''
    })

    const [error,setError] = useState({
        email:false,
        password:false
    })

    const navigate = useNavigate()

    const handleLogin = async ()=>{
      const email = userDetails.email
      const password = userDetails.password
      const response  = await loginUser({email,password})
      console.log(response)
      if(response.status == 'success'){
        toast.success('Login Successful')
        const { token, name } = response.data
        console.log(response.data)
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('name', name)
        setUser({name})
        navigate('/')
      }
    }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 max-w-md mx-auto shadow-xl rounded p-8">
        <h2 className="text-3xl font-medium text-center mb-5">Login</h2>
        
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e)=>{
                setUserDetails({...userDetails,email:e.target.value})
            }}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e)=>{
                setUserDetails({...userDetails,password:e.target.value})
            }}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
        </div>

        <div className="w-full flex justify-center">
        <button
          type="submit"
          onClick={handleLogin}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer disabled:bg-blue-300"
        >
          Login
        </button>
        </div>
        <div className="w-full flex justify-center mt-1">
        Not Registered ? 
        <Link to={'/register'} className="text-blue-800">
           Register Now
        </Link>
        </div>
      </div>
    </div>
  );
};

export default login;

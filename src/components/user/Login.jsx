import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";

const login = () => {
    const [userDetails,setUserDetails] = useState({
        email:'',
        password:''

    })

    const [error,setError] = useState({
        email:false,
        password:false
    })

    const [invalidEmail,setInvalidEmail] = useState(false)

    const [isRegisterDisabled,setIsRegisterDisabled] = useState(true)

    const handleEmailInput=(e)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const inputEmail = e.target.value
        if(inputEmail.length!=0){
            if(emailRegex.test(inputEmail)){
                setUserDetails({...userDetails,email:inputEmail});
                setInvalidEmail(false)
            }else{
                setInvalidEmail(true)
            }
        }else{
            setError({...error,email:true})
        }
    }


    const handlePassword = ()=>{
        const passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        const inputPassword = e.target.value
        if(inputPassword.length!=0){
            if(passwordRegex.test(inputPassword)){
                setUserDetails({...userDetails,password:inputPassword})
            }
        }
    }

    useEffect(()=>{
        if(userDetails.fullName && userDetails.email && userDetails.phone && userDetails.password && userDetails.confirmPassword){
            setIsRegisterDisabled(false)
        }else{
            setIsRegisterDisabled(true)
        }
    })
  return (
    <div className="w-full">
      <div class="w-1/2 max-w-md mx-auto shadow-xl rounded p-8">
        <h2 className="text-3xl font-medium text-center mb-5">Login</h2>
        
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={handleEmailInput}
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
          {error.email && <p class="mt-2 text-sm text-red-600 dark:text-red-500">Please enter email</p>}
          {invalidEmail && <p class="mt-2 text-sm text-red-600 dark:text-red-500">Invalid Email</p>}
        </div>

        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={handlePassword}
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
        </div>

        <div className="w-full flex justify-center">
        <button
          type="submit"
          disabled={isRegisterDisabled}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer disabled:bg-blue-300"
        >
          login
        </button>
        </div>
      </div>
    </div>
  );
};

export default login;

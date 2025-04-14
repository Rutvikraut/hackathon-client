import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";

const Register = () => {
    const [userDetails,setUserDetails] = useState({
        fullName:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:''
    })

    const [error,setError] = useState({
        fullName:false,
        email:false,
        phone:false,
        password:false,
        confirmPassword:false
    })

    const [invalidEmail,setInvalidEmail] = useState(false)
    const [invalidPhone,setInvalidPhone] = useState(false)

    const [isRegisterDisabled,setIsRegisterDisabled] = useState(true)

    const handleNameInput=(e)=>{
        const inputName = e.target.value
        if(inputName.length!=0){
            setUserDetails({...userDetails,fullName:inputName});
            setError({...error,fullName:false})
        }else{
            setError({...error,fullName:true})
        }
    }

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

    const handlePhoneNumber = ()=>{
        const phoneRegex = /^[0-9]{10}$/
        const inputPhone = e.target.value
        if(inputPhone.length!=0){
            if(phoneRegex.test(inputPhone)){
                setUserDetails({...userDetails,phone:inputPhone})
                setInvalidPhone(false)
            }else{
                setInvalidPhone(true)
            }
        }else{
            setError({...error,phone:true})
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

    const handleConfirmPassword = ()=>{
        const inputConfirmPassword = e.target.value
        if(inputPassword.length!=0){
            if(inputConfirmPassword === userDetails.password){
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
        <h2 className="text-3xl font-medium text-center mb-5">Register</h2>
        <div class="mb-5">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            onChange={handleNameInput}
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
          {error.fullName && <p class="mt-2 text-sm text-red-600 dark:text-red-500">Please enter full name</p>}
        </div>
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
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            onChange={handlePhoneNumber}
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
          {error.phone && <p class="mt-2 text-sm text-red-600 dark:text-red-500">Please enter phone</p>}
          {invalidPhone && <p class="mt-2 text-sm text-red-600 dark:text-red-500">Invalid phone number</p>}
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
        <div class="mb-5">
          <label
            for="repeat-password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="repeat-password"
            onChange={handleConfirmPassword}
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="terms"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <div className="w-full flex justify-center">
        <button
          type="submit"
          disabled={isRegisterDisabled}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer disabled:bg-blue-300"
        >
          Register Me
        </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

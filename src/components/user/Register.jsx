import { register } from "../../api/user.js";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

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
    const [invalidPassword,setInvalidPassword] = useState(false)

    const [isRegisterDisabled,setIsRegisterDisabled] = useState(true)

    const navigate = useNavigate()
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

    const handlePhoneNumber = (e)=>{
        const phoneRegex = /^[0-9]{10}$/
        const inputPhone = e.target.value
        if(inputPhone.length!=0){
            if(phoneRegex.test(inputPhone)){
                setUserDetails({...userDetails,phone:inputPhone})
                setInvalidPhone(false)
                setError({...error,phone:false})

            }else{
                setInvalidPhone(true)
            }
        }else{
            setError({...error,phone:true})
        }
    }

    const handlePassword = (e)=>{
        const inputPassword = e.target.value
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if(inputPassword.length!=0){
            if(passwordRegex.test(inputPassword)){
                console.log("calling")
                setUserDetails({...userDetails,password:inputPassword})
                setInvalidPassword(false)
            }else{
                setInvalidPassword(true)
            }
        }
    }

    const handleConfirmPassword = (e)=>{
        const inputConfirmPassword = e.target.value
        if(inputConfirmPassword.length!=0){
            if(inputConfirmPassword === userDetails.password){
                setUserDetails({...userDetails,password:inputConfirmPassword})
                setError({...error,confirmPassword:false})
            }else{
                setError({...error,confirmPassword:true})
            }
        }else{
            setError({...error,confirmPassword:true})
        }
    }

    // useEffect(()=>{
    //     if(userDetails.fullName.length!=0 && userDetails.email.length!=0 && userDetails.password.length!=0 && userDetails.confirmPassword.length!=0 && userDetails.phone.length!=0){
    //         setIsRegisterDisabled(false)
    //     }else{
    //         setIsRegisterDisabled(true)
    //     }
    // },[userDetails.fullName,userDetails.email,userDetails.password,userDetails.phone,userDetails.confirmPassword])

    const handleRegister = async()=>{
        const fullName = userDetails.fullName
        const email = userDetails.email
        const phone = userDetails.phone
        const password = userDetails.password

        const response = await register({fullName,email,phone,password})
        if(response.status == 'success'){
          navigate('/login')
        }
        
    }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 max-w-md mx-auto shadow-xl rounded p-8">
        <h2 className="text-3xl font-medium text-center mb-5">Register</h2>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            onChange={handleNameInput}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
          {error.fullName && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Please enter full name</p>}
        </div>
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
            onChange={handleEmailInput}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
          {error.email && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Please enter email</p>}
          {invalidEmail && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Invalid Email</p>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            onChange={handlePhoneNumber}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
          {error.phone && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Please enter phone</p>}
          {invalidPhone && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Invalid phone number</p>}
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
            onChange={handlePassword}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
          {error.password && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Please enter password</p>}
          {invalidPassword && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Password length should be minimum 8 characters with at least one uppercase letter, one lowercase letter, one number and one special character</p>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="repeat-password"
            onChange={handleConfirmPassword}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
          {error.confirmPassword && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Password doesn't match</p>}
        </div>
        <div className="w-full flex justify-center">
        <button
          type="submit"
        //   disabled={isRegisterDisabled}
            onClick={handleRegister}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer disabled:bg-blue-300"
        >
          Register Me
        </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

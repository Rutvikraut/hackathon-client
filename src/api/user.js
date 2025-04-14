// import axios from "axios"

const url = 'http://localhost:4000'
export const register = async({fullName,email,phone,password})=>{
    const body = {
        fullName,
        email,
        phone,
        password
    }
    console.log(body)
    console.log(url)
    // await axios(`${url}/register`)
}
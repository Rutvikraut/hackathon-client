import axios from "axios"
import {baseUrl} from "../utils/config"

export const register = async ({ fullName, email, phone, password }) => {
    try {
        const body = {
            fullName,
            email,
            phone,
            password
        }
        console.log(body)
        const response = await axios.post(`${baseUrl}/register`, body)
        return response.data

    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}

export const loginUser = async ({ email, password }) => {
    try {
        const body = {
            email,
            password
        }
        const response = await axios.post(`${baseUrl}/login`, body)
        console.log(response)
        return response.data

    } catch (error) {
        console.log(`exception occurred: `, error)
    }
}
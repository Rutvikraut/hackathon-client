import axios from "axios"

const url = 'http://localhost:4000'
export const register = async ({ fullName, email, phone, password }) => {
    try {
        const body = {
            fullName,
            email,
            phone,
            password
        }
        console.log(body)
        const response = await axios.post(`${url}/register`, body)
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

        const response = await axios.post(`${url}/login`, body)
        return response.data

    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}
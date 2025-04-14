// import axios from "axios"

const url = 'http://localhost:4000'
export const register = async ({ fullName, email, phone, password }) => {
    const body = {
        fullName,
        email,
        phone,
        password
    }
    console.log(body)
    console.log(url)
    // await axios(`${url}/register`)
    {
        try {
            // create the API url
            const url = `http://localhost:4000/user/register`

            // create the request body
            const body = {
                fullName,
                email,
                phone,
                password,
            }

            // make the POST /user/register API call
            const response = await axios.post(url, body)

            // return the response body to the caller
            return response.data
        } catch (ex) {
            console.log(`exception occurred: `, ex)
        }
    }
}
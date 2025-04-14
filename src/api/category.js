import axios from "axios"
const url = 'http://localhost:4000'
const token = sessionStorage.getItem('token')
export const getAllCategories = async()=>{
    try {
        const response = await axios.get(`${url}/getCategories`,{
            headers: {
                token,
            }},)
        return response.data
    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}
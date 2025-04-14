import axios from "axios"
const url = 'http://localhost:4000'
const token = sessionStorage.getItem('token')
export const getAllCategories = async({title,content,categoryId})=>{
    const body = {
        title,
        content,
        category_id:categoryId
    }
    try {
        const response = await axios.get(`${url}/addblog`,body,{
            headers: {
                token,
            }},)
        return response.data
    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}
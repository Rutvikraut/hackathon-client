import axios from "axios"
const url = 'http://localhost:4000'
const token = sessionStorage.getItem('token')
export const addBlog = async({title,content,categoryId})=>{
    const body = {
        title,
        content,
        category_id:categoryId
    }
    console.log(token)
    try {
        const response = await axios.post(`${url}/addblog`,body,{
            headers: {
                token,
            }},)
        return response.data
    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}

export const getAllBlog = async()=>{

    console.log(token)
    try {
        const response = await axios.get(`${url}/getblogs`,{
            headers: {
                token,
            }},)
        return response.data
    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}
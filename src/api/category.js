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

export const getCategoryByName = async({selectedCategory})=>{
    const body = {
        categoryName:selectedCategory
    }
    console.log(body)
    try {
        const response = await axios.post(`${url}/getCategoryByName`,body,{
            headers: {
                token,
            }},)
        return response.data
    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}
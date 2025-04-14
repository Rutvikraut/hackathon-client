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

export const getMyBlog = async()=>{
    try {
        const response = await axios.get(`${url}/getMyBlogs`,{
            headers: {
                token,
            }},)
        return response.data
    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}

export const getBlogByTitle = async({title})=>{
    const body = {
        title
    }
    try {
        const response = await axios.post(`${url}/getBlogsByTitle`,body,{
            headers: {
                token,
            }},)

            console.log(response.data)
        return response.data
    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}

export const deleteBlog = async (blogId)=>{
    try {
        const response = await axios.delete(`${url}/deleteBlog/${blogId}`,{
            headers: {
                token,
            }},)

            console.log(response.data)
        return response.data
    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}

export const deleteMyBlog = async (blogId)=>{
    try {
        const response = await axios.delete(`${url}/deleteBlog/${blogId}`,{
            headers: {
                token,
            }},)

            console.log(response.data)
        return response.data
    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}
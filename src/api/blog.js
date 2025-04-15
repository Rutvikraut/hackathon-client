import axios from "axios"
import {baseUrl} from "../utils/config"
const token = sessionStorage.getItem('token')
export const addBlog = async({title,content,categoryId})=>{
    const body = {
        title,
        content,
        category_id:categoryId
    }
    console.log(token)
    try {
        const response = await axios.post(`${baseUrl}/addblog`,body,{
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
        const response = await axios.get(`${baseUrl}/getblogs`,{
            headers: {
                token,
            }},)
        console.log(response)
        return response.data
    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}

export const getMyBlog = async(token)=>{

    try {
        const response = await axios.get(`${baseUrl}/getMyBlogs`,{
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
        const response = await axios.post(`${baseUrl}/getBlogsByTitle`,body,{
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
        const response = await axios.delete(`${baseUrl}/deleteBlog/${blogId}`,{
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
        const response = await axios.delete(`${baseUrl}/deleteBlog/${blogId}`,{
            headers: {
                token,
            }},)

            console.log(response.data)
        return response.data
    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}
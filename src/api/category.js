import axios from "axios"
import {baseUrl} from "../utils/config"

const token = sessionStorage.getItem('token')
export const getAllCategories = async()=>{
    try {
        const response = await axios.get(`${baseUrl}/getCategories`,{
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
        const response = await axios.post(`${baseUrl}/getCategoryByName`,body,{
            headers: {
                token,
            }},)
        return response.data
    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}

export const addCategory = async({category})=>{
    const body = {
        title:category
    }
    console.log(body)
    try {
        const response = await axios.post(`${baseUrl}/addCategory`,body,{
            headers: {
                token,
            }},)
        return response.data
    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}

export const deleteCategory = async (id)=>{
    try {
        const response = await axios.delete(`${baseUrl}/deleteCategory/${id}`,{
            headers: {
                token,
            }},)

            console.log(response.data)
        return response.data
    } catch (ex) {
        console.log(`exception occurred: `, ex)
    }
}
import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../api/category";

const NewBlog = () => {
    const [categories,setCategories] = useState([])
    const [selectedCategory,setSelectedCategory] = useState()

    const handleSelect = (e)=>{
        const category = e.target.value
        console.log(category)
        setSelectedCategory(category)
    }
    useEffect(()=>{
        const fetchCategories = async()=>{
            try {
                const response = await getAllCategories()
            
                console.log(response.data[0].title)
                setCategories(response.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchCategories();
        categories.map((category,index)=>{
            console.log("HELLO",category)
        })
    },[])

    const handleAddBlog=async()=>{
        
    }
  return (
    <div className="w-100">
      <div className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            for="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="title"
            id="text"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
        </div>
        <div className="mb-5">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose category</label>
        <select onChange={handleSelect} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a category</option>
            {
                categories && categories.map((category)=>{
                    return(<option key={category.id}>{category.title}</option>)
                    
                })
            }
        </select>
        </div>
        <div className="mb-5">
          <label
            for="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Large input
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>


        <div classNameName="w-full flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;

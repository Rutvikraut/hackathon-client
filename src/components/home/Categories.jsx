import React, { useEffect, useState } from 'react'
import { addCategory, deleteCategory, getAllCategories } from '../../api/category'

const Categories = () => {
    const [category,setCategory] = useState()
    const [categories,setCategories] = useState([])

    const handleAddCategory = async()=>{
        await addCategory({category})
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
    },[category])

    const handleDeleteCategory = async (id) => {
        console.log("Blog",id)
        const response = await deleteCategory(id)
        if(response.status == 'success'){
            const response = await getAllCategories();
            console.log(response.data);
            if (response.status == "success") {
                setblogs(response.data);
            }
        }
        };
  return (
    <div>
        <div className="mb-5">
          <label
            for="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Add title
          </label>
          <input
            type="title"
            id="text"
            onChange={(e)=>{
                setCategory(e.target.value)
            }}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
        </div>

        <div classNameName="w-full flex justify-center">
          <button
            type="submit"
            onClick={handleAddCategory}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Category
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        categories.map((category,index)=>(
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {category.categoryId}
                      </th>
                      <td className="px-6 py-4">{category.title}</td>
                      <td className="px-6 py-4">
                        <div className="flex">
                        <button
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={()=>{
                            handleDeleteCategory(category.categoryId)
                          }}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Delete
                        </button>
                        </div>
                      </td>
                    </tr>
                        ))
                    }
                  </tbody>
                </table>
              </div>
    </div>
  )
}

export default Categories
import React, { useState } from "react";
import { getBlogByTitle } from "../../api/blog";
import { toast } from "react-toastify";

const FindBlogs = () => {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState([]);
  const [error,setError] = useState(false)
  const handleSearch = async () => {
    try {
      const response = await getBlogByTitle({ title });
      if(response.status == 'success' && response.data.length>0){
        setBlog(response.data);
        toast.success('Blog Found')
      }
      else{
        setError(true)
        setBlog([])
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex flex-col items-center ms-34 mt-24">
      <div className="w-1/2">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-black"
            placeholder="Search title ...."
            required
          />
          <button
            type="submit"
            onClick={handleSearch}
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>

      {blog.length>0 && (
        blog.map((blog,index)=>(
          <div className="mt-5 w-1/2 px-6 py-2 shadow-md rounded-xl bg-gray-200 cursor-pointer">
            <h2 class="text-3xl text-black font-bold dark:text-white">
              {blog.Title}
            </h2>
            <p class="my-4 text-lg text-gray-500">{blog.Content}</p>
        </div>
        ))
      )}
    </div>
  );
};

export default FindBlogs;

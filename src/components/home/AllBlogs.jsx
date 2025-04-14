import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { deleteBlog, getAllBlog } from "../../api/blog";

const AllBlogs = () => {
  const [blogs, setblogs] = useState([]);

  const handleDeleteBlog = async (id) => {
    console.log("Blog",id)
    const response = await deleteBlog(id)
    if(response.status == 'success'){
        const response = await getAllBlog();
        console.log(response.data);
        if (response.status == "success") {
          setblogs(response.data);
        }
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllBlog();
        console.log(response.data);
        if (response.status == "success") {
          setblogs(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="overflow-y-auto mt-50">
      <h2 className="font-semibold text-3xl text-center mb-5">All Blogs</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {blogs.length > 0 ? (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Author
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={blog.blogId} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {blog.Id}
                  </th>
                  <td className="px-6 py-4">{blog.Title}</td>
                  <td className="px-6 py-4">{blog.Category}</td>
                  <td className="px-6 py-4">{blog.Date}</td>
                  <td className="px-6 py-4">{blog.Author}</td>
                  <td className="px-6 py-4">
                    <div className="flex">
                      <Button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </Button>
                      <Button
                        onClick={()=>{
                            handleDeleteBlog(blog.Id)
                        }}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2>Empty</h2>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;

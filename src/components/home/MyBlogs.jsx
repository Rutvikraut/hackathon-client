import React, { useContext, useEffect, useState } from "react";
import { deleteBlog, getMyBlog } from "../../api/blog";
import { toast } from "react-toastify";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

const MyBlogs = () => {
  const { user } = useContext(AuthContext);
  const [blogs, setblogs] = useState([]);
  const token = sessionStorage.getItem("token");
  const fetchBlogs = async () => {
    try {
      const response = await getMyBlog(token);
      if (response.status == "success") {
        setblogs(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (token) fetchBlogs();
  }, [token]);

  const handleDeleteBlog = async (id) => {
    console.log("Blog", id);
    const response = await deleteBlog(id);
    if (response.status == "success") {
      toast.success("Blog Deleted Successfully");
      const response = await getMyBlog();
      console.log(response.data);
      if (response.status == "success") {
        setblogs(response.data);
      }
    }
  };
  return (
    <div className="flex flex-col items-center ms-34 mt-24">
      <h2 className="font-semibold text-3xl text-center mb-5">My Blogs</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {blogs.length > 0 ? (
          <table className="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
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
                  Date / Time
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
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
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
                    <div className="flex gap-6 justify-center">
                      <button className="font-medium text-white dark:text-blue-500 cursor-pointer bg-blue-500 hover:bg-blue-400 rounded hover:text-white px-4">
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          handleDeleteBlog(blog.Id);
                        }}
                        className="font-medium bg-red-500 px-2 py-1 rounded text-white dark:text-blue-500 cursor-pointer"
                      >
                        Delete
                      </button>
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

export default MyBlogs;

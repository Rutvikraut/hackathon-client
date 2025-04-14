import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";

const Menu = () => {
    const { user,setUser } = useContext(AuthContext)
    const [username,setusername] = useState('')
    useEffect(()=>{
        const username = sessionStorage.getItem('name', name)
        setusername(username)
    },[])

    const navigate = useNavigate()
    const handleSignOut = ()=>{
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('name')
        setUser(null)
        navigate('/login')
    }

  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
        >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
                <h1 className="ms-3">Hi! {username}</h1>
            </li>
            <li>
              <Link
                to={'/'}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">New Blog</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/allBlogs'}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">All Blogs</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/yourBlogs'}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">My Blogs</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/findBlog'}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Find Blog</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/categories'}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Categories</span>
              </Link>
            </li>
            <li>
              <button
                onClick={handleSignOut}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Menu;

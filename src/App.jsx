import { Route, Routes } from "react-router-dom"
import Login from "./components/user/login"
import Register from "./components/user/Register"
import Menu from "./components/home/Menu"
import Layout from "./pages/Layout"
import NewBlog from "./components/home/NewBlog"
import SearchBlog from "./components/home/SearchBlog"
import Categories from "./components/home/Categories"
import MyBlogs from "./components/home/MyBlogs"
import AllBlogs from "./components/home/AllBlogs"

function App() {

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<NewBlog/>}></Route>
        <Route path="/allBlogs" element={<AllBlogs/>}></Route>
        <Route path="/yourBlogs" element={<MyBlogs/>}></Route>
        <Route path="/search" element={<SearchBlog/>}></Route>
        <Route path="/categories" element={<Categories/>}></Route>
        </Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        
      </Routes>
    {/* <Login/> */}
    {/* <Register/> */}
    </div>
  )
}

export default App

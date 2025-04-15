import { Route, Routes } from "react-router-dom";
import Login from "./components/user/login";
import Register from "./components/user/Register";
import Menu from "./components/home/Menu";
import Layout from "./pages/Layout";
import NewBlog from "./components/home/NewBlog";
import Categories from "./components/home/Categories";
import MyBlogs from "./components/home/MyBlogs";
import AllBlogs from "./components/home/AllBlogs";
import FindBlogs from "./components/home/FindBlogs";
import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState();

  return (
    <div>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<NewBlog />}></Route>
            <Route path="/allBlogs" element={<AllBlogs />}></Route>
            <Route path="/yourBlogs" element={<MyBlogs />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route path="/findBlog" element={<FindBlogs />}></Route>
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </AuthContext.Provider>

      <ToastContainer />
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom"
import { Navbar } from "../app/Navbar"
import { AddPostForm } from "../features/posts/AddPostForm"
const Home = () => {
  return (
  <div>
  <Navbar />
  <h2 style={{textAlign:'center'}} >welcome to the Redux Essentials examlpe app!</h2>
  <AddPostForm/>
  <Outlet />
  </div>
  )
}

export default Home
import { Outlet } from "react-router-dom"
import { Navbar } from "../app/Navbar"
const Home = () => {
  return (
  <div>
  <Navbar />
  <h2 style={{textAlign:'center'}} >welcome to the Redux Essentials examlpe app!</h2>
  <Outlet />
  </div>
  )
}

export default Home
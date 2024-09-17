import { Outlet } from "react-router-dom"
import { Navbar } from "../app/Navbar"
const Home = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Home
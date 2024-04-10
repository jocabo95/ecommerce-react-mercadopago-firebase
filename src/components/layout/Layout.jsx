import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
        <Navbar />
            <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Dashboard/SideBar";

export default function Dashboard(){
 const storage = window.localStorage.getItem("aya")
 console.log(storage)
    return(
        <div className="flex h-screen bg-gray-100">
        <SideBar />
        <Outlet />
      </div>
    )
}
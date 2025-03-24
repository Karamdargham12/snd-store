import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Dashboard/SideBar";

export default function Dashboard(){
    return(
        <div className="flex h-full md:h-screen bg-gray-100">
        <SideBar />
        <Outlet />
      </div>
    )
}
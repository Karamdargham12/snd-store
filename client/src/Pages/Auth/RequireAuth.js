import Cookie from "cookie-universal"
import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router"
import { User } from "../../Context/UserContext"

export default function RequireAuth(){
 const context=useContext(User)
 const role=context.user.role
    const location = useLocation()
    return role==="admin" ? <Outlet /> : <Navigate state={{from:location}} replace to="/login" />

}
import Cookie from "cookie-universal"
import { Navigate, Outlet, useLocation } from "react-router"

export default function RequireAuth(){
       const cookie = Cookie()
       const role = cookie.get("role")
       const location = useLocation()
    return role==="admin" ? <Outlet /> : <Navigate state={{from:location}} replace to="/login" />

}
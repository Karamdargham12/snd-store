import { useContext, useEffect, useState } from "react"
import { Navigate, Outlet, useLocation } from "react-router"
import { User } from "../../Context/UserContext"
import Cookie from "cookie-universal"
import axios from "axios"

export default function RequireAuth(){
    const [role, setRole] = useState("")
    const [loading, setLoading] = useState(true) // Start with loading as true
    const cookie = Cookie()
    const access = cookie.get('access')
    const context = useContext(User)

    async function getMyInfo(){
        try {
            let res = await axios.get("http://localhost:5000/info", {
                headers: {
                    Authorization: access
                }
            })
            context.setUser({
                role: res.data.role
            })
            setRole(res.data.role)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        getMyInfo()   
    }, [])

    const location = useLocation()
    if (loading) {
        return <p>Loading...</p>
    }

    return role === "admin" ? <Outlet /> : <Navigate state={{ from: location }} replace to="/login" />
}
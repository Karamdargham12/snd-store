import axios from "axios"
import { useEffect, useState } from "react"

export default function Accounts(){
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(false)

    async function getUsers(){
        setLoading(true)
        try{
            let res = await axios.get("http://localhost:5000/users")
            setUsers(res.data)
        }catch(err){
           console.log(err)
        }
        finally{
            setLoading(false)
        }

      }
    useEffect(()=>{
       getUsers()
    },[])
    return(
       loading ? <p>loading...</p> : <div>
            <ul>
                {users.map((user,index)=>{
                   return <li key={index}>{user.name}</li>
                })}
            </ul>
        </div>
    )
}
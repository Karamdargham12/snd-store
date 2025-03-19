import axios from "axios"
import { useEffect, useState } from "react"
import Cookie from "cookie-universal"

export default function Accounts(){
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(false)
    const cookie = Cookie()
    const accessToken = cookie.get("access")

    async function getUsers(){
        setLoading(true)
        try{
            let res = await axios.get("http://localhost:5000/users",{
                headers:{
                    Authorization:accessToken
                }
            })
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
       loading ? <p>loading...</p> :
       <div class="card-body">
  <article class="itemlist">
    <div class="flex items-center">
      <div class="flex-grow-0">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" />
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/3 w-2/3 flex-grow-1">
        <a class="flex items-center" href="#">
          <div class="w-16 h-16 rounded">
            <img class="w-full h-full" src="assets/imgs/items/1.jpg" alt="Item" />
          </div>
          <div class="ml-4">
            <h6 class="mb-0">T-shirt for men medium size</h6>
          </div>
        </a>
      </div>
      <div class="lg:w-1/6 sm:w-1/6 w-1/6">
        <span>$34.50</span>
      </div>
      <div class="lg:w-1/6 sm:w-1/6 w-1/6">
        <span class="badge rounded-full bg-green-500">Active</span>
      </div>
      <div class="lg:w-1/12 sm:w-1/12 w-1/12">
        <span>02.11.2022</span>
      </div>
      <div class="lg:w-1/6 sm:w-1/6 w-1/6 text-right">
        <a class="btn text-sm bg-brand text-white mr-5" href="#"><i class="material-icons md-edit"></i> Edit</a>
        <a class="btn text-sm bg-gray-200 rounded" href="#"><i class="material-icons md-delete_forever"></i> Delete</a>
      </div>
    </div>
  </article>
</div>
         );
       };

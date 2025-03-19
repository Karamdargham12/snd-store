import axios from "axios"
import { useEffect, useState } from "react"
import Cookie from "cookie-universal"

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
       loading ? <p>loading...</p> :
           <div className="card-body">
             <article className="itemlist">
               <div className="flex items-center">
                 <div className="flex-grow-0">
                   <div className="form-check">
                     <input className="form-check-input" type="checkbox" />
                   </div>
                 </div>
                 <div className="lg:w-1/4 sm:w-1/4 w-2/3 flex-grow col-name">
                   <a className="flex items-center" href="#">
                     <div className="mr-4">
                       <img className="w-16 h-16 rounded" src="assets/imgs/items/1.jpg" alt="Item" />
                     </div>
                     <div className="info">
                       <h6 className="mb-0">T-shirt for men medium size</h6>
                     </div>
                   </a>
                 </div>
                 <div className="lg:w-1/6 sm:w-1/6 w-1/4 col-price">
                   <span>$34.50</span>
                 </div>
                 <div className="lg:w-1/6 sm:w-1/6 w-1/4 col-status">
                   <span className="badge rounded-full bg-green-100 text-green-800">Active</span>
                 </div>
                 <div className="lg:w-1/12 sm:w-1/6 w-1/4 col-date">
                   <span>02.11.2022</span>
                 </div>
                 <div className="lg:w-1/6 sm:w-1/6 w-1/4 col-action text-right">
                   <a className="btn btn-sm font-sm rounded bg-blue-500 text-white mr-2" href="#">
                     <i className="material-icons md-edit"></i> Edit
                   </a>
                   <a className="btn btn-sm font-sm bg-gray-200 rounded" href="#">
                     <i className="material-icons md-delete_forever"></i> Delete
                   </a>
                 </div>
               </div>
               {/* Repeat similar structure for other items */}
             </article>
           </div>
         );
       };

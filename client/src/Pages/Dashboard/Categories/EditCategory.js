import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";
import NotFound from "../../../Components/NotFound/NotFound"

export default function EditCategory() {
  const id = window.location.pathname.split("/")[3];
  const [category, setCategory] = useState({});
  const [notFound,setNotFound] = useState(false)
  const cookie = Cookie();
  const accessToken = cookie.get("access");
  const [loading,setLoading] = useState(true)
  const nav = useNavigate()

 async function getCategory(){
    setLoading(true)
     try{
        let res = await axios.get("http://localhost:5000/categories")
        let getCategoryById = res.data.find((category)=> category._id === id)
        setCategory(getCategoryById)
     }
     catch{
        setNotFound(true)
     }
     finally{
        setLoading(false)
     }
  }
  useEffect(()=>{
    getCategory()
  },[])
  function fillForm(e){
    let name = e.target.name
    let value = e.target.value
    setCategory({...category,[name]:value})
    }
    function handleImageChange(e) {
        const file = e.target.files[0];
        setCategory({ ...category, image: file });
    }

  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true)
    try{
   await axios.put(`http://localhost:5000/categories/${id}`,category,{
    headers: {
        Authorization: accessToken ? accessToken : '',
        "Content-Type": 'multipart/form-data',
    },
   })
   setLoading(false)
     nav("/dashboard/categories")
      
    }
    catch(err){
        console.log(err)
    }
    finally{
        setLoading(false)
    }
  }
  return (
    loading ?<p>loading...</p>:notFound ? <NotFound />:<section className="w-full flex justify-center">
      <div className="card mx-auto md:w-1/2 w-full ">
        <div className="w-full p-6 ">
          <h4 className="text-2xl font-semibold mb-4 text-center text-secondaryColor">Edit Category</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 w-full">
                <img src={`http://localhost:5000${category.imageUrl}`} className="w-1/2" alt={category.name} />
              <label className=" text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                className="form-control w-full pl-2 h-8 mt-1 outline-none border-gray-300 rounded-md shadow-sm"
                name="name"
                type="text"
                value={category.name}
                onChange={fillForm}
                required
              />
           </div>
           <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Page URL
              </label>
              <input
                className="form-control block w-full mt-1 h-8 pl-2 outline-none border-gray-300 rounded-md shadow-sm"
                type="text"
                name="url"
                value={category.url}
                onChange={fillForm}
                required
              />
           </div>
           <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                className="form-control block w-full mt-1 h-8 pl-2 outline-none border-gray-300 rounded-md shadow-sm"
                type="file"
                name="image"
                onChange={handleImageChange}
                required
              />
           </div>
            <div className="mt-8">
              <button
                className="btn btn-primary w-full py-2 bg-primaryColor hover:bg-primaryColor/80 duration-300 transform text-white rounded-md"
                type="submit"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

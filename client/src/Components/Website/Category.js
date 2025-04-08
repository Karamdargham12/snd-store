import { Link } from "react-router-dom"
import logo from "../../images/logo.png"
import NavBar from "./NavBar"
import { useEffect, useState } from "react"
import axios from "axios"
import MobileNavBar from "./MobileNavBar"
export default function Category(){
    const categoryName =  window.location.pathname.split('/').slice(-1).toString()
    const [loading,setLoading] = useState(true)
    const [products,setProducts] = useState([])
    const [error,setError] = useState(false)

    async function getProducts() {
      setLoading(true)
      try{
        let res = await axios.get("http://localhost:5000/products")
        const filterProductsByName = res.data.filter((product)=> product.category.name === categoryName)
        setProducts(filterProductsByName)
      }
      catch{
         setError(true)
      }
      finally{
        setLoading(false)
      }
    }

    useEffect(()=>{
      getProducts()
    },[])
    return loading?<p>Loading...</p>: error ? <p>Failed to load products</p> :<div className="scroll-bar">
          <div className="hidden md:block">
            <NavBar />
          </div>
          <div className="md:hidden">
            <MobileNavBar />
          </div>
    <section className="mt-36">
        <div className="container mx-auto">
          <div className="text-center border-b-0">
            <h4 className="text-secondaryColor/70 text-3xl font-bold pt-10">{categoryName}</h4>
          </div>
          <div className="mt-10 flex justify-center">
            <ul className={` ${products.length!==0? "grid md:grid-cols-4 gap-4 w-[90%]" : "flex justify-center items-center w-full"}`}>
              {products.length!==0?products.map((product, index) => (
                <Link key={index} to={`/categories/products/${product._id}`}><li  className={`animate__animated animate__fadeIn flex justify-center items-center border border-secondaryColor/20 hover:shadow-lg transition-shadow duration-300`} style={{ animationDelay: `${index * 0.1}s` }} >
                  <div className="p-4">
                    <div className="image ">
                      <div className="flex justify-center">
                        <img src={product.imagesUrl!==null ? `http://localhost:5000${product.imagesUrl}` : ""} alt={product.name} className="w-36 h-24 " />
                      </div>
                    </div>
                    <div className="text-info p-4 text-center">
                      <h3 className="text-sm text-gray-900 font-bold text-center">{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                  </div>
                </li>
                </Link>
              )):<div className="md:w-1/2 w-[90%]"><div  className={`animate__animated animate__fadeIn flex justify-center items-center border border-secondaryColor/20 hover:shadow-lg transition-shadow duration-300 `} style={{ animationDelay: `${1 * 0.1}s` }} >
                <div className="p-4 ">
                    <div className="text-info p-4 text-center">
                      <h3 className="text-lg text-gray-900 font-bold text-center">No Products Yet</h3>
                    </div>
                  </div>
                  </div>
                </div>}
            </ul>
          </div>
        </div>
      </section>
      </div>
}
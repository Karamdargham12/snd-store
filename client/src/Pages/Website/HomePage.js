import MobileNavBar from "../../Components/Website/MobileNavBar";
import NavBar from "../../Components/Website/NavBar";
import "swiper/css";
import Header1 from "../../images/Hero.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [categories,setCategories] = useState([])
  async function getCategories() {
    try{
      let res = await axios.get("http://localhost:5000/categories");
      setCategories(res.data)
    }
    catch{
      setError(true)
    }
    finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getCategories()
  },[])

  return (
    loading?<p>loading...</p>:<div className="scroll-bar">
      <div className="hidden md:block">
        <NavBar categories={categories} />
      </div>
      <div className="md:hidden">
        <MobileNavBar />
      </div>
      <section className="block">
        <div className="relative w-full">
          <div className="w-full h-full">
            <div>
              <div
                className="min-h-screen flex justify-center"
                style={{
                  backgroundImage: `url(${Header1})`,
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className=" md:mt-20 flex md:justify-center justify-around md:flex-row flex-col">
                  <div></div>
                  <div className="flex justify-center items-center w-full">
                    <div className="md:w-2/3 w-[90%]">
                      <h1 className="md:text-6xl text-4xl text-center text-gray-700 font-bold my-4">
                        Get The Best Collection Of Hand Tools Right
                      </h1>
                      <div className="flex justify-center items-center">
                        <button className="bg-primaryColor text-center text-white text-xl font-semibold text-wrap mt-4 w-40 h-14 rounded-lg">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="flex md:flex-col md:gap-y-5 gap-x-8">
                      <i className="mdi mdi-facebook text-4xl md:text-6xl text-gray-700 hover:text-primaryColor transition-colors duration-300"></i>
                      <i className="mdi mdi-whatsapp text-4xl md:text-6xl text-gray-700  hover:text-primaryColor transition-colors duration-300"></i>
                      <i className="mdi mdi-instagram text-4xl md:text-6xl text-gray-700  hover:text-primaryColor transition-colors duration-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {error ?<p>failed to load categories</p> :<section className="mt-24">
      <div className="container mx-auto">
        <div className="text-center border-b-0">
          <h4 className="text-secondaryColor/70 text-3xl font-bold">Most Popular Categories</h4>
        </div>
        <div className="mt-10 flex justify-center">
          <ul className="grid md:grid-cols-4 gap-4 w-[90%]">
            {categories.map((category, index) => (
              <Link key={index} to={`${category.url}`}><li  className={`animate__animated animate__fadeIn flex justify-center items-center border border-secondaryColor/20 hover:shadow-lg transition-shadow duration-300`} style={{ animationDelay: `${index * 0.1}s` }} >
                <div className="p-4">
                  <div className="image ">
                    <div className="flex justify-center">
                      <img src={`http://localhost:5000${category.imageUrl}`} alt={category.name} className="w-24 h-24 " />
                    </div>
                  </div>
                  <div className="text-info p-4 text-center">
                    <h3 className="text-sm text-gray-900 font-bold text-center">{category.name}</h3>
                  </div>
                </div>
              </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>}
    </div>
  );
}

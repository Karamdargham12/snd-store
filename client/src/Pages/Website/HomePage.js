import MobileNavBar from "../../Components/Website/MobileNavBar";
import NavBar from "../../Components/Website/NavBar";
import "swiper/css";
import Header1 from "../../images/Hero.jpg";
import { useContext } from "react";
import { User } from "../../Context/UserContext";
export default function HomePage() {
  const categories = [
    { name: "Laptops", items: 1025, img: require("../../images/Categories/1.png") },
    { name: "Earphones", items: 2185, img: require("../../images/Categories/2.png") },
    { name: "Mouses", items: 635, img: require("../../images/Categories/3.png") },
    { name: "Keyboards", items: 965, img: require("../../images/Categories/4.png") },
    { name: "Routers", items: 1254, img: require("../../images/Categories/5.png") },
    { name: "Networks", items: 325, img: require("../../images/Categories/6.jpg") },
    { name: "Cables", items: 3256, img: require("../../images/Categories/7.png") },
    { name: "Cameras", items: 9658, img: require("../../images/Categories/8.png") },
    { name: "Batteries", items: 2356, img: require("../../images/Categories/9.png") },
    { name: "Laptop Accessories", items: 325, img: require("../../images/Categories/10.png") },
  ];

  const context = useContext(User);
  var aya = "jsaoidjsa";
  return (
    <div className="scroll-bar">
      <div className="hidden md:block">
        <NavBar />
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
      <section className="mt-24">
      <div className="container mx-auto">
        <div className="text-center border-b-0">
          <h4 className="text-secondaryColor/70 text-3xl font-bold">Most Popular Categories</h4>
        </div>
        <div className="mt-10 flex justify-center">
          <ul className="grid md:grid-cols-4 gap-4 w-[90%]">
            {categories.map((category, index) => (
              <li key={index} className={`animate__animated animate__fadeIn flex justify-center items-center border border-secondaryColor/20 hover:shadow-lg transition-shadow duration-300`} style={{ animationDelay: `${index * 0.1}s` }} >
                <div className="p-4">
                  <div className="image ">
                    <a href="shop-grid.html" className="flex justify-center">
                      <img src={category.img} alt={category.name} className="w-24 h-24" />
                    </a>
                  </div>
                  <div className="text-info p-4 text-center">
                    <a className="text-sm text-gray-900 font-bold text-center" href="shop-grid.html">{category.name}</a>
                    <p className="text-xs text-gray-500 text-center">{category.items}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </div>
  );
}

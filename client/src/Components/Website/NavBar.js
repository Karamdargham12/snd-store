import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import Cookie from "cookie-universal";
import { useState } from "react";
export default function NavBar(props) {
  const cookie = Cookie();
  const accessToken = cookie.get("access");
  const [showCategories, setShowCategories] = useState(false);
  return (
    <header className="fixed w-full top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-1 w-full">
          {/* Search Bar */}
          <div className="flex items-center overflow-hidden justify-center gap-x-8 w-2/3">
            <div className="pr-3">
              <a href="index.html">
                <img src={Logo} alt="Ecom" className="h-12 w-[50px]" />
              </a>
            </div>
            <input
              type="text"
              placeholder="Search for items"
              className="p-2 focus:outline-none w-[450px] border rounded-md"
            />
            <div className="hidden xl:flex space-x-6"></div>
          </div>

          {/* Navigation */}

          {/* Account & Cart */}
          {accessToken ? (
            <div className="flex items-center space-x-4 w-1/3 justify-center">
              <span class="mdi mdi-account"></span>
              <span class="mdi mdi-cart-outline"></span>
              <span class="mdi mdi-web"></span>
            </div>
          ) : (
            <div className="flex items-center space-x-1 w-1/3 justify-center text-secondaryColor font-semibold">
              <Link to="/login">Login</Link>{" "}
              <span class="mdi mdi-login text-xl pt-[2px] text-primaryColor"></span>
            </div>
          )}
        </div>
      </div>
      <hr className="w-full" />
      {/* Header Bottom */}
      <div className=" py-4 ">
        <div className="container mx-auto flex items-center justify-center px-4 relative">
          <button
            onClick={() => setShowCategories((prev) => !prev)}
            className="bg-primaryColor flex justify-between items-center text-white px-4 py-2 rounded w-1/6"
          >
            <div></div>
            <p>Shop By Categories</p>
            <span class="mdi mdi-arrow-down-drop-circle"></span>
          </button>
          {showCategories && (
            <div className="absolute top-[100%]  left-[17.3%] rounded -translate-x-1/2 -translate-y-1/6 z-50 bg-slate-100 w-1/6 p-2">
              {props.categories.map((category, index) => (
                <Link
                  key={index}
                  to={`${category.url}`}
                  className="block py-2 px-4 text-center text-gray-700"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
          <nav className="hidden md:flex space-x-6 w-2/3 pl-8">
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-500">
              Shop
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

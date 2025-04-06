import { useState } from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import Cookie from "cookie-universal"

export default function MobileNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
    const cookie = Cookie();
    const accessToken = cookie.get("access");
  return (
    <div className="md:hidden fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 md:py-4 py-2 flex items-center justify-between">
        <a href="index.html">
          <img src={Logo} alt="Ecom" className="h-10 w-10" />
        </a>
        <button
          className="text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>
      {/* Mobile Navigation */}
      {menuOpen ? (
        <nav className="px-4 py-2 bg-gray-100">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 text-gray-700 hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-4 text-gray-700 hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/shop" className="block py-2 px-4 text-gray-700 hover:text-blue-500">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-4 text-gray-700 hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
          {accessToken ? (
            <div className="flex items-center space-x-4 w-1/3 justify-center">
              <span class="mdi mdi-account"></span>
              <span class="mdi mdi-cart-outline"></span>
              <span class="mdi mdi-web"></span>
            </div>
          ) : (
            <div className="block py-2 px-4 text-secondaryColor font-semibold">
              <Link to="/login">Login</Link>
            </div>
          )}
        </nav>
      ) : (
        <div></div>
      )}
    </div>
  );
}

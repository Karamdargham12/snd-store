import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideBar(){
    const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <aside className={`bg-white shadow-md h-screen p-4 border-r border-gray-200 transition-all duration-300 ${isMinimized ? 'w-20' : 'w-64'}`}>
      <div className="mb-6 flex justify-between items-center">
        <a href="index.html" className={`text-2xl font-bold text-gray-700 transition-opacity duration-300 ${isMinimized ? 'hidden' : 'block'}`}>SND Shop</a>
        <button onClick={toggleSidebar} className="btn btn-icon btn-aside-minimize">
          <span className="mdi mdi-menu-open text-gray-500"></span>
        </button>
      </div>
      <nav>
        <ul className="space-y-1">
          <li>
            <Link to="/" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              <span className="mdi mdi-home text-lg mr-3"></span> <span className={`${isMinimized ? 'hidden' : 'inline'}`}>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/products" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              <span className="mdi mdi-shopping text-lg mr-3"></span> <span className={`${isMinimized ? 'hidden' : 'inline'}`}>Products</span>
            </Link>
          </li>
          <li>
            <a href="page-orders-1.html" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              <span className="mdi mdi-cart text-lg mr-3"></span> <span className={`${isMinimized ? 'hidden' : 'inline'}`}>Orders</span>
            </a>
          </li>
          <li>
            <a href="page-sellers-cards.html" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              <span className="mdi mdi-store text-lg mr-3"></span> <span className={`${isMinimized ? 'hidden' : 'inline'}`}>Sellers</span>
            </a>
          </li>
          <li>
            <a href="page-transactions-1.html" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              <span className="mdi mdi-currency-usd text-lg mr-3"></span> <span className={`${isMinimized ? 'hidden' : 'inline'}`}>Transactions</span>
            </a>
          </li>
          <li>
            <Link to="/dashboard/accounts" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              <span className="mdi mdi-account text-lg mr-3"></span> <span className={`${isMinimized ? 'hidden' : 'inline'}`}>Accounts</span>
            </Link>
          </li>
          <li>
            <a href="page-reviews.html" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              <span className="mdi mdi-comment text-lg mr-3"></span> <span className={`${isMinimized ? 'hidden' : 'inline'}`}>Reviews</span>
            </a>
          </li>
          <li>
            <a href="page-brands.html" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              <span className="mdi mdi-star text-lg mr-3"></span> <span className={`${isMinimized ? 'hidden' : 'inline'}`}>Brands</span>
            </a>
          </li>
          <li>
            <a href="page-settings-1.html" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              <span className="mdi mdi-cog text-lg mr-3"></span> <span className={`${isMinimized ? 'hidden' : 'inline'}`}>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
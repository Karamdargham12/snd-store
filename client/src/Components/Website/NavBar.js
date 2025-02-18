import Logo from '../../images/logo.png'
export default function NavBar(){
    return(
        <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-1 w-full">
          {/* Search Bar */}
          <div className="flex items-center overflow-hidden justify-center gap-x-8 w-2/3">
          <div className="pr-3">
          <a href="index.html">
              <img src={Logo} alt="Ecom" className="h-16 w-[70px]" />
            </a>
          </div>
            <input
              type="text"
              placeholder="Search for items"
              className="p-2 focus:outline-none w-[450px] border rounded-md"
            />
                      <nav className="hidden xl:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-500">Flash Deals</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Special</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Top Sellers</a>
          </nav>
          </div>

          {/* Navigation */}

          {/* Account & Cart */}
          <div className="flex items-center space-x-4 w-1/3 justify-center">
          <span class="mdi mdi-account"></span>
          <span class="mdi mdi-cart-outline"></span>
          <span class="mdi mdi-web"></span>
          </div>
        </div>
      </div>
      <hr className="w-full" />
      {/* Header Bottom */}
      <div className=" py-4">
        <div className="container mx-auto flex items-center justify-center px-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-1/6">Shop By Categories</button>
          <nav className="hidden md:flex space-x-6 w-2/3 pl-8">
            <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Electronics</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Appliances</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">New Arrivals</a>
          </nav>
        </div>
      </div>
    </header>
    )
}
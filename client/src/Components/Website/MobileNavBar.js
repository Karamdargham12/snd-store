export default function MobileNavBar(){
   return  <div className="xl:hidden fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="index.html">
          <img src="assets/imgs/template/logo.svg" alt="Ecom" className="h-8" />
        </a>
        <button className="text-gray-700 focus:outline-none">☰</button>
      </div>
      {/* Mobile Navigation */}
      <nav className="px-4 py-2 bg-gray-100">
        <ul className="space-y-2">
          <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Home</a></li>
          <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Electronics</a></li>
          <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Appliances</a></li>
          <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">New Arrivals</a></li>
        </ul>
      </nav>
    </div>
}
import SideBar from "../../Components/Dashboard/SideBar";

export default function Dashboard(){
    return(
        <div className="flex h-screen bg-gray-100">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <header className="bg-white shadow-md p-4 flex justify-between items-center border-b border-gray-200">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <p className="text-gray-500">Whole data about your business here</p>
          </header>
          <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
                <h3 className="text-gray-600">Revenue</h3>
                <p className="text-xl font-semibold">$13,456.5</p>
                <span className="text-sm text-gray-500">Shipping fees not included</span>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
                <h3 className="text-gray-600">Orders</h3>
                <p className="text-xl font-semibold">53,668</p>
                <span className="text-sm text-gray-500">Excluding orders in transit</span>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
                <h3 className="text-gray-600">Products</h3>
                <p className="text-xl font-semibold">9,856</p>
                <span className="text-sm text-gray-500">In 19 categories</span>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
                <h3 className="text-gray-600">Monthly Earning</h3>
                <p className="text-xl font-semibold">$6,982</p>
                <span className="text-sm text-gray-500">Based on your local time</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
}
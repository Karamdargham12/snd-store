import { useState } from "react";
import MobileNavBar from "../../Components/Website/MobileNavBar";
import NavBar from "../../Components/Website/NavBar";
import registerImg from "../../images/Register.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

export default function Register() {
  const [phone, setPhone] = useState("");
  const [loading,setLoading] = useState(false)
  const [userData,setUserData] = useState({
    name:"",
    email:"",
    password:"",
    location:"",
    phone:""
  })
  function fillForm(e){
    const name = e.target.name
    const value = e.target.value
    setUserData({...userData,[name]:value})
}
async function formSubmit(e){
  e.preventDefault();
  setLoading(true);

  const finalUserData = {
    ...userData,
    phone: phone 
  };

  try {
    const response = await axios.post("http://localhost:5000/auth/register", finalUserData,{
      headers: { "Content-Type": "application/json" }
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}
  return (
   loading?<p>Loading....</p> :<div className="scroll-bar bg-white">
      <div className="hidden md:block">
        <NavBar />
      </div>
      <div className="md:hidden">
        <MobileNavBar />
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-12 w-[95%] h-[90vh]  bg-gradient-to-tr from-sky-50 to-sky-500 lg:p-8 p-2 lg:pt-5 pt-0 mt-20 lg:mt-40 rounded-lg">
          <div className="lg:col-span-6 hidden lg:flex col-span-12 col-start-1">
            <img
              src={registerImg}
              className="lg:rounded-r-[6rem] lg:rounded-bl-none rounded-b-[2rem] w-full h-full "
              alt="Register"
            />
          </div>
          <form onSubmit={formSubmit} className="lg:col-span-5 col-span-12 lg:col-start-8 pt-10 mt-3 lg:mt-0 bg-gray-700/60 lg:rounded-l-[6rem] lg:rounded-tr-none rounded-t-xl">
            <div className="w-full flex justify-center items-center">
              <div className="w-3/4">
                <h1 className="text-4xl text-center text-white font-extrabold">
                  Register
                </h1>
                <div className="input-box mt-8 flex items-center border-2 gap-x-2 bg-white">
                  <span className="mdi mdi-account-circle text-primaryColor text-xl border-white border-2 pl-2"></span>
                  <input
                    className="border-primaryColor border-10 rounded-md w-full h-9 outline-none"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={fillForm}
                    required
                  />
                </div>
                <div className="input-box mt-8 flex items-center border-2 gap-x-2 bg-white">
                  <span className="mdi mdi-email-box text-primaryColor text-xl border-white border-2 pl-2"></span>
                  <input
                    className="border-primaryColor border-10 rounded-md w-full h-9 outline-none"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={fillForm}
                    required
                  />
                </div>
                <div className="input-box mt-8 flex items-center border-2 gap-x-2 bg-white">
                  <span className="mdi mdi-lock text-primaryColor text-xl border-white border-2 pl-2"></span>
                  <input
                    className="border-primaryColor border-10 rounded-md w-full h-9 outline-none"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={fillForm}
                    required
                  />
                </div>
                <div className="input-box mt-8 flex flex-col">
                  <PhoneInput
                    country={"sy"}
                    value={phone}
                    placeholder="Phone"
                    onChange={setPhone}
                    inputClass="!w-full !h-9 !rounded-md !outline-none "
                    containerClass="!w-full !flex !items-center"
                    buttonStyle={{paddingLeft:"3px"}}
                  />
                </div>
                <div className="input-box mt-8 flex items-center border-2 gap-x-2 bg-white">
                  <span className="mdi mdi-map-marker text-primaryColor text-xl border-white border-2 pl-2"></span>
                  <input
                    className="border-primaryColor border-10 rounded-md w-full h-9 outline-none"
                    type="text"
                    name="location"
                    required
                    onChange={fillForm}
                    placeholder="Location"
                  />
                </div>
                <div className="w-full mt-8">
                <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-1/2 bg-primaryColor rounded p-2 font-semibold text-white"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

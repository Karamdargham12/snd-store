import { Link } from "react-router-dom";
import MobileNavBar from "../../Components/Website/MobileNavBar";
import NavBar from "../../Components/Website/NavBar";
import loginImg from "../../images/login.jpg";
import "react-phone-input-2/lib/style.css";

export default function Login() {
  return (
    <div className="scroll-bar bg-white">
      <div className="hidden md:block">
        <NavBar />
      </div>
      <div className="md:hidden">
        <MobileNavBar />
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-12 w-[95%] h-screen lg:h-full  bg-gradient-to-tr from-sky-50 to-sky-500 lg:p-8 p-2 lg:pt-5 pt-0 mt-20 lg:mt-40 rounded-lg">
          <div className="lg:col-span-6 hidden lg:flex col-span-12 col-start-1">
            <img
              src={loginImg}
              className="lg:rounded-r-[6rem] lg:rounded-bl-none rounded-b-[2rem] w-full h-full "
              alt="Register"
            />
          </div>
          <form className="lg:col-span-5 col-span-12 lg:col-start-8 pt-10 mt-3 lg:mt-0 bg-gray-700/60 lg:rounded-l-[6rem] lg:rounded-tr-none rounded-t-xl">
            <div className="w-full flex justify-center items-center">
              <div className="w-3/4">
                <h1 className="text-4xl text-center text-white font-extrabold">
                  Login
                </h1>
              
                <div className="input-box mt-8 flex items-center border-2 gap-x-2 bg-white">
                  <span className="mdi mdi-email-box text-primaryColor text-xl border-white border-2 pl-2"></span>
                  <input
                    className="border-primaryColor border-10 rounded-md w-full h-9 outline-none"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="input-box mt-8 flex items-center border-2 gap-x-2 bg-white">
                  <span className="mdi mdi-lock text-primaryColor text-xl border-white border-2 pl-2"></span>
                  <input
                    className="border-primaryColor border-10 rounded-md w-full h-9 outline-none"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                  <div className="remember-forget pt-8 pl-2 flex justify-between">
                    <div className="flex gap-x-1">
                      <input type="checkbox" className="pl-2" />
                      <label className="text-gray-300">Remember me</label>
                    </div>
                    <Link to="/fogetpassword" className="text-gray-300">
                      Forget Password?
                    </Link>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-1/2 bg-primaryColor rounded mt-5 p-2 font-semibold text-white"
                    >
                      Submit
                    </button>
                  </div>

                  <div className="register-link flex justify-center pt-8">
                    <p className="text-gray-300">
                      Dont have an account?{" "}
                      <Link to="/register" className="text-secondaryColor/75">
                        register
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
          
          </form>
        </div>
      </div>
    </div>
  );
}

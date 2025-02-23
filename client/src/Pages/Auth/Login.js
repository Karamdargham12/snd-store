import { Link } from "react-router-dom";
import MobileNavBar from "../../Components/Website/MobileNavBar";
import NavBar from "../../Components/Website/NavBar";
import loginImg from "../../images/login.jpg";


export default function Login() {
  return (
    <div className="scroll-bar">
    <div className="hidden md:block">
  <NavBar />
</div>
<div className="md:hidden">
  <MobileNavBar />
</div>
    <div className=" flex justify-center pt-44">
      <div className="grid grid-cols-12 w-[95%]  bg-gradient-to-tr from-white to-sky-500 rounded-md">
        <div className="col-span-6 flex justify-center p-10">
          <img className="w-full rounded-xl" src={loginImg} alt="Login" />
        </div>
        
<div className=" col-span-6 p-10  flex justify-center flex-col pt-10">
  <form className="p-10 bg-gray-700/60 rounded-xl w-full">
    <h1 className="text-center text-4xl  font-extrabold text-white ">Login</h1>
    <div className="input-box mt-8 flex border-2 gap-x-2 bg-white">
    <span className="mdi mdi-email text-primaryColor text-xl border-white border-2 pl-2"></span>
    <input className="border-primaryColor border-10 rounded-md w-full h-8 outline-none" type="text" placeholder="Email"/>
      
    </div>
    <div className="input-box mt-8 flex border-2 gap-x-2 bg-white">
    <span class="mdi mdi-lock text-primaryColor text-xl border-white border-2 pl-2"></span>
      <input className="border-primaryColor border-10 rounded-md w-full h-8 outline-none" type="password" placeholder="Password"/>
      
    </div>
    <div className="remember-forget pt-8 pl-2 flex justify-between">
     <div className="flex gap-x-1"><input type="checkbox" className="pl-2"/><label className="text-gray-300" >Remember me</label></div> 
      <Link to="/fogetpassword" className="text-gray-300">Forget Password?</Link>
    </div>
    <div className="flex justify-center">
    <button type='submit'  className="w-1/2 bg-primaryColor rounded mt-5 p-2 font-semibold text-white">Submit</button>
    </div>
 
    <div className="register-link flex justify-center pt-8">
      <p className="text-gray-300">Dont have an account? < Link to="/rgister" className="text-secondaryColor/75">register</Link></p>
    </div>
    
  </form>

</div>








      </div>
        </div>
        </div>
  );
}

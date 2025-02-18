import MobileNavBar from "../Components/Website/MobileNavBar";
import NavBar from "../Components/Website/NavBar";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Header1 from '../images/Hero.jpg'
export default function HomePage(){
    return(
        <>
          <div className="hidden lg:block">
        <NavBar />
      </div>
      <div className="lg:hidden">
        <MobileNavBar />
      </div>
      <section className="block">
      <div className="relative w-full">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div
              className="h-[500px] bg-cover bg-top flex items-center justify-center"
              style={{ backgroundImage: `url(${Header1})` }}
            >
              <div className="text-center text-gray-900">
                <label className="bg-yellow-400 text-black px-4 py-1 rounded">New Arrival</label>
                <h1 className="text-4xl font-bold mb-4">Get The Best Collection Of Hand Tools Right</h1>
                <a href="#" className="bg-black text-white px-6 py-2 rounded">Shop Now</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[500px] bg-cover bg-top flex items-center justify-center"
              style={{ backgroundImage: "url(assets/imgs/page/homepage5/banner-2.png)" }}
            >
              <div className="text-center text-gray-900">
                <label className="bg-yellow-400 text-black px-4 py-1 rounded">New Arrival</label>
                <h1 className="text-4xl font-bold mb-4">Get The Best Collection Of Hand Tools Right</h1>
                <a href="#" className="bg-black text-white px-6 py-2 rounded">Shop Now</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
        </>
    )
}
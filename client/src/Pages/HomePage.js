import MobileNavBar from "../Components/Website/MobileNavBar";
import NavBar from "../Components/Website/NavBar";
import "swiper/css";
import Header1 from '../images/Hero.jpg'
import { useContext } from "react";
import { User } from "../Context/UserContext";
export default function HomePage(){
  const context = useContext(User)
  var aya = "jsaoidjsa"
    return(
        <div className="scroll-bar">
          <div className="hidden md:block">
        <NavBar />
      </div>
      <div className="md:hidden">
        <MobileNavBar />
      </div>
      <section className="block">
      <div className="relative w-full">
        <div
          className="w-full h-full"
        >
          <div>
            <div
              className="min-h-screen flex justify-center"
              style={{ backgroundImage: `url(${Header1})`,backgroundPosition:"top",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
            >
              <div className=" md:mt-20 flex md:justify-center justify-around md:flex-row flex-col">
              <div></div>
                <div className="flex justify-center items-center w-full" >
                  <div className="md:w-2/3 w-[90%]">
                  <h1 className="md:text-6xl text-4xl text-center text-gray-700 font-bold my-4">Get The Best Collection Of Hand Tools Right</h1>
                  <div className="flex justify-center items-center">
                  <button className="bg-primaryColor text-center text-white text-xl font-semibold text-wrap mt-4 w-40 h-14 rounded-lg">Shop Now</button>
                  </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                 <div className="flex md:flex-col md:gap-y-5 gap-x-8">
                  <i className="mdi mdi-facebook text-4xl md:text-6xl text-gray-700 hover:text-primaryColor transition-colors duration-300"></i>
                  <i className="mdi mdi-whatsapp text-4xl md:text-6xl text-gray-700  hover:text-primaryColor transition-colors duration-300"></i>
                  <i className="mdi mdi-instagram text-4xl md:text-6xl text-gray-700  hover:text-primaryColor transition-colors duration-300"></i>
                 </div>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    </section>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum dicta ea doloremque incidunt enim ipsam, placeat sapiente voluptate aperiam in, aliquid adipisci minima itaque sed obcaecati autem? Earum magni placeat odit impedit excepturi nemo aspernatur laboriosam culpa dolorum, possimus tempore quam repudiandae, quae itaque officia reprehenderit ratione non ex, tenetur quisquam at qui saepe! Ipsam, distinctio facilis fugiat quam sapiente, provident consequatur hic tempore ipsum impedit numquam odit dolore laborum? Libero, perspiciatis debitis eos unde neque temporibus! Nostrum ipsum totam quas placeat. Consequatur provident veritatis quibusdam eum, enim id! Similique ea pariatur aut tenetur voluptates fuga natus vel, officiis culpa quia dolorem, eligendi harum? Soluta ea, assumenda, sequi, excepturi maiores dolorem laborum vero nihil dignissimos placeat sit corrupti itaque autem aliquam incidunt laboriosam quas saepe repudiandae inventore aut ut distinctio fugiat corporis numquam! Voluptatum, tempore! Omnis perferendis tempora itaque fugit illo mollitia incidunt ratione optio unde aliquam quia odio molestiae, adipisci quibusdam harum pariatur modi quas, amet placeat excepturi velit rerum ipsum? Fuga, vel quas. Aperiam earum soluta, autem molestias incidunt hic quis odit adipisci nam nisi, officia omnis recusandae vel vitae assumenda eos eius ab minus atque quas corrupti beatae ipsa. Necessitatibus voluptatem, amet adipisci deserunt vitae maiores assumenda dolore minus facere consequuntur est incidunt iste, provident libero sit facilis temporibus? Labore quidem tenetur porro suscipit iste facilis, veritatis distinctio corporis deserunt dolorum nemo, officiis nobis sunt tempora nisi aliquid reprehenderit esse sed vel maxime expedita id illum dolores? Harum fuga corporis minus commodi, cum tempore recusandae mollitia magnam blanditiis. Veritatis ab fugiat officiis aliquid esse quo eveniet in natus soluta labore facere molestiae, cumque, consequatur excepturi velit voluptates tempora quia reiciendis, veniam perspiciatis exercitationem iusto modi corporis odio. Modi consectetur iure ullam corporis aperiam laborum perferendis ea tenetur officiis eos delectus, aliquid voluptas fugit ad? Quam harum, at accusantium veniam commodi placeat reprehenderit voluptatibus, earum sequi fugit corrupti architecto nobis labore. Ab vitae voluptates fugit libero, dolores eum veritatis dolorum. Animi non, iste sit alias sed dolore modi optio voluptas iure laborum commodi porro? Voluptatum numquam, fugit velit ullam veritatis quod repellat iste repudiandae dolores amet at explicabo corporis quam ducimus non expedita rerum magni modi vel porro! Porro assumenda magnam doloribus blanditiis, obcaecati aut ab, sunt at, dicta voluptas nobis? Itaque, exercitationem? Animi numquam vitae nesciunt vel quod? Laudantium quam provident delectus fuga quasi eius iste voluptas, voluptates inventore natus, ducimus repellat impedit consequuntur illo odio?
        </div>
    )
}
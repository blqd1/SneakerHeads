import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation } from "swiper/modules";
const imgList = [
    {
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Schuh_Weiss_EG4958_01_standard.jpg",
        text: "qwe",
    },
    {
        img: "https://i.pinimg.com/564x/53/c4/f5/53c4f574ca795a48ca36a90dbf4b1468.jpg",
        text: "tyu",
    },
    {
        img: "https://i.pinimg.com/564x/f9/00/e2/f900e2e424ff64f2bd77fcf9a50ad195.jpg",
        text: "tyu342",
    },
    {
        img: "https://i.pinimg.com/564x/43/b7/ee/43b7eef90d4a52874d96cabd8298dbc2.jpg",
        text: "tyu54325",
    },
    {
        img: "https://i.pinimg.com/564x/74/2f/28/742f28fb71848d6edadaa907073699b0.jpg",
        text: "tyu312`312",
    },
];

const MainSwiper = () => {
    return (
        <Swiper
            modules={[Navigation]}
            loop={true}
            slidesPerView={1}
            effect={"fade"}
            navigation={{
                enabled: true,
            }}
            className="w-full h-140 bg-gray-300"
        >
            {imgList.map((item, index) => (
                <SwiperSlide key={index} className="relative">
                    <div className="absolute inset-0 bg-cover bg-center">
                        <img
                            src={item.img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover opacity-95"
                        />
                    </div>
                    <div className="absolute flex p-10 items-start flex-col justify-end gap-5 pt-20 z-10 inset-0">
                        <span className="text-white text-6xl uppercase tracking-wider">
                            {item.text}
                        </span>
                        <button className="relative text-2xl tracking-wide border-2 border-white bg-transparent py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:bg-opacity-30 before:transition-all before:duration-300 before:content-[''] hover:tracking-widest before:hover:scale-x-100">
                            shop it!
                        </button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MainSwiper;

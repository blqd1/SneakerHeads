import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import axios from "axios";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

interface imgItem {
    img: string;
    text: string;
}

const MainSwiper = () => {
    const [items, setItems] = React.useState<imgItem[]>([]);
    React.useEffect(() => {
        axios
            .get("https://13ff161a782d7bb3.mokky.dev/swiper_items")
            .then((res) => {
                setItems(res.data);
            });
    }, []);

    return items.length == 0 ? (
        "Loading"
    ) : (
        <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            effect={"fade"}
            navigation={{
                enabled: true,
            }}
            className="h-140 w-full box-border"
        >
            {items.map((item, index) => (
                <SwiperSlide key={index} className="relative">
                    <div className="absolute inset-0 bg-cover bg-center">
                        <img
                            src={item.img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-fill"
                        />
                    </div>
                    <div className="absolute flex p-10 items-start flex-col justify-end gap-5 pt-20 z-10 inset-0">
                        <span className="text-white text-7xl uppercase tracking-wider">
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

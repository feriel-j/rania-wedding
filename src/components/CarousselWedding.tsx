import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";
import "../_dist/CarousselWedding.css";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
const CarousselWedding = () => {
  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png",
  ];

  return (
    <Swiper
      modules={[Autoplay, EffectCards, Navigation, Pagination]}
      autoplay={{ delay: 3000 }}
      loop={true}
      //  navigation={true}
      pagination={{ clickable: true }}
      effect="cards"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto">
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarousselWedding;

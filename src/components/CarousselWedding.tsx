import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";
import "../_dist/CarousselWedding.css";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
const CarousselWedding = () => {
  const images = [
    "/images/image1.webp",
    "/images/image2.webp",
    "/images/image3.webp",
    "/images/image4.webp",
    "/images/image5.webp",
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
          <img src={img} loading="lazy" alt ="caroussel" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarousselWedding;

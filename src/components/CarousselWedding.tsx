// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const CarousselWedding = () => {
  // const images = [
  //   "/images/invitation.jpg",
  //   "/images/municipalite.jpg",
  //   "/images/dress.png",
  //   "/images/logorania.png",
  // ];

  return (
   <Swiper>
      <SwiperSlide>
        <img src="/photo1.jpg" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/photo2.jpg" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/photo3.jpg" />
      </SwiperSlide>
    </Swiper>

    //  <Carousel autoPlay>
    //   <div><img src="/images/invitation.jpg" /></div>
    //   <div><img src="/images/logorania.png" /></div>
    //   <div><img src="/images/dress.png" /></div>
    // </Carousel>
  );
};

export default CarousselWedding;

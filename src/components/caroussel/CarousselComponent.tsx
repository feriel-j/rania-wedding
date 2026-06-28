import React from "react";
import "../../_dist/CarousselComponent.css"
// import { useCarousel } from "../../hooks/useCarousel";

export interface CarousselComponentProps {
  children: React.ReactNode;
  autoplay?: boolean;
  interval?: number;
  hasDots?: boolean;
  hasArrows?: boolean;
}

const CarousselComponent = ({
  hasDots = true,
  hasArrows = false,
  autoplay = false,
  interval = 7000,
  children,
  ...props
}: CarousselComponentProps) => {
  //   const { currentSlide, nextSlide, prevSlide } = useCarousel();
  console.log(autoplay,interval)
  return (
    <div {...props} className="carousel-container">
      <div className="slides-container">
        <div className={`slide-carousel`}>{children}</div>
      </div>
      {hasArrows&&<div className="arrows-container">
        <p>prev</p>
        <p>next</p>
      </div>}
      {hasDots && (
        <div className="dots-container">
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default CarousselComponent;

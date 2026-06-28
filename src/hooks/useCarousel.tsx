import { useState, useEffect, useCallback } from "react";

export const useCarousel = (
  totalSlides: number,
  autoplay: boolean,
  interval: number
) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(() =>
      index < 0 ? totalSlides - 1 : index >= totalSlides ? 0 : index
    );
  }, [totalSlides]);

  useEffect(() => {
    let timeoutId: number;
    if (autoplay) {
      timeoutId = window.setTimeout(() => {
        nextSlide();
      }, interval);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [autoplay, interval, totalSlides, currentSlide]);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault(); 
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault(); 
        prevSlide();
      }
    },
    [nextSlide, prevSlide]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return { currentSlide, nextSlide, prevSlide, goToSlide };
};

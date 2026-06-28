// import React  from "react";
// import PropTypes from 'prop-types';

// import "../../_dist/EsdCompCaroussel.css";
// // import EsdCompCarousselDot from "./EsdCompCarousselDot";
// import EsdCompCarousselSlide from "./EsdCompCarousselSlide";

// import EsdCompArrowsCaroussel from "./EsdCompArrowsCaroussel";
// import EsdCompCarousselItem  from "./EsdCompCarousselItem";
// import { useCarousel } from "../../hooks/useCarousel";

// export interface EsdCompCarousselProps {
//   children: React.ReactNode;
//   autoplay?: boolean;
//   interval?: number;
// }

// const EsdCompCaroussel: React.FC<EsdCompCarousselProps> & {
//   Slide: typeof EsdCompCarousselSlide;
//   Item:typeof EsdCompCarousselItem
// } = ({
//   children,
//   autoplay = false,
//   interval = 7000,
// }) => {
//   const totalSlides = React.Children.count(children);
//   const { currentSlide, nextSlide ,prevSlide} = useCarousel(
//     totalSlides,
//     autoplay,
//     interval
//   );



//   const prevSlideIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
//   const nextSlideIndex = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    
//   return (
//     <div className="carousel-container">
//       <div className="slides-container">
//         {React.Children.map(children, (child, index) => (
          
//           <EsdCompCaroussel.Slide
//             key={index}
//             isActive={index === currentSlide}
//             isPrev={index ===prevSlideIndex }
//             isNext={index ===nextSlideIndex } 
//             onClick={() => nextSlide()}>
//             {child}
//           </EsdCompCaroussel.Slide>
          
//         ))}
//         </div>
//        <EsdCompArrowsCaroussel onNext={nextSlide} onPrev={prevSlide}/>
//     </div>
//   );
// };

// EsdCompCaroussel.Slide = EsdCompCarousselSlide
// EsdCompCaroussel.Item = EsdCompCarousselItem
// export default EsdCompCaroussel;


// // PropTypes validation
// EsdCompCaroussel.propTypes = {
//   children: (props, propName, componentName) => {
//     const prop = props[propName];
//     if (prop == null) {
//       return new Error(`${propName} is required in ${componentName}`);
//     }
//     let error: Error | null = null;
//     React.Children.forEach(prop, child => {
//       if (error) {
//         return;
//       }
//       if (typeof child !== 'object' || !('type' in child)) {
//         error = new Error(
//           `${propName} in ${componentName} is expected to be a single ReactNode or an array of ReactNodes`
//         );
//       }
//     });
//     return error;
//   },
//   // children:PropTypes.node.isRequired,
//   autoplay: PropTypes.bool,
//   interval: PropTypes.number,
  
// };



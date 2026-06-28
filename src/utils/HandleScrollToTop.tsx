// import {  RefObject } from "react";

import { RefObject } from "react";



export function useScrollToTop() {

  const scrollToTop = (ref:RefObject<HTMLElement>|null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return scrollToTop;
}

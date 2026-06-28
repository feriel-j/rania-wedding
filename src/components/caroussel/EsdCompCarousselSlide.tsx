// EsdCompCarousselSlide.tsx
import React from "react";
import "../../_dist/EsdCompCarousselSlide.css";

export interface EsdCompCarousselSlideProps {
  isActive: boolean;
  children: React.ReactNode;
  isPrev: boolean;
  isNext: boolean;
  onClick: () => void;
}

const EsdCompCarousselSlide: React.FC<EsdCompCarousselSlideProps> = ({
  isActive,
  isPrev,
  isNext,
  children,
  onClick,
}: EsdCompCarousselSlideProps) => {

  return (
    <div
      className={`slide-carousel ${isActive ? "active-slide":""} ${isPrev ? "previous-slide" :""} ${isNext?"next-slide":""}
      `}
      onKeyDown={onClick}
      onClick={() => onClick}>
      <div className="slide-content" onClick={onClick}>
        {children}
      </div>
    </div>
  );
};

export default EsdCompCarousselSlide;

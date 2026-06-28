// EsdCompCarousselDot.tsx
import React from "react";
import "../../_dist/EsdCompCarousselDot.css";

export interface EsdCompCarousselDotProps {
  isActive: boolean;
  onClick: () => void;
}

const EsdCompCarousselDot: React.FC<EsdCompCarousselDotProps> = ({
  isActive,
  onClick
}: EsdCompCarousselDotProps) => {
  return (
    <span
      className={`dot-carousel ${isActive ? "active-dot" : ""}`}
      onClick={onClick}
    ></span>
  );
};

export default EsdCompCarousselDot;

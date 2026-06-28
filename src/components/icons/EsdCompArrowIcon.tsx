import React, { SVGProps } from "react";
import "../../_dist/Icon.css";

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  id?: string;
}

const EsdCompArrowIcon = ({ ...props }: ArrowIconProps) => {
  return (
    <svg
      {...props}
      className={`icon-container ${
        props.className ? props.className : ""
      } direction-${props.direction ? props.direction : "down"} `}
      width="1em"
      height="1em"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.22662 7.9011L5.69888 3.81047C5.59791 3.69338 5.40347 3.69338 5.30142 3.81047L1.77369 7.9011C1.64263 8.05364 1.7608 8.27708 1.97242 8.27708H9.02789C9.23951 8.27708 9.35767 8.05364 9.22662 7.9011Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EsdCompArrowIcon;

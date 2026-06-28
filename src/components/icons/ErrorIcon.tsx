import React from "react";
import "../../_dist/Icon.css";

interface ErrorIconProps extends React.SVGProps<SVGSVGElement> {
  id?: string;
}

const ErrorIcon = ({ ...props }: ErrorIconProps) => {
  return (
    <svg
      {...props}
      className={`icon-container  ${props.className ? props.className : ""}`}
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 30 30">
      <path
        fill="currentColor"
        d="M15 30C6.715 30 0 23.285 0 15S6.716 0 15 0c8.285 0 15 6.716 15 15 0 8.285-6.715 15-15 15m0-3a12 12 0 1 0 0-24 12 12 0 0 0 0 24m0-14.121 4.242-4.243 2.122 2.122L17.121 15l4.244 4.242-2.123 2.122L15 17.121l-4.242 4.244-2.122-2.123L12.879 15l-4.243-4.242 2.122-2.122z"></path>
    </svg>
  );
};

export default ErrorIcon;

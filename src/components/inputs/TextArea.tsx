import React from "react";
import "../../_dist/Input.css";

interface TextareaProps extends React.AllHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
}
const TextArea = ({ ...props }: TextareaProps) => {
  return (
    <textarea
      tabIndex={0}
      {...props}
      className={
        props.className
          ? `contact-input-container ${props.className}`
          : "contact-input-container"
      }
      placeholder={props.placeholder}></textarea>
  );
};

export default TextArea;

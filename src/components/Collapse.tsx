import React, { useState } from "react";
import EsdCompArrowIcon from "./icons/EsdCompArrowIcon";
import "../_dist/Collapse.css";

interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  question:string;
  answer:string
}
const Collapse = ({ ...props }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div {...props} className="collapse-container" onClick={handleChange}>
      <div className="head">
        <p className="question-p"> {props.question} </p>
        <EsdCompArrowIcon className={isOpen? "opened":"closed"} />
      </div>
      {isOpen && (
        <p className={isOpen?"reponse-p oponed-res" : "closed-res"}> {props.answer}
         
        </p>
      )}
    </div>
  );
};

export default Collapse;

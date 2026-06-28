import React from "react";
// import "../../_dist/EsdCompCarousselItem.css";

export interface EsdCompCarousselItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children:string;
  heading?:string;
}

 const EsdCompCarousselItem:React.FC<EsdCompCarousselItemProps> = ({ ...props }) => {
 
  //--------------------------------------------------------------
  return <div {...props}><div className="left-side"></div>
  <div className="center-side">
    <img src={props.children} alt="" />
  </div></div>;
};

export default EsdCompCarousselItem;

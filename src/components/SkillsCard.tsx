import React from "react";
import "../_dist/SkillsCard.css";

interface SkillsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  items?: string[];
  children: React.ReactNode;
  id?: string;
}

const SkillsCard = ({ items, ...props }: SkillsCardProps) => {
  return (
    <div
      {...props}
      className={`skills-card-container ${props.className && props.className}`}>
      <h1>{props.title}</h1>
      <ul>
        {items && items.map((el: string, key) => <li key={key}>{el}</li>)}
      </ul>
    </div>
  );
};

export default SkillsCard;

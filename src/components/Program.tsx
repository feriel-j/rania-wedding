import React from "react";
import "../_dist/Program.css";
import DividerComponent from "./DividerComponent";
import ButtonPrimary from "./buttons/ButtonPrimary";
import BirdIcon from "./icons/BirdIcon";
import TimeIcon from "./icons/TimeIcon";

const Program = () => {
  return (
    <section className="program-container">
      <DividerComponent />
      <h1>Notre programme</h1>
      <p>من بداية الحكاية إلى نعمٍ لا تنتهي، هذا هو برنامج فرحتنا</p>

      <div className="carte-ceremonie">
              <BirdIcon />

        <h1>30-07-2026</h1>
        <h2>Municipalité de Gabes</h2>
        <h3>17:30</h3>
        <TimeIcon />
        <p>Signature du contrat de mariage et Réception</p>
      </div>

      <a
        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Signature%20du%20contrat%20de%20mariage%20de%20Rania%20et%20Alaeddine&dates=20260730T165000Z/20260730T175000Z&location=Municipalit%C3%A9%20de%20Gab%C3%A8s&details=Signature%20du%20contrat%20de%20mariage%20de%20Rania%20et%20Alaeddine"
        target="_blank"
        rel="noopener noreferrer">
        <ButtonPrimary>Ajouter à Google Calendar</ButtonPrimary>
      </a>
      <DividerComponent />
    </section>
  );
};

export default Program;

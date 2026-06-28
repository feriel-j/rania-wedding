import React from "react";
import "../_dist/AskComponent.css";
import DividerComponent from "./DividerComponent";
import Collapse from "./Collapse";

const AskComponent = () => {
  return (
    <section className="ask-container">
      <DividerComponent />
      <h1>Questions & Réponses</h1>

      <Collapse question="Où se trouve exactement le lieu ?" answer="La cérémonie sera à Gabes. Vous trouverez l'emplacement exact dans la
          section 'Lieu de l'événement' ci-dessous." />
          
      <Collapse question="Est-ce que je peux venir accompagné(e) ?" answer="Oui, bien sûr, vous pouvez venir avec des invités. Nous serons ravis de vous accueillir." />
    </section>
  );
};

export default AskComponent;

import React from "react";
import "../_dist/HeroWeddingCard.css";
const HeroWeddingCard = () => {
  return (
    <header className="hero-wedding-container">
      <video preload="metadata" autoPlay loop src="rania-vid.mp4" poster="/thumbs.png"/>
  
      <div className="overlay-content">
        <h3>
          على بعد خطوة من واقعٍ حلمنا به… عقد قراننا قريب، ووجودكم يكمل هذه
          الخطوة
        </h3>
        <h4>Vous etes invités à la signature du contrat de mariage de </h4>
        <h1>Alaeddine Ghanay</h1>
        <h1 className="span">&</h1>
        <h1>Rania Chaieb</h1>
        <div className="date section">
          <div className="divider"></div>
          <h2>30 Juillet 2026 </h2>
          <div className="divider"></div>
        </div>
      </div>
    </header>
  );
};

export default HeroWeddingCard;

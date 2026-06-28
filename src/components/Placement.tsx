import React from "react";
import DividerComponent from "./DividerComponent";
import ButtonPrimary from "./buttons/ButtonPrimary";
import "../_dist/Placement.css"

const Placement = () => {
  return (
    <div className="placement-container">
      <DividerComponent />
      <h1>Lieu de L'évenement</h1>
      <p>نلتقي بكم في أجواء من الفرح، وذلك في</p>
      <div className="carte-lieu">
        <img src="./images/municipalite.jpg" alt="بلدية قابس" />
        <main> <p>قصر البلدية بقابس</p>
        <a href="https://maps.app.goo.gl/hUHW1bXgLURFr7fZA" target="_blank" rel="noopener noreferrer"> <ButtonPrimary className="placement-btn"> Voir sur la carte</ButtonPrimary></a></main>
       
        
      </div>
    </div>
  );
};

export default Placement;

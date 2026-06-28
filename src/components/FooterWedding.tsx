import React from "react";
import "../_dist/FooterWedding.css"
import DividerComponent from "./DividerComponent";
const FooterWedding = () => {
  return (
    <section className="footer-container">
        <DividerComponent/>
      <h1>Notre Contrat de Mariage</h1>
      <h3>Invitation de mariage Numerique - 2026</h3>
      <p className="paragraphe-speciale">
        Conçu avec amour pour célébrer l'union de notre chère mariée Rara et de
        notre cher marié Alaeddine.
      </p>
      <h2 className="phrase-amour">Célébrons l'amour • 30 juillet 2026</h2>
      <p className="copyright">© 2026 Feriel J. All rights reserved.</p>
    </section>
  );
};

export default FooterWedding;

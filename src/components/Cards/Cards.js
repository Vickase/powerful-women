import React from "react";
import AmazingWoman from "./imagenes/Wonder_Woman-large.jpg";
import "./Cards.css";
import WomenInfo from "./womenInfo/womenInfo";
const Cards = () => {
  return (
    <div className="card-wrapper" style={{
        backgroundImage: `url(${AmazingWoman})`,
        backgroundSize: "cover",
        backgroundPosition:"center"
      }}>
      <section className="info-section">
        <WomenInfo></WomenInfo>
      </section>
    </div>
  );
};
export default Cards;

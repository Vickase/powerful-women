import React from "react";
import WomenInfo from "./WomenInfo";

import "./index.css";

const Card = (props) => {
  return (
    <div
      className="card-wrapper"
      style={{
        backgroundImage: `url(${props.imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <section className="info-section">
        <WomenInfo title={props.title} subtitle={props.subtitle} info={props.info} />
      </section>
    </div>
  );
};

export default Card;

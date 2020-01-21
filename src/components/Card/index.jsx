import React from "react";
import WomenInfo from "./WomenInfo";
import { ReactComponent as Plus } from "./plus.svg";

import "./index.css";

const Card = props => {
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
        <WomenInfo
          title={props.title}
          subtitle={props.subtitle}
          info={props.info}
        />
        <div className="plus-container">
          {" "}
          <Plus className="plus" src={Plus} onClick={clickear} />
        </div>
      </section>
    </div>
  );
};

export default Card;

const clickear = event => {
  event.currentTarget.parentElement.parentElement.classList.toggle("agrandar");
};

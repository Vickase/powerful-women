import React from "react";
import "./index.css";


const PowerfulWomenInfo = props => {
  return (
    <div>
      <header className="title">
        <p className="sub">{props.subtitle}</p>
        <h2 className="H2">{props.title}</h2>
      </header>
      <article className="articulo">
        <p className="card-content">{props.info}</p>
      </article>
    </div>
  );
};

export default PowerfulWomenInfo;

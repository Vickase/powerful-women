import React from "react";
import "./index.css";
/* 
const PowerfulWomenInfo = (props) => {
  return (
    <div>
      <header className="title">
        <p className="sub">Powerful Women</p>
        <h2 className="H2">Wonder Woman</h2>
      </header>
      <article className="articulo">
        <p className="card-content">
          Diana Prince is the most recognizable female superhero in the world.
          Her debut film Wonder Woman is the highest grossing superhero origin
          film of all time. Created in 1941 and beloved for over 76 years, Diana
          Prince is a strong, compassionate role model for men and women
          everywhere.
        </p>
      </article>
    </div>
  );
}; */

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

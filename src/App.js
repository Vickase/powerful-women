import React from "react";
import "./App.css";
import Card from "./components/Card";
import imageSrcWonder from "./images/Wonder_Woman-large.jpg";

const wonderWoman = {
  img: imageSrcWonder,
  title: "Wonder Woman",
  subtitle: "Powerful Women",
  info:
    "Diana Prince is the most recognizable female superhero in the world.Her debut film Wonder Woman is the highest grossing superhero origin film of all time. Created in 1941 and beloved for over 76 years, Diana Prince is a strong, compassionate role model for men and women everywhere."
};

function App() {
  return (
    <Card
      imageSrc={imageSrcWonder}
      title={wonderWoman.title}
      subtitle={wonderWoman.subtitle}
      info={wonderWoman.info}
    />
  );
}

export default App;

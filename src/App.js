import React from "react";
import "./App.css";
import Card from "./components/Card";
import imageSrcWonder from "./images/Wonder_Woman-large.jpg";

const wonderWoman = {
  img: imageSrcWonder,
  title: "asdasd",
  subtitle: "qqqqq",
  info: "LA INFOOOOOOO"
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

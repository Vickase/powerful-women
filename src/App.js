import React from "react";
import "./App.css";
import Card from "./components/Card";
import imageSrcWonder from "./images/Wonder_Woman-large.jpg";
import imageSrcLeia from "./images/Leia_Organa.png";
import imageSrcLara from "./images/laraCroft.png";


/* 
function App() {
  return (
    <Card
      imageSrc={imageSrcWonder}
      title={wonderWoman.title}
      subtitle={wonderWoman.subtitle}
      info={wonderWoman.info}
    />
  );
} */

function App(){
  const powerfulWomen = [
    {
      img: imageSrcWonder,
      title: "Wonder Woman",
      subtitle: "Powerful Women",
      info:
        "Diana Prince is the most recognizable female superhero in the world.Her debut film Wonder Woman is the highest grossing superhero origin film of all time. Created in 1941 and beloved for over 76 years, Diana Prince is a strong, compassionate role model for men and women everywhere."
    },
    {
      img: imageSrcLeia,
      title: "General Leia Organa",
      subtitle: "Powerful Women",
      info:
        "Leia is the most powerful female figurehead in the Star Wars franchise. This year she will take her final bow in Star Wars: The Last Jedi, as fans celebrate actress Carrie Fisher’s legacy one last time."
    },
    {
      img:imageSrcLara,
      title:"Lara Croft",
      subtitle:"Powerful Women",
      info:"This powerhouse of strength, smarts, and beauty is not to be trifled with. After the recent reboot of her 20-year-old video game franchise Tomb Raider, Lara is headed to the big screen next year for even greater adventures."
    }
  
  ];
  return(
  <div className="container">
    {powerfulWomen.map(woman=>{
      return(
        <Card title={woman.title} subtitle={woman.subtitle} imageSrc={woman.img} info={woman.info}></Card>
      )
    })}
  </div>)
}

export default App;

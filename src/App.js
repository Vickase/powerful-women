import React from "react";
import "./App.css";
import Card from "./components/Card";

import imageSrcWonder from "./images/Wonder_Woman-large.jpg";
import imageSrcLeia from "./images/Leia_Organa.png";
import imageSrcLara from "./images/laraCroft.png";
import imageStorm from "./images/storm.jpg";
import imagenCptnMarvel from "./images/captainMarvel.jpg";


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
    },
    {
      img:imageStorm,
      title:"Storm",
      subtitle:"Powerful Women",
      info:"There's so many X-Men offerings, that we had to narrow this down, but Storm was always going to make the list. Ororo Munroe is one amazing mutant, a queen, goddess and top fighter, she has it all. She also rocks any X-suit they put her in. She's one of the core X-Men, never far from the franchise roster. Importantly, Storm was also a mentor to a lot of the newer X-Men entrants. She's now headmistress at the school and leader of the new team."
    },
      {
      img:imagenCptnMarvel,
      title:"Captain Marvel",
      subtitle:"Powerful Women",
      info:"Danvers posee fuerza y durabilidad sobrehumanas, puede volar a seis veces la velocidad del sonido, conservar su sentido adicional, y puede descargar ráfagas explosivas de energía radiante, las que dispara de sus dedos/ manos. También demuestra la habilidad de absorber otras formas de energía, como la electricidad, para ampliar aún más su fuerza y su proyección de energía. Hasta la fuerza de una explosión nuclear. Cuando se apodera lo suficiente, puede soportar una presión de 92 toneladas y golpear con fuerza similar, a pesar de que Hank Pym teorizó que esto probablemente no es su límite."
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

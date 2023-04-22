import React, { useState } from "react";
import mrspock from "../img/Spock.webp";
import capkirk from "../img/kirk.webp";
import drbones from "../img/bones.jpg";
import ltuhura from "../img/Uhura.webp";
import gorn from "../img/gorn.webp";
import khan from "../img/khan.webp";
import klingon from "../img/klingon.jpg";
import romulan from "../img/romulan.webp";
import beam from "../sounds/Beam.mp3";

import "../estilos.css";
import Mesa from "./Mesa";
import Contender from "./Contender";

const Players = () => {
  const [personaje, setpersonaje] = useState("");
  
  const [adversario, setadversario] = useState("");
  
  const [nombre, setnombre] = useState("");
  const [nombre2, setnombre2] = useState("");
  const beamer = new Audio(beam);
 
  
  

  const enemy = () => {
    const rand = Math.floor(Math.random() * 4) + 1;

    switch (rand) {
      case 1:
        return (
          setadversario(khan),
          
          
          setnombre2("KHAN")
        );
      case 2:
        return (
          setadversario(klingon),
          
        
          setnombre2("KLINGON")
        );
      case 3:
        return (
          setadversario(romulan),
          
          
          setnombre2("ROMULAN")
        );
      case 4:
        return (
          setadversario(gorn),
          
         
          setnombre2("GORN")
        );
      default:
        break;
    }
  };

  const Hide = () => {
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("wrapper2").style.display = "none";
    document.getElementById("winners").style.visibility = "visible";
  };
  

  return (
    <div className="App-body">
      <div className="contenedor">
        <div
          className="
        wrapper"
          id="wrapper"
        >
          <div>
            <h2
              style={{
                fontFamily: "tng",
                color: "	#FFD700",
                textShadow:
                  " 1.5px 1.5px 1.5px black,3px 3px 3px white ,4px 4px 8px black",
                letterSpacing: 1,
              }}
            >
              SPOCK
            </h2>
            <button
              className="tarjeta "
              onClick={() => {
                setpersonaje(mrspock);
                
                setnombre("SPOCK");
                enemy();
                Hide();
                beamer.play();
              }}
            >
              <img id="spock" className="imgcard " src={mrspock} />
            </button>
          </div>
          <div>
            <h2
              style={{
                fontFamily: "tng",
                color: "	#FFD700",
                textShadow:
                  " 1.5px 1.5px 1.5px black,3px 3px 3px white ,4px 4px 8px black",
                letterSpacing: 1,
              }}
            >
              KIRK
            </h2>
            <button
              className="tarjeta"
              onClick={() => {
                setpersonaje(capkirk);
                
                enemy();
                Hide();
                setnombre("KIRK");
                beamer.play();
              }}
            >
              <img className="imgcard" src={capkirk} alt="" />
            </button>
          </div>
          <div>
            <h2
              style={{
                fontFamily: "tng",
                color: "	#FFD700",
                textShadow:
                  " 1.5px 1.5px 1.5px black,3px 3px 3px white ,4px 4px 8px black",
                letterSpacing: 1,
              }}
            >
              BONES
            </h2>
            <button
              className="tarjeta"
              onClick={() => {
                setpersonaje(drbones);
                
                enemy();
                Hide();
                setnombre("BONES");
                beamer.play();
              }}
            >
              <img className="imgcard" src={drbones} alt="" />
            </button>
          </div>
          <div>
            <h2
              style={{
                fontFamily: "tng",
                color: "	#FFD700",
                textShadow:
                  " 1.5px 1.5px 1.5px black,3px 3px 3px white ,4px 4px 8px black",
                letterSpacing: 1,
              }}
            >
              UHURA
            </h2>
            <button
              className="tarjeta"
              onClick={() => {
                setpersonaje(ltuhura);
                
                enemy();
                Hide();
                setnombre("UHURA");
                beamer.play();
              }}
            >
              <img className="imgcard" src={ltuhura} alt="" />
            </button>
          </div>
        </div>
        <div className="wrapper2" id="wrapper2">
          <div>
            <h3 className="adverse">KHAN</h3>
            <button className="tarjeta">
              <img className="imgcard" src={khan} alt="" />
            </button>
          </div>
          <div>
            <h3 className="adverse">KLINGON</h3>
            <button className="tarjeta">
              <img className="imgcard" src={klingon} alt="" />
            </button>
          </div>
          <div>
            <h3 className="adverse">ROMULAN</h3>
            <button className="tarjeta">
              <img className="imgcard" src={romulan} alt="" />
            </button>
          </div>
          <div>
            <h3 className="adverse">GORN</h3>
            <button className="tarjeta">
              <img className="imgcard" src={gorn} alt="" />
            </button>
          </div>
        </div>
        <br />
      </div>

      

      <Mesa
        heroe={personaje}
        enemigo={adversario}
        name={nombre}
        name2={nombre2}
        
      />
      <Contender 
      heroe={personaje}
      enemigo={adversario}
      name={nombre}
      name2={nombre2}
      
      />
    </div>
  );
};

export default Players;

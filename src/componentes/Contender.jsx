import React from 'react';
import "../estilos.css";

import aboard from "../sounds/aboard.mp3";

const Contender = ({heroe,enemigo,name,name2}) => {

    const beamup = new Audio(aboard);
    const Hide2 = () => {
        document.getElementById("winners").style.display = "none";
        document.getElementById("mesa-cont").style.visibility = "visible";
      };
  return (
    <div>
        <div className="winners" id="winners">
          <div className="beamup">
            <h2
              style={{
                fontFamily: "tng",
                color: "	#FFD700",
                textShadow: "2px 2px 6px gray ,2px 2px 8px black",
                fontSize: 80,
                marginTop: -50,
                letterSpacing: 1,
              }}
            >
              {name}
            </h2>
            <img className=" tarjeta win" src={heroe} alt="" />
          </div>
          <button
            className="boton"
            onClick={() => {
              setTimeout(Hide2, 2000);
              beamup.play();
            }}
          >
            ENERGIZE!
          </button>
          <div className="beamup">
            <h2 className="adverse1">{name2}</h2>
            <img className=" tarjeta win" src={enemigo} alt="" />
          </div>
        </div>
      </div>
  )
}

export default Contender
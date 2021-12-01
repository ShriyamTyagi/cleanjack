import React from "react";
import "./AboutUs.css";
export const AboutUs = () => {
  return (
    <div className="home">
      <div className="info">
        <div className="infoHeader">
          <p>Mijin Rayon</p>
          <p>Week 36</p>
        </div>
        <div className="table">
          <div className="column">
            <div className="btns">
              <button>Filter</button>
              <input placeholder="Naam" />
            </div>
            <p>Pand(sublocative)</p>
            <p>Pand A</p>
            <p>Anton de kom - kleinschalig wonen [service order nummer]</p>
            <p>Anton de kom - kleinschalig wonen [service order nummer]</p>
            <p>Pand A</p>
            <p>Builtenveldert - kleinschalig wonen [service order nummer]</p>
          </div>
          <div className="column">
            <input placeholder="Type" />
            <p>Type</p>
            <p>SM#</p>
            <p>SM#</p>
            <p>SM#</p>
          </div>
          <div className="column">
            <input placeholder="Adres" />
            <p>Adres</p>
            <p>Anton De Komplein 10/ 3e</p>
            <p>Anton De Komplein 10/ 2e</p>
            <p>Doomburg 2</p>
          </div>
          <div className="column">
            <input placeholder="Contact" />
            <p>Contact</p>
            <p>020-3830654</p>
            <p>020-3830654</p>
            <p>020-5046000</p>
          </div>
          <div className="column">
            <input placeholder="Naam" />
            <p>Medewerkers</p>
            <p>3</p>
            <p>10</p>
            <p>4</p>
          </div>
          <div className="column">
            <p>Budget (contracturen)</p>
            <p>100 uur</p>
            <p>200 uur</p>
            <p>60 uur</p>
          </div>
          <div className="column">
            <p>Ingiroostered (geplande uren medewerkers)</p>
            <p>20 uur</p>
            <p>180 uur</p>
            <p>40 uur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

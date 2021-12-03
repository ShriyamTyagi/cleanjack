import React, { useDebugValue } from "react";
import "./AboutUs.css";
export const AboutUs = () => {
  return (
    <div className="home">      
      <div className="info">
        <div className="infoHeader">
          <p className="user-name">Mijin Rayon</p>
          <p className="week">Week 36</p>
        </div>
        {/* <div className="table">
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
        </div> */}

        <div className="table-resposniev tableFixHead">
          <table className="">
            <thead>
              <tr>
                <th>
                  <div className="d-flex">
                    <button className="filter-button">
                      Filter
                    </button>
                    <input placeholder="Name" />
                  </div>
                </th>

                <th>
                  <div className="d-flex">
                    <input placeholder="Type" className="type" />
                  </div>
                </th>

                <th>
                  <div className="d-flex">
                    <input placeholder="Address" className="address" />
                  </div>
                </th>

                <th>
                  <div className="d-flex">
                    <input placeholder="Contact"  className="contact-input"/>
                  </div>
                </th>

                <th>               
                  <div className="d-flex">
                    <input placeholder="Name" />
                  </div>
                </th>

                <th>
                  
                </th>

                <th>
                  
                </th>
              </tr>
              <tr className="first-row">
                <td>
                  <b>pand</b>(subtitle)
                </td>

                <td className="type">
                  <b>Type</b>
                </td>

                <td>
                  <b>Address</b>
                </td>

                <td>
                  <b>Contact</b>
                </td>

                <td>
                  <b>Medewerkers</b>
                </td>

                <td>
                  <div>
                  <b>Budget</b><br/>
                  (contracturen)
                  </div>
                </td>

                <td>
                  <div>
                  <b>Ingiroostered</b><br/>
                  (graplande uren Medewerkers)
                  </div>
                </td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan="7" className="border-bottom-gray">

                </td>
              </tr>
              <tr className="tr-heading">
                <td colSpan="7">
                  Pand A
                </td>
              </tr>

              <tr>
                <td>
                  <div>
                    <span>
                      Anton de kom - kleinschalig wonen
                    </span><br/>
                    <span>
                      [service order nummer]
                    </span>
                  </div>
                </td>

                <td className="">
                  SM#
                </td>

                <td>
                Anton de komplein 10/ 3e
                </td>

                <td>
                020-3830654 
                </td>

                <td>
                  3
                </td>

                <td>
                  100 uur
                </td>

                <td>
                  100 uur >
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <span>
                      Anton de kom - kleinschalig wonen
                    </span><br/>
                    <span>
                      [service order nummer]
                    </span>
                  </div>
                </td>

                <td className="">
                  SM#
                </td>

                <td>
                Anton de komplein 10/ 3e
                </td>

                <td>
                020-3830654 
                </td>

                <td>
                  3
                </td>

                <td>
                  100 uur
                </td>

                <td>
                  100 uur >
                </td>
              </tr>
              <tr className="tr-heading">
                <td colSpan="7">
                  Pand B
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <span>
                    Buitenveldert- kleinschalig wonen
                    </span><br/>
                    <span>
                      [service order nummer]
                    </span>
                  </div>
                </td>

                <td className="">
                  SM#
                </td>

                <td>
                  Doornburg 2
                </td>

                <td>
                020-3830654 
                </td>

                <td>
                  3
                </td>

                <td>
                  100 uur
                </td>

                <td>
                  100 uur >
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pagination-section d-flex align-items-center justify-content-between">
            <div>
              1 tot 25 van 61 resultaten
            </div>

            {/* <div>
              <nav aria-label="...">
                <ul class="pagination">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

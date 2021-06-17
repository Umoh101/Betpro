import React from "react";
import "./Home.css";
import Modal1 from "./Modal1";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="container">
      <div className="homeImage">
        <div className="homeColor">
          <svg
            className="rool"
            xmlns="http://www.w3.org/2000/svg"
            width="150.60"
            height="150.60"
            viewBox="0 0 358.983 359.328"
          >
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(1.467 -160.135)"
            >
              <g
                id="Rectangle_1"
                data-name="Rectangle 4"
                transform="matrix(0.719, -0.695, 0.695, 0.719, -1.467, 331.716)"
                fill="#130808"
                stroke="#707070"
                stroke-width="1"
              >
                <rect width="247" height="261" stroke="none" />
                <rect x="0.5" y="0.5" width="246" height="260" fill="none" />
              </g>
              <text
                id="Gembox1"
                transform="translate(40 357)"
                fill="#e1b31d"
                font-size="66"
                font-family="OpenSans-Semibold, Open Sans"
                font-weight="600"
              >
                <tspan x="0" y="0">
                  Gembox
                </tspan>
              </text>
            </g>
          </svg>

          <Modal1 />

          <Footer color="rgb(45, 47, 59, 0.7)" />
        </div>
      </div>
    </div>
  );
}

export default Home;

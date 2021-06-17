import React from "react";
import "./Footer.css";
import Image1 from "./42.jpg";

type COLOR_Check = {
  color: String,
};

const Footer = ({color}: COLOR_Check) => {
  return (
    <div className="footer_content">
      <div
        className="footer_content1"
        style={{
          backgroundColor: color,
          border: "2px solid goldenrod",
        }}
      >
        <div className="image-content">
          <img alt="" src={Image1} className="image_view" />

          <p className="text_footer">Emmanuel John Nsikak</p>
        </div>

        <div className="copyright">
          <svg
            className="contain"
            xmlns="http://www.w3.org/2000/svg"
            width="50%"
            height="50%"
            viewBox="0 0 358.983 359.328"
          >
            <g
              id="Group_4"
              data-name="Group 4"
              transform="translate(1.467 -160.135)"
            >
              <g
                id="Rectangle_4"
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
                id="Gembox4"
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

          <p className="name"> copyright @ 2021 Gembox </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

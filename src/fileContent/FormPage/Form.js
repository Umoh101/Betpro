import React, {useState} from "react";
import {Link} from "react-router-dom";
import {app} from "../Firebase";
import "./Form.css";
import {Spin} from "antd";
import Footer from "../Footer/Footer";

const db = app.firestore().collection("Games");
function Form() {
  const [x, setX] = useState("x_");
  const [twelve, setTwelve] = useState("12_");
  const [Over2, setOver2] = useState("over2.5_");
  const [under2, setUnder2] = useState("under2.5_");
  const [GG, setGG] = useState("gg_");
  const [NG, setNG] = useState("ng_");
  const [start, setStart] = useState(false);
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState(false);

  const Uploading = async () => {
    await db.doc().set({
      Content:
        x +
        "_" +
        twelve +
        "_" +
        Over2 +
        "_" +
        under2 +
        "_" +
        GG +
        "_" +
        NG +
        "_" +
        result,
      Datenow: new Date().toDateString(),
    });
  };

  const Start = () => {
    setStart(true);
    setTimeout(() => {
      setStart(false);
      setX("x_");
      setTwelve("12_");
      setGG("gg_");
      setNG("ng_");
      setUnder2("under2.5_");
      setOver2("over2.5_");
      setResult(" ");
    }, 5000);
  };

  const FormRules = () => {
    if (
      x !== "x_" &&
      twelve !== "12_" &&
      Over2 !== "over2.5_" &&
      under2 !== "under2.5_" &&
      GG !== "gg_" &&
      NG !== "ng_"
    ) {
      setOperation(false);
      Uploading();
      Start();
    } else {
      setOperation(true);
    }
  };

  return (
    <div className="container_box">
      <div className="container-2">
        <div className="body">
          <div className="header">
            <Link to="/" className="body1">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="40%"
                height="40%"
                viewBox="0 0 358.983 359.328"
              >
                <g
                  id="Group_3"
                  data-name="Group 3"
                  transform="translate(1.467 -160.135)"
                >
                  <g
                    id="Rectangle_3"
                    data-name="Rectangle 4"
                    transform="matrix(0.719, -0.695, 0.695, 0.719, -1.467, 331.716)"
                    fill="#130808"
                    stroke="#707070"
                    stroke-width="1"
                  >
                    <rect width="247" height="261" stroke="none" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="246"
                      height="260"
                      fill="none"
                    />
                  </g>
                  <text
                    id="Gembox3"
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
            </Link>
          </div>

          <p
            style={{
              fontSize: "25px",
              fontWeight: "bolder",
              color: "goldenrod",
              fontFamily: "cursive",
              marginTop: "-10%",
            }}
          >
            {" "}
            Form Page
          </p>

          <aside className="form">
            <div className="number1">
              <input
                placeholder="Draw"
                value={x}
                onChange={e => {
                  setX(e.target.value);
                }}
              />

              <input
                placeholder="12"
                value={twelve}
                onChange={e => {
                  setTwelve(e.target.value);
                }}
              />
            </div>

            <div className="number2">
              <input
                placeholder="over2.5"
                value={Over2}
                onChange={e => {
                  setOver2(e.target.value);
                }}
              />

              <input
                placeholder="under2.5"
                value={under2}
                onChange={e => {
                  setUnder2(e.target.value);
                }}
              />
            </div>

            <div className="number3">
              <input
                placeholder="GG"
                value={GG}
                onChange={e => {
                  setGG(e.target.value);
                }}
              />

              <input
                placeholder="NG"
                value={NG}
                onChange={e => {
                  setNG(e.target.value);
                }}
              />
            </div>

            <input
              placeholder="Result"
              value={result}
              onChange={e => {
                setResult(e.target.value);
              }}
            />

            <button
              type="submit"
              className="button"
              onClick={e => {
                FormRules();
                e.preventDefault();
              }}
            >
              {start === true ? (
                <Spin
                  style={{
                    fontSize: 20,
                    BackgroundColor: "black",
                  }}
                />
              ) : (
                "Fill"
              )}
            </button>

            {operation && (
              <span
                style={{
                  color: "red",
                }}
              >
                All content is Required !
              </span>
            )}
          </aside>

          <Footer color="rgb(144, 144, 144, 0.7)" />
        </div>
      </div>
    </div>
  );
}

export default Form;

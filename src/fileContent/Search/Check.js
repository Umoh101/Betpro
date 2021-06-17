import React, {useState, useEffect} from "react";
import "./Check.css";
import {app} from "../Firebase";
import {Link} from "react-router-dom";
import CardContent from "./CardContent";
import {Input} from "antd";
import {SearchOutlined, AmazonCircleFilled} from "@ant-design/icons";
import Footer from "../Footer/Footer.js";

function Check() {
  const db = app.firestore().collection("Games");
  const [data1, setData1] = useState([]); // or you do it these way new Array()
  const [search, setSearch] = useState("");

  //get CRUD method
  const GetData = async () => {
    await db.orderBy("Datenow", "desc").onSnapshot(snapshot => {
      const info = []; // or you do it these way new Array()
      snapshot.forEach(doc => {
        info.push({...doc.data(), id: doc.id});
      });
      setData1(info);
    });
  };

  const ContentApi = data1
    // eslint-disable-next-line array-callback-return
    .filter(val => {
      if (search === "") {
        return val;
      } else if (val.Content.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    })
    .map(({Content, Datenow, id}) => (
      <CardContent id={id} title={Content} Datenow={Datenow} />
    ));

  const value = 180 * ContentApi.length;

  useEffect(() => {
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="Box"
      style={{
        height: ContentApi.length < 5 ? "200vh" : value,
      }}
    >
      <div className="Box1">
        <div className="searchBar">
          <Link to="/">
            <svg
              className="rotate"
              xmlns="http://www.w3.org/2000/svg"
              width="90.60"
              height="90.60"
              viewBox="0 0 358.983 359.328"
            >
              <g
                id="Group_2"
                data-name="Group 2"
                transform="translate(1.467 -160.135)"
              >
                <g
                  id="Rectangle_2"
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
                  id="Gembox2"
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

          <div className="input_box">
            <Input
              className="searchBar1"
              placeholder="Search"
              value={search}
              onChange={e => {
                setSearch(e.target.value);
              }}
              required=""
              prefix={
                <SearchOutlined
                  style={{
                    height: "50px",
                    width: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "20px",
                    opacity: 0.6,
                  }}
                />
              }
              style={{
                outline: "none",
              }}
            />
          </div>
        </div>

        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {ContentApi.length > 0 ? (
            ContentApi
          ) : (
            <p
              style={{
                fontSize: "100%",
                color: "goldenrod",
                fontWeight: "bolder",
              }}
            >
              {" "}
              Oop's No Content !..{" "}
              <AmazonCircleFilled
                style={{
                  fontSize: "30px",
                }}
                className="Icon"
              />{" "}
            </p>
          )}
        </div>

        <Footer color=" rgb(165, 120, 7)" />
      </div>
    </div>
  );
}

export default Check;

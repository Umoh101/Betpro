import React from "react";
import {Card} from "antd";
import "./CardContent.css";
import {
  CodeSandboxOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import {app} from "../Firebase";

const db = app.firestore().collection("Games");
function CardContent({
  title,
  id,
  Datenow,
}: {
  title: String,
  id: String,
  Datenow: String,
}) {
  const showDeleteConfirm = async id => {
    await db.doc(id).delete();
  };

  return (
    <div className="card_display" key={id}>
      <Card
        size="small"
        title={
          <p
            style={{
              fontFamily: "cursive",
              fontWeight: "bolder",
              height: "10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <CodeSandboxOutlined spin />
            Code_Number
            <ExclamationCircleOutlined
              style={{
                color: "red",
              }}
              onClick={() => showDeleteConfirm(id)}
            />
          </p>
        }
        hoverable={true}
        className="card_display1"
      >
        <p className="text_card"> {title} </p>

        <p className="datenow">Date: {Datenow} </p>
      </Card>
    </div>
  );
}

export default CardContent;

import React from "react";
import {useHistory} from "react-router-dom";
import {Button} from "antd";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Modal1() {
  const hist = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="button" onClick={handleOpen}>
        Home
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal_box"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(45, 47, 59, 0.7)",
        }}
      >
        <Fade in={open} style={{height: "100%", width: "100%"}}>
          <div
            style={{
              height: "100px",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => {
                hist.push("/Form");
              }}
              className="button2"
              style={{
                height: "50px",
                width: "150px",
                borderRadius: "5px",
                fontSize: "large",
                fontFamily: "cursive",
                border: "3px solid rgb(45, 47, 59)",
                backgroundColor: "transparent",
                fontWeight: 600,
                cursor: "pointer",
                outline: "none",
                margin: "50px",
                color: "goldenrod",
              }}
            >
              {" "}
              Fill Code{" "}
            </Button>

            <Button
              className="button1"
              onClick={() => {
                hist.push("/Check");
              }}
              style={{
                height: "50px",
                width: "150px",
                borderRadius: "5px",
                fontSize: "large",
                fontFamily: "cursive",
                border: "3px solid rgb(45, 47, 59)",
                backgroundColor: "transparent",
                fontWeight: 600,
                cursor: "pointer",
                outline: "none",
                margin: "50px",
                color: "goldenrod",
              }}
            >
              {" "}
              Check Code{" "}
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

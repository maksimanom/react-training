import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Portal from "../portal";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  portalModal: {
    width: 100,
    backgroundColor: "#FF7355",
    borderRadius: 5,
    textAlign: "center",
    zIndex: 1200,
    position: "fixed",
  },
}));
const Modal = () => {
  const classes = useStyles();
  const [portalIsShowing, setPortalIsShowing] = React.useState();
  const [mousePos, setMousePos] = React.useState({ xPos: 0, yPos: 0 });
  const handleClick = (e) => {
    e.preventDefault();
    setMousePos({ xPos: e.clientX, yPos: e.clientY });
    setPortalIsShowing(true);
  };

  return (
    <div onContextMenu={handleClick} className={classes.root}>
      Open your own right-click menu (with Modal)
      {portalIsShowing ? (
        <Portal>
          <div
            className={classes.portalModal}
            style={{
              left: `${mousePos.xPos - 50}px`,
              top: `${mousePos.yPos}px`,
            }}
          >
            Custom Portal
          </div>
        </Portal>
      ) : null}
    </div>
  );
};
export default Modal;

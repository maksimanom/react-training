import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById("portal-modal")
  );
};

export default Portal;

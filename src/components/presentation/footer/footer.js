import React from "react";
import "./footer.css";
import { footerText } from "../../../constants";

const Footer = () => {
  return (
    <div className="footercontainer">
      <h3 className="footertext">{footerText}</h3>
    </div>
  );
};

export default Footer;

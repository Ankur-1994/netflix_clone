import React from "react";
import * as constants from "../../../constants";
import "./topBar.css";
import NetflixLogo from "../../../assets/netflixLogo.png";

const TopBar = () => {
  const constant = constants.homeView;
  return (
    <div className="topbar">
      <img src={NetflixLogo} alt="netflixlogo" className="logo" />
      <button className="signbutton">
        <span className="buttontext"> {constant.signIn}</span>
      </button>
    </div>
  );
};

export default TopBar;

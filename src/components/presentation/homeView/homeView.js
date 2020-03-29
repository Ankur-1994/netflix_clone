import React from "react";
import "./homeView.css";
import homeImg from "../../../assets/homeview.jpg";
import * as constants from "../../../constants";
import TopBar from "../topBar/topBar";
import { Link } from "react-router-dom";

const HomeView = () => {
  const constant = constants.homeView;
  return (
    <div>
      <img src={homeImg} alt="home" className="homeimg" />
      <div className="homeblock">
        <TopBar />
        <div className="homeblock_content">
          <h1 className="card_title">{constant.title}</h1>
          <h2 className="card_subtitle">{constant.subtitle}</h2>
          <Link to="/dasboard">
            <button className="trybutton">
              <span className="buttontext"> {constant.tryText}</span>
              <i className="right"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeView;

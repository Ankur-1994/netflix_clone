import React, { useEffect } from "react";
import DashboardTopBar from "../dashboardTopBar/dashboardTopBar";
import Trailer from "../../../assets/trailer.mp4";
import "./landingPage.css";
import { trailer } from "../../../constants";

const LandingPage = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const videoDom = document.querySelector(".trailerStyle");
      if(videoDom) {
        if (window.scrollY > 200) {
          videoDom.pause();
        } else {
          videoDom.play();
        }
      }
      
    });
  });
  return (
    <>
      <DashboardTopBar />
      <div className="trailercontainer">
        <h1 className="trailertext">{trailer.trailertext}</h1>
        <button className="btnplay">{trailer.play}</button>
        <button className="btnlist">{trailer.list}</button>
        <p className="overview">{trailer.overview}</p>
        <p className="overview">
          {trailer.Starring}
          <br />
          {trailer.Creators}
        </p>
      </div>
      <video className="trailerStyle" autoPlay playsInline loop>
        <source src={Trailer} type="video/mp4" />
      </video>
    </>
  );
};

export default LandingPage;

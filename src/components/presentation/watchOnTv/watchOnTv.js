import React from "react";
import { watchOnTv } from "../../../constants";
import "./watchOnTv.css";

const WatchOnTv = () => {
  return (
    <div className="watchontv">
      <div className="container">
        <div className="tv_text">
          <h1 className="watchtvtitle">{watchOnTv.title}</h1>
          <h2 className="watchtvsubtitle">{watchOnTv.subtitle}</h2>
        </div>

        <div className="imgContainer">
          <div className="animation">
              <img className="image" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="watchImg" />
              <div className="movie">
                  <video className="video" autoPlay playsinline muted loop>
                      <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"></source>
                  </video>
              </div>
          </div>
      </div>
      </div>
     
    </div>
  );
};

export default WatchOnTv;

import React from "react";
import { download } from "../../../constants";
import "./downloadSection.css";

const DownloadSection = () => {
  return (
    <div className="downloadandwatch">
      <div className="container">
        <div className="imgcontainer">
          <div className="downloadanimation">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              className="animationImg"
              alt="animationImg"
            />
            <div className="cardanimation">
              <div className="cardanimationimg">
                <img
                className="imgstyle"
                  alt="cardanimationimg"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                />
              </div>
              <div className="cardanimationtext">
                <div className="text_0">{download.animationTitle}</div>
                <div className="text_1">{download.download}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="textsection">
          <h1 className="title">{download.title}</h1>
          <h2 className="subtitle">{download.subtitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;

import React from "react";
import { watchOnDevice } from "../../../constants";
import "./watchOnDevice.css";

const WatchOnDevice = () => {
  return (
    <div className="watchondevice">
      <div className="watch_container">
        <div className="devicetext">
          <h1 className="devicetitle">{watchOnDevice.title}</h1>
          <h2 className="devicesubtitle">{watchOnDevice.subtitle}</h2>
        </div>
        <div className="deviceImgContainer">
            <div className="animationContainer">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="deviceimg" className="deviceimg" />
                <div className="animationvideo"> 
                    <video className="video" autoPlay playsinline muted loop>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                    </video>
                </div> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default WatchOnDevice;

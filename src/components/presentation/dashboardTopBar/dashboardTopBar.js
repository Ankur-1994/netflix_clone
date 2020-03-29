import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import "./dashboardTopBar.css";
import Logo from "../../../assets/netflixLogo.png";

const DashboardTopBar = () => {
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 40) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    })
  return (
    <div className={isScroll ? `navigation black`: "navigation"}>
      <ul className="navigation_container">
        <Link className="link" to="/">
          <img className="link_logo" src={Logo} alt="logo" />
        </Link>
        <Link to="/">
          <div className="pseudo_link">Home</div>
        </Link>
        <div className="pseudo_link">TV Shows</div>
        <div className="pseudo_link">Movies</div>
        <div className="pseudo_link">Recently Added</div>
        <div className="pseudo_link">My List</div>

        <div className="container_left">
          <svg
            className="searchlogo"
            width="251px"
            height="251px"
            viewBox="0 0 251 251"
            version="1.1"
          >
            <title>Slice 1</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="musica-searcher" fill="#FFFFFF" fillRule="nonzero">
                <path
                  d="M244.186,214.604 L189.807,160.226 C189.518,159.937 189.179,159.735 188.877,159.466 C199.577,143.235 205.822,123.806 205.822,102.912 C205.822,46.075 159.747,0 102.911,0 C46.075,0 0,46.075 0,102.911 C0,159.746 46.074,205.822 102.91,205.822 C123.805,205.822 143.233,199.577 159.464,188.877 C159.733,189.178 159.934,189.517 160.223,189.806 L214.603,244.186 C222.772,252.354 236.016,252.354 244.186,244.186 C252.354,236.017 252.354,222.773 244.186,214.604 Z M102.911,170.146 C65.777,170.146 35.675,140.044 35.675,102.911 C35.675,65.777 65.778,35.675 102.911,35.675 C140.043,35.675 170.146,65.778 170.146,102.911 C170.146,140.044 140.043,170.146 102.911,170.146 Z"
                  id="Shape"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <input
          className="input"
          type="text"
          placeholder="Title, genres, people"
        />
        <div className="pseudo_link">KIDS</div>
        <div className="pseudo_link">DVD</div>

        <svg
          className="bellLogo"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 459.334 459.334"
          xmlSpace="preserve"
          width="512px"
          height="512px"
        >
          <g>
            <g>
              <g>
                <path
                  d="M175.216,404.514c-0.001,0.12-0.009,0.239-0.009,0.359c0,30.078,24.383,54.461,54.461,54.461     s54.461-24.383,54.461-54.461c0-0.12-0.008-0.239-0.009-0.359H175.216z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M403.549,336.438l-49.015-72.002c0-22.041,0-75.898,0-89.83c0-60.581-43.144-111.079-100.381-122.459V24.485     C254.152,10.963,243.19,0,229.667,0s-24.485,10.963-24.485,24.485v27.663c-57.237,11.381-100.381,61.879-100.381,122.459     c0,23.716,0,76.084,0,89.83l-49.015,72.002c-5.163,7.584-5.709,17.401-1.419,25.511c4.29,8.11,12.712,13.182,21.887,13.182     H383.08c9.175,0,17.597-5.073,21.887-13.182C409.258,353.839,408.711,344.022,403.549,336.438z"
                  fill="#FFFFFF"
                ></path>
              </g>
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>

        <div className="dropdowncontainer">
          <div className="userlogo">
            <div className="dropdown_content">
              <div className="usr">
                <div className="user_1"></div>
                <p className="user_txt">Ankur</p>
              </div>
              <div className="usr">
                <div className="user_2"></div>
                <p className="user_txt">Atul</p>
              </div>
              <div className="usr">
                <div className="user_3"></div>
                <p className="user_txt">Guest</p>
              </div>
              <p className="manage">Manage Profiles</p>
              <span className="separator" />
              <p className="manage">Accounts</p>
              <p className="manage">Help Center</p>
              <p className="manage">Sign out</p>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default DashboardTopBar;

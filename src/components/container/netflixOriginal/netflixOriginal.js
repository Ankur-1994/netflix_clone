import React, { Component } from "react";
import {
  GRID_IMAGE_SIZE,
  IMAGE_BASE_URL,
  NETFLIX_ORIGINAL
} from "../../../constants";
import { elementInViewport } from "../../../utils";
import "./netflixOriginal.css";

class NetflixOriginal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      netflix_original: props.netflix_original,
      slideValue: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.netflix_original !== nextProps.netflix_original) {
      this.setState({ netflix_original: nextProps.netflix_original });
    }
  }

  leftSlider = () => {
    const leftElement = document.getElementById("tile_0");
    if (leftElement) {
      const isLeftInViewport = elementInViewport(leftElement);
      if (!isLeftInViewport) {
        this.setState({ slideValue: this.state.slideValue + 350 });
      }
    }
  };

  rightSlider = () => {
    const idx = this.state.netflix_original.length - 1;
    const id = `tile_${idx}`;
    const rightElement = document.getElementById(id);
    if (rightElement) {
      const isLeftInViewport = elementInViewport(rightElement);
      if (!isLeftInViewport) {
        this.setState({ slideValue: this.state.slideValue - 350 });
      }
    }
  };

  openModal = el => {
    // const elem = document.getElementById(el);
    var modal = document.getElementById(el);
    modal.style.display = "block";
  };

  closeModal = el => {
    var modal = document.getElementById(el);
    modal.style.display = "none";
  };
  render() {
    const { netflix_original, slideValue } = this.state;

    // http://image.tmdb.org/t/p/w780/lP5eKh8WOcPysfELrUpGhHJGZEH.jpg
    const IMG_URL = `${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}`;
    const POSTER_URL = `${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}`;
    const displayGridImage = () =>
      netflix_original.map((data, index) => {
        return (
          <>
            <span
              className="tile"
              id={`tile_${index}`}
              key={data.id}
              onClick={() => this.openModal(data.id)}
            >
              <div className="tile-img">
                <img
                  className="tile-img"
                  src={`${IMG_URL}${data.poster_path}`}
                  alt={`${data.id}`}
                />
              </div>
            </span>
            <div id={data.id} className="modal">
              <div
                className="modal-content"
                style={{
                  background: `linear-gradient(90deg, #000 55%, rgba(0,0,0,0.733), transparent),url(${POSTER_URL}${data.poster_path})`
                }}
              >
                <span
                  className="close"
                  onClick={() => this.closeModal(data.id)}
                >
                  &times;
                </span>
                <h1 className="modal_title">{data.title}</h1>
                <p className="model_info">
                  <span className="modal_rating">{`Rating: ${data.vote_average} / 10`}</span>
                  <span className="modal_release">{`Release date: ${data.release_date}`}</span>
                </p>
                <p className="modal__overview">{data.overview}</p>
                <button className="modal_btn_red">Play</button>
                <button className="modal_btn_list">My list</button>
              </div>
            </div>
          </>
        );
      });
    return (
      <>
        <h1 className="netflix_container">{NETFLIX_ORIGINAL}</h1>
        <div className="list-container">
          <span
            className="left-controls"
            role="button"
            onClick={() => this.leftSlider()}
          >
            {" "}
          </span>
          <div className="module-section clearfix">
            <ul
              id="content"
              style={{ marginLeft: `${slideValue}px`, transition: "all .5s" }}
            >
              <div className="listrow">{displayGridImage()}</div>
            </ul>
          </div>
          <span
            className="right-controls"
            role="button"
            onClick={() => this.rightSlider()}
          >
            {" "}
          </span>
        </div>
      </>
    );
  }
}

export default NetflixOriginal;

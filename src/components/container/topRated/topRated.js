import React, { Component } from "react";
import "./topRated.css";
import { GRID_IMAGE_SIZE, IMAGE_BASE_URL, TOP_RATED } from "../../../constants";
import { elementInViewport } from "../../../utils";

class TopRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top_rated: props.top_rated,
      slideValue: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.top_rated !== nextProps.top_rated) {
      this.setState({ top_rated: nextProps.top_rated });
    }
  }

  leftSlider = () => {
    const leftElement = document.getElementById("top_0");
    if (leftElement) {
      const isLeftInViewport = elementInViewport(leftElement);
      console.log(isLeftInViewport)
      if (!isLeftInViewport) {
        this.setState({ slideValue: this.state.slideValue + 350 });
      }
    }
  };

  rightSlider = () => {
    const idx = this.state.top_rated.length - 1;
    const id = `top_${idx}`;
    const rightElement = document.getElementById(id);
    if (rightElement) {
      const isLeftInViewport = elementInViewport(rightElement);
      if (!isLeftInViewport) {
        this.setState({ slideValue: this.state.slideValue - 350 });
      }
    }
  };
  render() {
    const { top_rated, slideValue } = this.state;

    // http://image.tmdb.org/t/p/w780/lP5eKh8WOcPysfELrUpGhHJGZEH.jpg
    const IMG_URL = `${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}`;
    const displayGridImage = () =>
      top_rated.map((data, index) => {
        return (
          <a className="top_tile" id={`top_${index}`} href="#" key={data.id}>
            <div className="top_tile-img">
              <img
                className="top_tile-img"
                src={`${IMG_URL}${data.poster_path}`}
                alt={`${data.id}`}
              />
            </div>
          </a>
        );
      });
    return (
      <>
        <h1 className="top_container">{ TOP_RATED }</h1>
        <div className="top_list-container">
          <span
            className="lcontrols"
            role="button"
            onClick={() => this.leftSlider()}
          >
            {" "}
          </span>
          <div className="top_module-section clearfix">
            <ul
              id="content"
              style={{ marginLeft: `${slideValue}px`, transition: "all .5s" }}
            >
              <div className="top_listrow">{displayGridImage()}</div>
            </ul>
          </div>
          <span
            className="rcontrols"
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

export default TopRated;

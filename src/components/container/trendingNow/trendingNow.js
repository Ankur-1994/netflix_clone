import React, { Component } from "react";
import "./trendingNow.css";
import { GRID_IMAGE_SIZE, IMAGE_BASE_URL, TRENDING_NOW } from "../../../constants";
import { elementInViewport } from "../../../utils";

class TrendingNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trending_now: props.trending_now,
      slideValue: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.trending_now !== nextProps.trending_now) {
      this.setState({ trending_now: nextProps.trending_now });
    }
  }

  leftSlider = () => {
    const leftElement = document.getElementById("trending_0");
    if (leftElement) {
      const isLeftInViewport = elementInViewport(leftElement);
      console.log(isLeftInViewport)
      if (!isLeftInViewport) {
        this.setState({ slideValue: this.state.slideValue + 350 });
      }
    }
  };

  rightSlider = () => {
    const idx = this.state.trending_now.length - 1;
    const id = `trending_${idx}`;
    const rightElement = document.getElementById(id);
    if (rightElement) {
      const isLeftInViewport = elementInViewport(rightElement);
      if (!isLeftInViewport) {
        this.setState({ slideValue: this.state.slideValue - 350 });
      }
    }
  };
  render() {
    const { trending_now, slideValue } = this.state;

    // http://image.tmdb.org/t/p/w780/lP5eKh8WOcPysfELrUpGhHJGZEH.jpg
    const IMG_URL = `${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}`;
    const displayGridImage = () =>
      trending_now.map((data, index) => {
        return (
          <a className="trending_tile" id={`trending_${index}`} href="#" key={data.id}>
            <div className="trending_tile-img">
              <img
                className="trending_tile-img"
                src={`${IMG_URL}${data.poster_path}`}
                alt={`${data.id}`}
              />
            </div>
          </a>
        );
      });
    return (
      <>
        <h1 className="trending_container">{TRENDING_NOW}</h1>
        <div className="trending_list-container">
          <span
            className="lcontrols"
            role="button"
            onClick={() => this.leftSlider()}
          >
            {" "}
          </span>
          <div className="trending_module-section clearfix">
            <ul
              id="content"
              style={{ marginLeft: `${slideValue}px`, transition: "all .5s" }}
            >
              <div className="trending_listrow">{displayGridImage()}</div>
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

export default TrendingNow;

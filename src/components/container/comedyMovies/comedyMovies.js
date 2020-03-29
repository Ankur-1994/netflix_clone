import React, { Component } from "react";
import "./comedyMovies.css";
import {
  GRID_IMAGE_SIZE,
  IMAGE_BASE_URL,
  COMEDY_MOVIE
} from "../../../constants";
import { elementInViewport } from "../../../utils";

class ComedyMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comedy_movie: props.comedy_movie,
      slideValue: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.comedy_movie !== nextProps.comedy_movie) {
      this.setState({ comedy_movie: nextProps.comedy_movie });
    }
  }

  leftSlider = () => {
    const leftElement = document.getElementById("comedy_0");
    if (leftElement) {
      const isLeftInViewport = elementInViewport(leftElement);
      console.log(isLeftInViewport);
      if (!isLeftInViewport) {
        this.setState({ slideValue: this.state.slideValue + 350 });
      }
    }
  };

  rightSlider = () => {
    const idx = this.state.comedy_movie.length - 1;
    const id = `comedy_${idx}`;
    const rightElement = document.getElementById(id);
    if (rightElement) {
      const isLeftInViewport = elementInViewport(rightElement);
      if (!isLeftInViewport) {
        this.setState({ slideValue: this.state.slideValue - 350 });
      }
    }
  };
  render() {
    const { comedy_movie, slideValue } = this.state;

    // http://image.tmdb.org/t/p/w780/lP5eKh8WOcPysfELrUpGhHJGZEH.jpg
    const IMG_URL = `${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}`;
    const displayGridImage = () =>
      comedy_movie.map((data, index) => {
        return (
          <a
            className="comedy_tile"
            id={`comedy_${index}`}
            href="#"
            key={data.id}
          >
            <div className="comedy_tile-img">
              <img
                className="comedy_tile-img"
                src={`${IMG_URL}${data.poster_path}`}
                alt={`${data.id}`}
              />
            </div>
          </a>
        );
      });
    return (
      <>
        <h1 className="comedy_container">{COMEDY_MOVIE}</h1>
        <div className="comedy_list-container">
          <span
            className="lcontrols"
            role="button"
            onClick={() => this.leftSlider()}
          >
            {" "}
          </span>
          <div className="comedy_module-section clearfix">
            <ul
              id="content"
              style={{ marginLeft: `${slideValue}px`, transition: "all .5s" }}
            >
              <div className="comedy_listrow">{displayGridImage()}</div>
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

export default ComedyMovie;

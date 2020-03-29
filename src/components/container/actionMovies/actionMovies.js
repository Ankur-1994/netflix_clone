import React, { Component } from "react";
import "./actionMovies.css";
import {
  GRID_IMAGE_SIZE,
  IMAGE_BASE_URL,
  ACTION_MOVIE
} from "../../../constants";
import { elementInViewport } from "../../../utils";

class ActionMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action_movies: props.action_movies,
      slideValue: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.action_movies !== nextProps.action_movies) {
      this.setState({ action_movies: nextProps.action_movies });
    }
  }

  leftSlider = () => {
    const leftElement = document.getElementById("action_0");
    if (leftElement) {
      const isLeftInViewport = elementInViewport(leftElement);
      console.log(isLeftInViewport);
      if (!isLeftInViewport) {
        this.setState({ slideValue: this.state.slideValue + 350 });
      }
    }
  };

  rightSlider = () => {
    const idx = this.state.action_movies.length - 1;
    const id = `action_${idx}`;
    const rightElement = document.getElementById(id);
    if (rightElement) {
      const isLeftInViewport = elementInViewport(rightElement);
      if (!isLeftInViewport) {
        this.setState({ slideValue: this.state.slideValue - 350 });
      }
    }
  };
  render() {
    const { action_movies, slideValue } = this.state;

    // http://image.tmdb.org/t/p/w780/lP5eKh8WOcPysfELrUpGhHJGZEH.jpg
    const IMG_URL = `${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}`;
    const displayGridImage = () =>
      action_movies.map((data, index) => {
        return (
          <a
            className="action_tile"
            id={`action_${index}`}
            href="#"
            key={data.id}
          >
            <div className="action_tile-img">
              <img
                className="action_tile-img"
                src={`${IMG_URL}${data.poster_path}`}
                alt={`${data.id}`}
              />
            </div>
          </a>
        );
      });
    return (
      <>
        <h1 className="action_container">{ACTION_MOVIE}</h1>
        <div className="action_list-container">
          <span
            className="lcontrols"
            role="button"
            onClick={() => this.leftSlider()}
          >
            {" "}
          </span>
          <div className="action_module-section clearfix">
            <ul
              id="content"
              style={{ marginLeft: `${slideValue}px`, transition: "all .5s" }}
            >
              <div className="action_listrow">{displayGridImage()}</div>
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

export default ActionMovies;

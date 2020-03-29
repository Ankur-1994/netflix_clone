import React, { Component } from "react";
import LandingPage from "../landingPage/landingPage";
import NetflixOriginal from "../../container/netflixOriginal/netflixOriginal";
import TrendingNow from "../../container/trendingNow/trendingNow";
import TopRated from "../../container/topRated/topRated";
import ActionMovies from "../../container/actionMovies/actionMovies";
import ComedyMovie from "../../container/comedyMovies/comedyMovies";
import Footer from "../footer/footer";
import {
  API_URL,
  API_KEY
} from "../../../constants";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    // https://api.themoviedb.org/3/trending/all/day?api_key=962db181d413817b8ab26a4e9e2367cd
    const url = `${API_URL}trending/all/day?api_key=${API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({ data: response.results });
      })
      .catch(err => console.error(err));
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <LandingPage />
        <NetflixOriginal netflix_original={data}/>
        <TrendingNow trending_now={data}/>
        <TopRated top_rated={data} />
        <ActionMovies action_movies={data} />
        <ComedyMovie comedy_movie={data} />
        <Footer />
      </>
    );
  }
}

export default Dashboard;

export const homeView = {
  signIn: "Sign In",
  title: "Unlimited movies, TV shows and more.",
  subtitle: "Watch anywhere. Cancel anytime.",
  tryText: "Try it Now"
};

export const watchOnTv = {
  title: "Enjoy on your TV.",
  subtitle:
    "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
};

export const download = {
  title: "Download your shows to watch on the go.",
  subtitle: "Save your data and watch all your favourites offline.",
  animationTitle: "Stranger Things",
  download: "Downloading..."
};

export const watchOnDevice = {
  title: "Watch everywhere.",
  subtitle:
    "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
};

export const footerText = "© 2020 Made with ❤️ by Kumar Ankur";

export const trailer = {
  trailertext: "Sacred Games 2",
  play: "Play",
  list: "My List",
  overview:
    "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.",
  Starring: "Starring: Saif Ali Khan,Nawazuddin Siddiqui,Pankaj Tripathi",
  Creators: "Creators: Vikramaditya Motwane"
};

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=9f1ffd64abd4bde18614fd9087d87d71

export const API_URL = "https://api.themoviedb.org/3/";
export const API_KEY = "962db181d413817b8ab26a4e9e2367cd";

// Images
// An image URL looks like this example:
// http://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

export const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
export const GRID_IMAGE_SIZE = "w500";
export const POSTER_SIZE = 'w780';

export const NETFLIX_ORIGINAL = 'Netflix Original';
export const TRENDING_NOW = 'Trending Now';
export const TOP_RATED = 'Top Rated';
export const ACTION_MOVIE = 'Action Movies';
export const COMEDY_MOVIE = 'Comedy Movies';

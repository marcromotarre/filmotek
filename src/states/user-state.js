import { atom } from "recoil";
import CHIPS from "../data/chips";
import PLATFORMS from "../data/platforms";
import POSTERS from "../data/posters";
import RANKING_PLATFORMS from "../data/ranking-platforms";

export const userPlatformsState = atom({
  key: "userPlatforms",
  default: {
    NETFLIX: false,
    HBO: false,
    AMAZON_PRIME_VIDEO: false,
    DISNEY: false,
    APPLE: false,
    FILMIN: false,
  },
});

export const userRankingPlatformsState = atom({
  key: "userRankingPlatforms", // unique ID (with respect to other atoms/selectors)
  default: {
    ranking_platform: null,
    FILMAFFINITY: {
      minimum_rating_value: 0,
      minimum_votes_value: 0,
    },
    IMDB: {
      minimum_rating_value: 0,
      minimum_votes_value: 0,
    },
    ROTTEN_TOMATOES: {
      minimum_rating_value: 0,
      minimum_votes_value: 0,
    },
  },
});

export const userChipState = atom({
  key: "userChip",
  default: null,
});

export const userPosterState = atom({
  key: "userPoster",
  default: null,
});


export const jwtState = atom({
  key: "jwt",
  default: null,
});


//export const BASE_URL = "http://localhost:3005/"
export const BASE_URL = "https://movies-api-lxas.onrender.com/"
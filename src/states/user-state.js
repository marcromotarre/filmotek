import { atom } from "recoil";
import PLATFORMS from "../data/platforms";
import POSTERS from "../data/posters";
import RANKING_PLATFORMS from "../data/ranking-platforms";

export const userPlatformsState = atom({
  key: "userPlatforms", // unique ID (with respect to other atoms/selectors)
  default: PLATFORMS,
});

export const userRankingPlatformsState = atom({
  key: "userRankingPlatforms", // unique ID (with respect to other atoms/selectors)
  default: RANKING_PLATFORMS,
});

export const userPostersState = atom({
  key: "userPosters", // unique ID (with respect to other atoms/selectors)
  default: POSTERS,
});

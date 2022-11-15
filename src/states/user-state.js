import { atom } from "recoil";
import PLATFORMS from "../data.js/platforms";
import POSTERS from "../data.js/posters";

export const userPlatformsState = atom({
  key: "userPlatforms", // unique ID (with respect to other atoms/selectors)
  default: PLATFORMS,
});

export const userPostersState = atom({
  key: "userPosters", // unique ID (with respect to other atoms/selectors)
  default: POSTERS,
});

import { Box } from "@mui/material";
import { relative } from "path";
import FilmaffinityBasicChip from "../components/chips/filmaffinity-basic-chip";
import ImdbBasicChip from "../components/chips/imdb-basic-chip";
import RottenTomatoesBasicChip from "../components/chips/rotten-tomatoes-basic-chip";
import RottenTomatoesTomatometerChip from "../components/chips/rotten-tomatoes-tomatometer-chip";
import RottenTomatoesAudienceChip from "../components/chips/rotten-tomatoes-audience-chip";

import BorderPoster from "../components/posters/border-poster";
import RoundedPoster from "../components/posters/rounded-poster";

export const getChipsByTag = (tag) => {
  return CHIPS.filter((chip) => chip.tags.includes(tag));
};
const CHIPS = [
  {
    name: "NO_CHIP",
    component: ({ poster, styles, name, image }) => {
      return (
        <Box sx={{ ...styles, position: "relative" }}>
          {poster.component({ styles: styles?.posterStyle, name, image })}
        </Box>
      );
    },
    selected: false,
    tags: ["FILMAFFINITY", "IMDB", "ROTTEN_TOMATOES"],
  },

  {
    name: "BASIC_CHIP",
    component: ({ poster, styles, name, image, rating }) => {
      return (
        <Box sx={{ ...styles, position: "relative" }}>
          {poster.component({ styles: styles?.posterStyle, name, image })}
          <FilmaffinityBasicChip
            rating={rating % 1 != 0 ? rating : `${rating}.0`}
          />
        </Box>
      );
    },
    selected: false,
    tags: ["FILMAFFINITY"],
  },
  {
    name: "BASIC_CHIP",
    component: ({ poster, styles, name, image, rating }) => {
      return (
        <Box sx={{ ...styles, position: "relative" }}>
          {poster.component({ styles: styles?.posterStyle, name, image })}
          <ImdbBasicChip rating={rating % 1 != 0 ? rating : `${rating}.0`} />
        </Box>
      );
    },
    selected: false,
    tags: ["IMDB"],
  },
  {
    name: "BASIC_CHIP_AUDIENCE",
    component: ({
      poster,
      styles,
      name,
      image,
      allAudiencePercentatge,
      tomatometerTopCriticsPrositiveReviewPercentatge,
    }) => {
      return (
        <Box sx={{ ...styles, position: "relative" }}>
          {poster.component({ styles: styles?.posterStyle, name, image })}
          <RottenTomatoesBasicChip
           tomatometerTopCriticsPrositiveReviewPercentatge={
            tomatometerTopCriticsPrositiveReviewPercentatge
          }
            allAudiencePercentatge={allAudiencePercentatge}
          />
        </Box>
      );
    },
    selected: false,
    tags: ["ROTTEN_TOMATOES"],
  },
  {
    name: "BASIC_CHIP_AUDIENCE",
    component: ({
      poster,
      styles,
      name,
      image,
      allAudiencePercentatge,
      tomatometerTopCriticsPrositiveReviewPercentatge,
    }) => {
      return (
        <Box sx={{ ...styles, position: "relative" }}>
          {poster.component({ styles: styles?.posterStyle, name, image })}
          <RottenTomatoesAudienceChip
           
            allAudiencePercentatge={allAudiencePercentatge}
          />
        </Box>
      );
    },
    selected: false,
    tags: ["ROTTEN_TOMATOES"],
  },
  {
    name: "BASIC_CHIP_TOMATOMETER",
    component: ({
      poster,
      styles,
      name,
      image,
      allAudiencePercentatge,
      tomatometerTopCriticsPrositiveReviewPercentatge,
    }) => {
      return (
        <Box sx={{ ...styles, position: "relative" }}>
          {poster.component({ styles: styles?.posterStyle, name, image })}
          <RottenTomatoesTomatometerChip
            tomatometerTopCriticsPrositiveReviewPercentatge={
              tomatometerTopCriticsPrositiveReviewPercentatge
            }
          />
        </Box>
      );
    },
    selected: false,
    tags: ["ROTTEN_TOMATOES"],
  },
];

export default CHIPS;

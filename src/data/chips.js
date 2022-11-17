import { Box } from "@mui/material";
import { relative } from "path";
import FilmaffinityBasicChip from "../components/chips/filmaffinity-basic-chip";
import ImdbBasicChip from "../components/chips/imdb-basic-chip";
import BorderPoster from "../components/posters/border-poster";
import RoundedPoster from "../components/posters/rounded-poster";

const CHIPS = [
 
  {
    name: "NO_CHIP",
    component: ({ poster, styles, name, image, rating, votes }) => {
      return (
        <Box sx={{ ...styles, position: "relative" }}>
          {poster.component({ styles: styles?.posterStyle, name, image })}
        </Box>
      );
    },
    selected: false,
    tags: ["FILMAFFINITY","IMDB","ROTTEN"]
  },
 
  {
    name: "FILMAFFINITY_BASIC_CHIP",
    component: ({ poster, styles, name, image, rating, votes }) => {
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
    tags: ["FILMAFFINITY"]
  },
  {
    name: "IMDB_BASIC_CHIP",
    component: ({ poster, styles, name, image, rating, votes }) => {
      return (
        <Box sx={{ ...styles, position: "relative" }}>
          {poster.component({ styles: styles?.posterStyle, name, image })}
          <ImdbBasicChip
            rating={rating % 1 != 0 ? rating : `${rating}.0`}
          />
        </Box>
      );
    },
    selected: false,
    tags: ["IMDB"]
  },
];

export default CHIPS;
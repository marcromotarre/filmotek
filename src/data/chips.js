import { Box } from "@mui/material";
import { relative } from "path";
import FilmaffinityBasicChip from "../components/chips/filmaffinity-basic-chip";
import BorderPoster from "../components/posters/border-poster";
import RoundedPoster from "../components/posters/rounded-poster";

const CHIPS = [
  /*{
    name: "FILMAFFINITY_BASIC_CHIP",
    component: ({ poster, styles, name, image, rating, votes }) => {
      console.log("styles in chip componet", styles, styles?.posterStyles);
      return (
        <>{poster.component({ styles: styles?.posterStyle, name, image })}</>
      );
    },
    selected: false,
  },*/
  {
    name: "FILMAFFINITY_BASIC_CHIP_1",
    component: ({ poster, styles, name, image, rating, votes }) => {
      return (
        <Box sx={{ ...styles, position: "relative" }}>
          <Box sx={{ width: "100%", height: "20px" }} />
          {poster.component({ styles: styles?.posterStyle, name, image })}
         
          <Box sx={{ width: "100%", height: "20px" }} />
        </Box>
      );
    },
    selected: false,
  },
 
  {
    name: "FILMAFFINITY_BASIC_CHIP_2",
    component: ({ poster, styles, name, image, rating, votes }) => {
      return (
        <Box sx={{ ...styles, position: "relative" }}>
          <Box sx={{ width: "100px", height: "10px" }} />
          {poster.component({ styles: styles?.posterStyle, name, image })}
          <FilmaffinityBasicChip
            rating={rating % 1 != 0 ? rating : `${rating}.0`}
          />
          <Box sx={{ width: "100%", height: "10px" }} />
        </Box>
      );
    },
    selected: false,
  },
  {
    name: "FILMAFFINITY_BASIC_CHIP_2",
    component: ({ poster, styles, name, image, rating, votes }) => {
      return (
        <Box sx={{ ...styles, position: "relative" }}>
          <Box sx={{ width: "100%", height: "20px" }} />
          {poster.component({ styles: styles?.posterStyle, name, image })}
          <FilmaffinityBasicChip
            rating={rating % 1 != 0 ? rating : `${rating}.0`}
          />
          <Box sx={{ width: "100%", height: "20px" }} />
        </Box>
      );
    },
    selected: false,
  },
  /*{
    name: "FILMAFFINITY_BASIC_CHIP_1",
    component: ({ poster, styles, name, image, rating, votes }) => {
      return (
        <>{poster.component({ styles: styles?.posterStyle, name, image })}</>
      );
    },
    selected: false,
  },
  {
    name: "FILMAFFINITY_BASIC_CHIP_2",
    component: ({ poster, styles, name, image, rating, votes }) => {
      return (
        <>{poster.component({ styles: styles?.posterStyle, name, image })}</>
      );
    },
    selected: false,
  },
  {
    name: "FILMAFFINITY_BASIC_CHIP_3",
    component: ({ poster, styles, name, image, rating, votes }) => {
      return (
        <>{poster.component({ styles: styles?.posterStyle, name, image })}</>
      );
    },
    selected: false,
  },
  /*,
  {
    name: "FILMAFFINITY_BASIC_CHIP_2",
    component: ({ poster, styles, name, image, rating, votes }) => {
      return (
        <>
          {poster.component({ name, image, styles: styles?.posterStyles })}
          <FilmaffinityBasicChip
            rating={rating % 1 != 0 ? rating : `${rating}.0`}
          />
        </>
      );
    },
    selected: false,
  },*/
];

export default CHIPS;

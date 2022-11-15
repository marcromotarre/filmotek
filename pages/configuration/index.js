import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

import NETFLIX_APP_ICON from "../../src/images/platforms/netflix/netflix-app-icon.png";
import HBO_MAX_APP_ICON from "../../src/images/platforms/hbo-max/hbo-max-app-icon.png";
import AMAZON_PRIME_VIDEO_APP_ICON from "../../src/images/platforms/amazon-prime-video/amazon-prime-video-app-icon.png";
import APPLE_TV_APP_ICON from "../../src/images/platforms/apple-tv/apple-tv-app-icon.png";
import DISNEY_PLUS_APP_ICON from "../../src/images/platforms/disney-plus/disney-plus-app-icon.png";
import FILMIN_APP_ICON from "../../src/images/platforms/filmin/filmin-app-icon.png";

const PLATFORMS = [
  { name: "NETFLIX", appIcon: NETFLIX_APP_ICON, selected: true },
  { name: "HBO", appIcon: HBO_MAX_APP_ICON, selected: false },
  {
    name: "AMAZON PRIME VIDEO",
    appIcon: AMAZON_PRIME_VIDEO_APP_ICON,
    selected: false,
  },
  { name: "DISNEY", appIcon: DISNEY_PLUS_APP_ICON, selected: false },
  { name: "APPLE", appIcon: APPLE_TV_APP_ICON, selected: false },
  { name: "FILMIN", appIcon: FILMIN_APP_ICON, selected: false },
];

const MovieGallery = () => {
  useEffect(() => {}, []);

  return (
    <Box
      sx={{
        backgroundColor: "#3d3d3d",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: "30px",
        gridTemplateColumns: "100%",
      }}
    >
      <Typography>¿Que plataformas tienes?</Typography>
      <Typography>Ver información sobre las plataformas</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            columnGap: "40px",
            rowGap: "40px",
            width: "70%",
          }}
        >
          {PLATFORMS.map((platform) => (
            <CardMedia
              key={platform.name}
              component="img"
              sx={{
                width: "100%",
                borderRadius: "15px",
                boxShadow: platform.selected
                  ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  : "",
                opacity: platform.selected ? 1 : 0.1,
              }}
              image={platform.appIcon.src}
              alt={platform.name}
            ></CardMedia>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MovieGallery;

import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import BorderPoster from "../../src/components/posters/border-poster";
import RoundedPoster from "../../src/components/posters/rounded-poster";
import ConfigSection from "../../src/components/sections/config-section";
import { MOVIE_EXAMPLE } from "../../src/data.js/movie-example";
import POSTERS from "../../src/data.js/posters";
import {
  userPlatformsState,
  userPostersState,
} from "../../src/states/user-state";

const MovieGallery = () => {
  useEffect(() => {}, []);

  const [userPlatforms, setUserPlatforms] = useRecoilState(userPlatformsState);
  const [userPosters, setUserPosters] = useRecoilState(userPostersState);
  return (
    <Box
      sx={{
        backgroundColor: "#3d3d3d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          paddingTop: "30px",
          gridTemplateColumns: "100%",
          rowGap: "20px",
        }}
      >
        <ConfigSection
          title={"¿Que plataformas tienes?"}
          subtitle={"Ver información sobre las plataformas"}
        >
          <Box>
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
                  width: "90%",
                }}
              >
                {Object.keys(userPlatforms).map((userPlatformId) => (
                  <CardMedia
                    key={userPlatforms[userPlatformId].name}
                    component="img"
                    onClick={() => {
                      setUserPlatforms({
                        ...userPlatforms,
                        [userPlatformId]: {
                          ...userPlatforms[userPlatformId],
                          selected: !userPlatforms[userPlatformId].selected,
                        },
                      });
                    }}
                    sx={{
                      width: "100%",
                      borderRadius: "15px",
                      boxShadow: userPlatforms[userPlatformId].selected
                        ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                        : "",
                      opacity: userPlatforms[userPlatformId].selected ? 1 : 0.1,
                    }}
                    image={userPlatforms[userPlatformId].appIcon.src}
                    alt={userPlatforms[userPlatformId].name}
                  ></CardMedia>
                ))}
              </Box>
            </Box>
          </Box>
        </ConfigSection>
        <ConfigSection
          title={"¿Como quieres ver los posters de las peliculas?"}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              columnGap: "30px",
            }}
          >
            {Object.keys(userPosters).map((userPosterId) => (
              <Box
                key={userPosters[userPosterId].name}
                sx={{ opacity: userPosters[userPosterId].selected ? 1 : 0.1 }}
                onClick={() => {
                  let userPostersCopy = {};
                  const userPostersCopyIds = Object.keys(userPostersCopy);
                  userPostersCopyIds.forEach((userPostersCopyId) => {
                    userPostersCopy.push({
                      name: userPostersCopyIds[userPostersCopyId].name,
                      component:
                        userPostersCopyIds[userPostersCopyId].component,
                      selected: false,
                    });
                  });
                  setUserPosters({
                    ...userPostersCopy,
                    [userPosterId]: {
                      ...userPostersCopy[userPosterId],
                      selected: true,
                    },
                  });
                }}
              >
                {userPosters[userPosterId].component({
                  name: MOVIE_EXAMPLE.name,
                  image: MOVIE_EXAMPLE.image,
                })}
              </Box>
            ))}
          </Box>
        </ConfigSection>

        <ConfigSection
          title={"¿Cual es tu motor de puntuación favorito?"}
        ></ConfigSection>
      </Box>
    </Box>
  );
};

export default MovieGallery;

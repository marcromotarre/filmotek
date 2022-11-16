import {
  Box,
  Button,
  CardMedia,
  Grid,
  Slider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import ConfigSection from "../../src/components/sections/config-section";
import ConfigSectionSlider from "../../src/components/sections/config-section-slider";
import FilmaffinitySlider from "../../src/components/sliders/filmaffinity-slider";
import { MOVIE_EXAMPLE } from "../../src/data.js/movie-example";
import { RANKING_PLATFORMS_SLIDERS } from "../../src/data.js/ranking-platforms";
import {
  userPlatformsState,
  userPostersState,
  userRankingPlatformsState,
} from "../../src/states/user-state";

const MovieGallery = () => {
  useEffect(() => {}, []);

  const [userPlatforms, setUserPlatforms] = useRecoilState(userPlatformsState);
  const [userRankingPlatforms, setUserRankingPlatforms] = useRecoilState(
    userRankingPlatformsState
  );
  const [userPosters, setUserPosters] = useRecoilState(userPostersState);


  console.log(userRankingPlatforms.find((uRP) => uRP.selected === true).name)
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
          width: "85%",
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
                  width: "95%",
                }}
              >
                {userPlatforms.map((userPlatform, index) => (
                  <CardMedia
                    key={userPlatform.name}
                    component="img"
                    onClick={() => {
                      setUserPlatforms([
                        ...userPlatforms.map((uP, uPIndex) => ({
                          ...uP,
                          selected:
                            uPIndex === index ? !uP.selected : uP.selected,
                        })),
                      ]);
                    }}
                    sx={{
                      width: "100%",
                      borderRadius: "15px",
                      boxShadow: userPlatform.selected
                        ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                        : "",
                      opacity: userPlatform.selected ? 1 : 0.1,
                    }}
                    image={userPlatform.appIcon.src}
                    alt={userPlatform.name}
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
            {userPosters.map((userPoster, posterIndex) => (
              <Box
                key={userPoster.name}
                sx={{ opacity: userPoster.selected ? 1 : 0.1 }}
                onClick={() => {
                  setUserPosters([
                    ...userPosters.map((uP, uPindex) => ({
                      ...uP,
                      selected: posterIndex === uPindex,
                    })),
                  ]);
                }}
              >
                {userPoster.component({
                  name: MOVIE_EXAMPLE.name,
                  image: MOVIE_EXAMPLE.image,
                })}
              </Box>
            ))}
          </Box>
        </ConfigSection>

        <ConfigSection title={"¿Cual es tu motor de puntuación favorito?"}>
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
                  width: "95%",
                }}
              >
                {userRankingPlatforms.map((userRankingPlatform, index) => (
                  <CardMedia
                    key={userRankingPlatform.name}
                    component="img"
                    onClick={() => {
                      setUserRankingPlatforms([
                        ...userRankingPlatforms.map((uRP, uRPindex) => ({
                          ...uRP,
                          selected: index === uRPindex,
                        })),
                      ]);
                    }}
                    sx={{
                      width: "100%",
                      borderRadius: "15px",
                      boxShadow: userRankingPlatform.selected
                        ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                        : "",
                      opacity: userRankingPlatform.selected ? 1 : 0.1,
                    }}
                    image={userRankingPlatform.appIcon.src}
                    alt={userRankingPlatform.name}
                  ></CardMedia>
                ))}
              </Box>
            </Box>
          </Box>
        </ConfigSection>
        {RANKING_PLATFORMS_SLIDERS[
          userRankingPlatforms.find((uRP) => uRP.selected === true).name
        ].map((slider, index) => (
          <ConfigSectionSlider key={index} slider={slider} />
        ))}
        <Button variant="outlined">GO TO MAIN</Button>
        <Box sx={{ paddingBottom: "400px" }}></Box>
      </Box>
    </Box>
  );
};

export default MovieGallery;

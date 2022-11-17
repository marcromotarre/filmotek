import {
  Box,
  Button,
  CardMedia,
  Grid,
  Slider,
  Typography,
} from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import BorderPoster from "../../src/components/posters/border-poster";
import ConfigSection from "../../src/components/sections/config-section";
import ConfigSectionSlider from "../../src/components/sections/config-section-slider";
import FilmaffinitySlider from "../../src/components/sliders/filmaffinity-slider";
import CHIPS from "../../src/data/chips";
import { MOVIE_EXAMPLE } from "../../src/data/movie-example";
import PLATFORMS from "../../src/data/platforms";
import POSTERS from "../../src/data/posters";
import RANKING_PLATFORMS, {
  RANKING_PLATFORMS_SLIDERS,
} from "../../src/data/ranking-platforms";
import {
  BASE_URL,
  jwtState,
  userChipState,
  userPlatformsState,
  userPosterState,
  userRankingPlatformsState,
} from "../../src/states/user-state";

const USER_PARAMS_URL = `${BASE_URL}api/user-params`;

const Configuration = () => {
  useEffect(() => {}, []);

  const [userPlatforms, setUserPlatforms] = useRecoilState(userPlatformsState);
  const [userRankingPlatforms, setUserRankingPlatforms] = useRecoilState(
    userRankingPlatformsState
  );
  const [userPoster, setUserPoster] = useRecoilState(userPosterState);
  const jwt = useRecoilValue(jwtState);
  const [userChip, setUserChip] = useRecoilState(userChipState);
  console.log(userPoster);
  return (
    <Box
      sx={{
        backgroundColor: "#3d3d3d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
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
                {PLATFORMS.map((platform, index) => (
                  <CardMedia
                    key={platform.name}
                    component="img"
                    onClick={() => {
                      axios.post(
                        USER_PARAMS_URL,
                        {
                          hasNetflix:
                            platform.name === "NETFLIX"
                              ? !userPlatforms.NETFLIX
                              : userPlatforms.NETFLIX,
                          hasHBO:
                            platform.name === "HBO"
                              ? !userPlatforms.HBO
                              : userPlatforms.HBO,
                          hasAmazonPrimeVideo:
                            platform.name === "AMAZON_PRIME_VIDEO"
                              ? !userPlatforms.AMAZON_PRIME_VIDEO
                              : userPlatforms.AMAZON_PRIME_VIDEO,
                          hasDisneyPlus:
                            platform.name === "DISNEY"
                              ? !userPlatforms.DISNEY
                              : userPlatforms.DISNEY,
                          hasAppleTV:
                            platform.name === "APPLE"
                              ? !userPlatforms.APPLE
                              : userPlatforms.APPLE,
                          hasFilmin:
                            platform.name === "FILMIN"
                              ? !userPlatforms.FILMIN
                              : userPlatforms.FILMIN,
                        },
                        {
                          headers: {
                            Authorization: `Bearer ${jwt}`,
                          },
                        }
                      );
                      setUserPlatforms({
                        ...userPlatforms,
                        [platform.name]: !userPlatforms[platform.name],
                      });
                    }}
                    sx={{
                      width: "100%",
                      borderRadius: "15px",
                      boxShadow: userPlatforms[platform.name]
                        ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                        : "",
                      opacity: userPlatforms[platform.name] ? 1 : 0.1,
                    }}
                    image={platform.appIcon.src}
                    alt={platform.name}
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
            {POSTERS.map((poster, posterIndex) => (
              <Box
                key={posterIndex}
                sx={{ opacity: userPoster === poster.name ? 1 : 0.1 }}
                onClick={() => {
                  axios.post(
                    USER_PARAMS_URL,
                    {
                      poster: poster.name,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${jwt}`,
                      },
                    }
                  );
                  setUserPoster(poster.name);
                }}
              >
                {poster.component({
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
                {RANKING_PLATFORMS.map((rankingPlantform, index) => (
                  <CardMedia
                    key={rankingPlantform.name}
                    component="img"
                    onClick={() => {
                      axios.post(
                        USER_PARAMS_URL,
                        {
                          useFilmaffinity:
                            rankingPlantform.name === "FILMAFFINITY",
                          useIMDB: rankingPlantform.name === "IMDB",
                          useRottenTomatoes:
                            rankingPlantform.name === "ROTTENTOMATOES",
                        },
                        {
                          headers: {
                            Authorization: `Bearer ${jwt}`,
                          },
                        }
                      );

                      setUserRankingPlatforms({
                        ...userRankingPlatforms,
                        ranking_platform: rankingPlantform.name,
                      });
                    }}
                    sx={{
                      width: "100%",
                      borderRadius: "15px",
                      boxShadow:
                        userRankingPlatforms.ranking_platform ===
                        rankingPlantform.name
                          ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                          : "",
                      opacity:
                        userRankingPlatforms.ranking_platform ===
                        rankingPlantform.name
                          ? 1
                          : 0.1,
                    }}
                    image={rankingPlantform.appIcon.src}
                    alt={rankingPlantform.name}
                  ></CardMedia>
                ))}
              </Box>
            </Box>
          </Box>
        </ConfigSection>
        {userRankingPlatforms.ranking_platform &&
          RANKING_PLATFORMS_SLIDERS({
            userRankingPlatforms,
            setUserRankingPlatforms,
          })[userRankingPlatforms.ranking_platform].map((slider, index) => {
            return <ConfigSectionSlider key={index} slider={slider} />;
          })}
        <ConfigSection
          title={"Configura tu chip"}
          subtitle={"¿Que es el chip?"}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "calc(40vw / 0.666 + 20px)",
          //backgroundColor: "red"
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "3000px",
            overflowX: "scroll",
          }}
        >
          {userPoster &&
            CHIPS.map((chip) => (
              <Box
                key={chip.key}
                sx={{ opacity: userChip === chip.name ? 1 : 0.1 }}
                onClick={() => {
                  axios.post(
                    USER_PARAMS_URL,
                    {
                      chip: chip.name,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${jwt}`,
                      },
                    }
                  );
                  setUserChip(chip.name);
                }}
              >
                {chip.component({
                  styles: { width: "40vw", height: "auto", marginLeft: "10px" },
                  poster: POSTERS.find((poster) => poster.name === userPoster),
                  image: MOVIE_EXAMPLE.image,
                  name: MOVIE_EXAMPLE.name,
                  rating: 8,
                  votes: 1300,
                })}
              </Box>
            ))}
        </Box>
      </Box>

      <Box sx={{ height: "40px" }}></Box>
    </Box>
  );
};

export default Configuration;

//  <BorderPoster  image={MOVIE_EXAMPLE.image} name={MOVIE_EXAMPLE.name} />

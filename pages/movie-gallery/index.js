import { Box, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import ImdbBasicChip from "../../src/components/chips/imdb-basic-chip";
import FilmaffinityBasicChip from "../../src/components/chips/filmaffinity-basic-chip";
import InfiniteScroll from "react-infinite-scroll-component";
import CHIPS, { getChipsByTag } from "../../src/data/chips";
import {
  BASE_URL,
  jwtState,
  userChipState,
  userPosterState,
  userRankingPlatformsState,
} from "../../src/states/user-state";
import { useRecoilState, useRecoilValue } from "recoil";
import POSTERS from "../../src/data/posters";

import FILMOTEK_IMAGE_ICON from "../../src/images/filmotek/filmotek-logo-main-icon.png";
import { useRouter } from "next/router";

const MovieGallery = () => {
  const router = useRouter();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(500);
  const [hasMore, setHasMore] = useState(true);
  const [token, setToken] = useState("");

  const userPoster = useRecoilValue(userPosterState);
  const jwt = useRecoilValue(jwtState);
  const userChip = useRecoilValue(userChipState);
  const userRankingPlatforms = useRecoilValue(userRankingPlatformsState);
  useEffect(() => {
    if (userPoster) {
      fetchData();
    }
  }, [userPoster]);

  console.log(userRankingPlatforms.ranking_platform)

  const fetchData = async (page = 0) => {
    setPage(page);
    const _movies = await axios(
      `${BASE_URL}movie-gallery/`,
      {
        params: {
          page,
          ranking_platform: userRankingPlatforms.ranking_platform,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    setCount(_movies.data.count);

    setMovies([...movies, ..._movies.data.data]);
    if (_movies.data.count <= [...movies, ..._movies.data.data].length) {
      setHasMore(false);
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "#3d3d3d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "30px",
      }}
    >
      <InfiniteScroll
        style={{
          display: "grid",
          gridTemplateColumns: "calc(50% - 10px) calc(50% - 10px)",
          columnGap: "20px",
          rowGap: "20px",
          width: "100%",
          overflowY: "hidden",
        }}
        dataLength={movies.length} //This is important field to render the next data
        next={() => {
          console.log("fetch data", page), fetchData(page + 1);
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {movies.map((movie) => (
          <Box
            key={movie.id}
            onClick={() => {
              router.push(`movie/${movie.id}`);
            }}
          >
            {getChipsByTag(userRankingPlatforms.ranking_platform).find((chip) => chip.name === userChip).component({
              styles: { width: "auto", height: "auto" },
              poster: POSTERS.find((poster) => poster.name === userPoster),
              image: movie.image,
              name: movie.name,
              rating: movie.platforms[Object.keys(movie.platforms)[0]].rating,
              votes: movie.platforms[Object.keys(movie.platforms)[0]].votes,
            })}
          </Box>
        ))}
      </InfiniteScroll>
      <CardMedia
        onClick={() => {
          router.push("configuration");
        }}
        component="img"
        sx={{
          position: "fixed",
          width: "100px",
          height: "100px",
          bottom: "10px",
          zIndex: "100",
        }}
        image={FILMOTEK_IMAGE_ICON.src}
        alt={"filmotek"}
      />
    </Box>
  );
};

export default MovieGallery;

// coses a fer
/*
    arreglar filmaffinity
    posar nom vots a imdb
    fer chip filmaffinity

    slider de num vots 
    slider de minim nota

    tornar a galeria


 */

import { Box, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import ImdbBasicChip from "../../src/components/chips/imdb-basic-chip";
import FilmaffinityBasicChip from "../../src/components/chips/filmaffinity-basic-chip";

const MovieGallery = () => {
  const [movies, setMovies] = useState([]);
  const [token, setToken] = useState("");
  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    /*    const { data: _token } = await axios.post(
      `${process.env.FILMOTEK_API}/signin`,
      {
        email: process.env.FILMOTEK_USER,
        password: process.env.FILMOTEK_PASSWORD,
      }
    );
    setToken(_token);
    const _movies = await axios(
      `${process.env.FILMOTEK_API}/api/movie-gallery`,
      {
        headers: {
          Authorization: `Bearer ${_token}`,
        },
      }
    );
    console.log(_movies);*/
    const _movies = await axios(`${process.env.FILMOTEK_API}/movie-gallery`);
    setMovies(_movies.data.data);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#3d3d3d",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "calc(50% - 10px) calc(50% - 10px)",
          columnGap: "20px",
          rowGap: "20px",
          width: "calc(100% - 40px)",
        }}
      >
        {movies.map((movie) => (
          <Box key={movie.id} sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              sx={{ width: "100%", border: "1px solid white" }}
              image={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.image}`}
              alt={movie.name}
            />
            <FilmaffinityBasicChip
              rating={
                movie.platforms.filmaffinityMovie.rating % 1 != 0
                  ? movie.platforms.filmaffinityMovie.rating
                  : `${movie.platforms.filmaffinityMovie.rating}.0`
              }
            />
            {/*<ImdbBasicChip
              rating={
                movie.platforms.imdbMovie.rating % 1 != 0
                  ? movie.platforms.imdbMovie.rating
                  : `${movie.platforms.imdbMovie.rating}.0`
              }
            />*/}
          </Box>
        ))}
      </Box>
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

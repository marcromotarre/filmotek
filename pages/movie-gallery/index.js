import { Box, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import IMDB_CHIP_ICON from "../../src/images/ranking-platforms/imdb/imdb-chip-icon.png";
import { Inter } from "@next/font/google";

const inter = Inter({
  weight: "900",
});

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
    const _movies = await axios(`https://movies-api-lxas.onrender.com/movie-gallery`);
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
            <Box
              sx={{
                width: "94px",
                height: "30px",
                position: "absolute",
                left: "calc(50% - 47px)",
                bottom: "-5px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "60px",
                  height: "30px",
                  backgroundColor: "#F6C700",
                  height: "100%",
                  borderRadius: "5px",
                  zIndex: "1",
                  position: "relative",
                }}
              >
                <Image
                  component="img"
                  src={IMDB_CHIP_ICON}
                  alt="IMDB RANK"
                  layout="fill"
                />
              </Box>
              <Box
                sx={{
                  backgroundColor: "#000",
                  height: "100%",
                  width: "100%",
                  borderRadius: "5px",
                  position: "absolute",
                  right: "0px",
                }}
              ></Box>
              <Typography
                className={inter.className}
                sx={{
                  color: "#F6C700",
                  height: "fit-content",
                  width: "fit-content",
                  right: "4px",
                  position: "absolute",
                }}
              >
                {movie.platforms.imdbMovie.rating % 1 != 0
                  ? movie.platforms.imdbMovie.rating
                  : `${movie.platforms.imdbMovie.rating}.0`}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MovieGallery;

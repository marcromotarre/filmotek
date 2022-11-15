import { Box, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import ImdbBasicChip from "../../src/components/chips/imdb-basic-chip";
import FilmaffinityBasicChip from "../../src/components/chips/filmaffinity-basic-chip";
import InfiniteScroll from "react-infinite-scroll-component";

const MovieGallery = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(500);
  const [hasMore, setHasMore] = useState(true);
  const [token, setToken] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (page = 0) => {
    setPage(page);
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
    /*const _movies = await axios(`${process.env.FILMOTEK_API}/movie-gallery/`, {
      params: { page },
    });*/
    const _movies = await axios(`https://movies-api-lxas.onrender.com/movie-gallery/`, {
      params: { page },
    });
    
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
      </InfiniteScroll>
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

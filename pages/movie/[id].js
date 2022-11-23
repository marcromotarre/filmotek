import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { BASE_URL, jwtState } from "../../src/states/user-state";

const TMDB_API_KEY = "480ff227df49aaa3c76ea70d0462d207";
const LANGUAGE = "es-ES";

const Movie = () => {
  const router = useRouter();
  const [movie, setMovie] = useState(null);
  const [movieImages, setMovieImages] = useState(null);
  const jwt = useRecoilValue(jwtState);
  useEffect(() => {
    const { id } = router.query;
    if (id) {
      getMovieImages(id);
    }
  }, [router.query]);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const getMovieImages = async (id) => {
    const { data: movieData } = await axios(
      `${BASE_URL}movie/${id}`,

      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    setMovie(movieData.data);

    const { data: movieImages } = await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=${LANGUAGE}&append_to_response=images&include_image_language=es,en,null`
    );
    setMovieImages(movieImages);
    console.log(movieImages);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#3d3d3d",
      }}
    >
      {movieImages && (
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              height: "auto",
            }}
            image={`https://image.tmdb.org/t/p/original${movieImages.images.backdrops[0]?.file_path}`}
            alt={"filmotek"}
          />
          <CardMedia
            component="img"
            sx={{
              width: "50%",
              height: "auto",
              position: "absolute",
              bottom: "10px",
              left: `calc(50% - (${getWindowSize().innerWidth * 0.25}px))`,
            }}
            image={`https://image.tmdb.org/t/p/original${movieImages.images.logos[0]?.file_path}`}
            alt={"filmotek"}
          />
        </Box>
      )}
      <Box>
        <Typography>{movie?.name}</Typography>
        <Typography>{movieImages?.overview}</Typography>
      </Box>
    </Box>
  );
};

export default Movie;

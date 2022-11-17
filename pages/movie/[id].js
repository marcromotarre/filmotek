import { Box } from "@mui/system";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const TMDB_API_KEY = "480ff227df49aaa3c76ea70d0462d207";
const LANGUAGE = "es-ES";

const Movie = () => {
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      getMovieImages(id);
    }
  }, [router.query]);

  const getMovieImages = async (id) => {
    const movieImages = await axios(
      `https://api.themoviedb.org/3//movie/${id}/images?api_key=${TMDB_API_KEY}&language=${LANGUAGE}`
    );

    debugger;
  };

  return (
    <Box sx={{ backgroundColor: "red" }}>
      <h1>Movie XD</h1>
    </Box>
  );
};

export default Movie;

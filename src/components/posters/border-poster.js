import { CardMedia } from "@mui/material";

const BorderPoster = ({ image, name, chips, styles }) => {
  return (
    <CardMedia
      component="img"
      sx={{ width: "100%", border: "1px solid white", ...styles }}
      image={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${image}`}
      alt={name}
    />
  );
};

export default BorderPoster;

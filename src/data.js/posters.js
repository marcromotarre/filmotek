import BorderPoster from "../components/posters/border-poster";
import RoundedPoster from "../components/posters/rounded-poster";

let POSTERS = {
  RECTANGULAR_WITH_WHITE_BORDER: {
    name: "RECTANGULAR_WITH_WHITE_BORDER",
    component: ({name, image}) => <BorderPoster name={name} image={image}></BorderPoster>,
    selected: true,
  },
  ROUNDED: {
    name: "ROUNDED",
    component: ({name, image}) => <RoundedPoster name={name} image={image}></RoundedPoster>,
    selected: false,
  },
};


export default POSTERS
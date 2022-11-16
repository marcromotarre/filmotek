import { Box } from "@mui/material";
import FilmaffinitySlider from "../sliders/filmaffinity-slider";
import ConfigSection from "./config-section";

const ConfigSectionSlider = ({ slider }) => {
    console.log(slider)
  return (
    <ConfigSection title={slider.title} subtitle={slider.subtitle}>
      <Box sx={{ width: "100%", height: "10px" }}></Box>
      {slider.component({
        defaultValue: slider.defaultValue,
        step: slider.step,
        min: slider.min,
        max: slider.max,
        valueLabelFormat: slider.valueLabelFormat,
        marks: slider.marks,
        valueLabelDisplay: "on",
      })}
    </ConfigSection>
  );
};

export default ConfigSectionSlider;

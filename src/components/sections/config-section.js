import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Inter } from "@next/font/google";
import Image from "next/image";
import { inter100, inter900 } from "../../fonts/inter";
import IMDB_CHIP_ICON from "../../images/ranking-platforms/imdb/imdb-chip-icon.png";

const ConfigSection = ({ title, subtitle, children }) => {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "auto", rowGap: "20px" }}>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "auto", rowGap: "10px" }}
      >
        {title && (
          <Typography className={inter900.className} variant="h6">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography className={inter100.className} variant="body2">
            {subtitle}
          </Typography>
        )}
      </Box>

      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ width: "calc(100% - 20px)" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default ConfigSection;

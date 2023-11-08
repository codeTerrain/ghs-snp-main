import { Box, Paper, useTheme } from "@mui/material";
import BannerBg from "../assets/images/banner_img.png";
import { ReactElement } from "react";

export const Banner = ({
  children,
}: {
  children: ReactElement | undefined;
}) => {
  const theme = useTheme();
  const styles = {
    headerStyle: {
      display: "flex",
      backgroundColor: "white",
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        left: 32,
        right: 32,
        bottom: -50,
        padding: "0% 24%",
      },
      [theme.breakpoints.down("sm")]: {
        left: 20,
        right: 20,
        bottom: -50,
        padding: "0% 10px",
      },
      height: 100,
      alignItems: "center",
    },
    bannerStyle: {
      backgroundImage: `url(${BannerBg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "contain",
      minHeight: 120,
      position: "relative",
    },
  };
  return (
    <Box sx={styles.bannerStyle}>
      <Box component={Paper} sx={styles.headerStyle}>
        {children}
      </Box>
    </Box>
  );
};

export default Banner;

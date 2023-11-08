import { Box, Stack, Typography, useTheme } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import GirlSmiling from "../../assets/images/lady_smile.png";

const StoryCard = ({
  imgSrc,
  name,
  region,
  story,
}: {
  imgSrc?: string;
  name: string;
  region: string;
  story: string;
}) => {
  // const classes = styles(theme);
  const theme = useTheme();

  const styles = {
    container: {
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
    },
    outlinedImageContainer: {
      backgroundColor: "transparent",
      borderRadius: 12,
      border: `1px solid ${theme.palette.primary.main}`,
      padding: "16px 8px",
      [theme.breakpoints.down("sm")]: {
        margin: 0,
      },
    },
    overlayContainer: {
      display: "flex",
      color: "white",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "space-between",
      gap: 2,
      backgroundColor: "rgba(212, 247, 232, 0.5)",
      backdropFilter: "blur(7px)",
      WebkitBackdropFilter: "blur(7px)",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        left: 0,
        top: -100,
        bottom: 0,
      },
      [theme.breakpoints.up("md")]: {
        left: "-5%",
        top: 0,
        bottom: 0,
      },
      padding: 5,
      height: "fit-content",
    },
    image: {
      height: 350,
      borderRadius: 12,
    },
  };
  return (
    <Stack sx={styles.container} direction={{ xs: "column", md: "row" }}>
      <Stack sx={styles.outlinedImageContainer}>
        <Box sx={styles.image} component={"img"} src={imgSrc ?? GirlSmiling} />
      </Stack>
      <Box sx={styles.overlayContainer}>
        <Typography variant="caption">{story}</Typography>
        <Box>
          <Typography variant="body2">{name}</Typography>
          <Typography variant="caption" color={"Menu"}>
            {region}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default StoryCard;

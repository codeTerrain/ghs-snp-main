import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const styles = {
  circle: {
    borderRadius: "50%",

    minWidth: 100,
    minHeight: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
};

const AchievementCard = ({
  count,
  year,
}: {
  count: number | string;
  year: string;
}) => {
  const theme = useTheme();
  // const classes = useStyles();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      p={{ xs: "8px 16px", md: "16px 32px" }}
    >
      <Stack alignItems={"center"}>
        <Typography variant="h2" fontWeight={"bold"}>
          {count}
        </Typography>
        <Typography variant="h4">Girls</Typography>
      </Stack>
      <Box
        sx={{
          ...styles.circle,
          border: `1px solid ${theme.palette.primary.main}`,
        }}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          {year}
        </Typography>
      </Box>
    </Stack>
  );
};

export default AchievementCard;

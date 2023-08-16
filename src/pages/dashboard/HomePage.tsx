import { Box, Grid, Typography } from "@mui/material";
import { Announcements, Mood, Notes, Reminders, TeamUpdates } from "./holders";

const HomePage = ({ drawerWidth }: any) => {
  return (
    <Box
      sx={{
        p: "10px 30px 10px 30px",
        marginLeft: `${drawerWidth}px`,
        width: `calc(100% - ${drawerWidth}px)`,
      }}
    >
      <Typography
        gutterBottom
        align="left"
        variant="h4"
      >{`Hi, Danyal Faheem!`}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4}>
          <Reminders />
          <Notes />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Mood />
          <TeamUpdates />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Announcements />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;

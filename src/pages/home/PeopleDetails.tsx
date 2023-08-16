import { Box, Typography } from "@mui/material";
import peopleImg from "../../assets/Mask_group__2___1_.png";
import { CustomButton } from "../../components/customButton/CustomButton";
import { blueButton } from "../../styles/buttons";

export const PeopleDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        mt: 10,
        mb: 10,
      }}
    >
      <img
        style={{
          maxWidth: "500px",
          alignSelf: "center",
          position: "relative",
          zIndex: "2",
        }}
        src={peopleImg}
        alt=""
      />
      <Box
        sx={{
          p: "30px",
          background: "#f4f5f7",
          maxWidth: "500px",
          ml: "-40px",
          position: "relative",
          zIndex: "1",
        }}
      >
        <Typography variant="h2" sx={{ m: 5 }}>
          {`We are our people`}
        </Typography>
        <Typography sx={{ ml: 5 }}>
          {`Our team of over 800 blends the skills of engineers, developers, UX architects, and designers to craft impactful solutions. Together, we have aided businesses in their journey toward digital transformation by delivering custom software that drives change.`}
        </Typography>
        <CustomButton
          styles={{ ...blueButton, ...{ m: 5 } }}
          text={"Learn more"}
          color="primary"
          link="https://arbisoft.com/about"
        />
      </Box>
    </Box>
  );
};

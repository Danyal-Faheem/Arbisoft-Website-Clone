import { Box, Container, Typography } from "@mui/material";
import Illustration from "../../assets/Illustration.png";
import { CustomButton } from "../../components/customButton/CustomButton";
import { blueButton } from "../../styles/buttons";

export const TechnicalSkillSet = () => {
  return (
    <Container>
      <Box
        sx={{
          m: 5,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <img src={Illustration} alt="" height="400px" />
        <Box sx={{ textAlign: "left", maxWidth: "400px" }}>
          <Typography variant="h2" sx={{ m: 5 }}>
            {`Decades of Partnership`}
          </Typography>
          <Typography sx={{ ml: 5 }}>
            {`We are a full-scale software development firm that knows the value of lasting relationships and can combine focused detail-oriented action with long-term strategic thinking.`}
          </Typography>
          <CustomButton
            styles={{ ...{ m: 5 }, ...blueButton }}
            text={`View our technical skill set`}
            link="https://arbisoft.com/services"
            color="primary"
          />
        </Box>
      </Box>
    </Container>
  );
};

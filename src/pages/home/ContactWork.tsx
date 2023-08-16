import { Box, Typography } from "@mui/material";
import { CustomButton } from "../../components/customButton/CustomButton";
import WorkHereLogo from "../../assets/Group_2231.svg";
import WorkWithUsLogo from "../../assets/Group_2152.png";
import { blueButton } from "../../styles/buttons";

export const ContactWork = () => {
  return (
    <Box
      sx={{
        m: "5 5",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        p: "10 10",
      }}
    >
      <Box sx={{ bgcolor: `#eaf9ff`, textAlign: "right", flexGrow: "1" }}>
        <Typography variant="h4" sx={{ m: 5 }}>
          {`Become a part of our global team!`}
        </Typography>
        <CustomButton
          styles={{ ...{ m: 5 }, ...blueButton }}
          link="https://arbisoft.com/careers"
          text="Apply Here"
          color="info"
        />
        <img src={WorkHereLogo} height="100px" />
      </Box>
      <Box sx={{ bgcolor: "#FCE8CAB8", flexGrow: "1", textAlign: "left" }}>
        <Typography sx={{ m: 5 }} variant="h4">
          {`Partner with us for your next venture!`}
        </Typography>
        <CustomButton
          styles={{ m: 5, backgroundColor: "orange", color: "white" }}
          link="https://arbisoft.com/contact"
          color="warning"
          text="Let's get started"
        />
        <img src={WorkWithUsLogo} height="100px" />
      </Box>
    </Box>
  );
};

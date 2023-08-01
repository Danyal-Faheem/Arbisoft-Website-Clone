import { Box, Grid, Paper, Typography } from "@mui/material";
import EducationImage from "../../assets/Mask_group__5_.png";
import FinanceImage from "../../assets/Mask_group__6_.png";
import HealthcareImage from "../../assets/Mask_group__7_.png";
import TravelImage from "../../assets/Mask_group__8_.png";
import { CustomButton } from "../../components/CustomButton";

export const WorkGrid = () => {
  let items = [
    {
      title: "Education",
      description:
        "We have partnered with some of the leading education and financial institutions, and nonprofits to modernize the way the world learns.",
      backgroundImg: EducationImage,
      ButtonTitle: "Learn more",
    },
    {
      title: "Finance",
      description:
        "We have partnered with some of the leading education and financial institutions, and nonprofits to modernize the way the world learns.",
      backgroundImg: FinanceImage,
      ButtonTitle: "Learn more",
    },
    {
      title: "Healthcare",
      description:
        "Our apps have contributed to the technological revolution in the healthcare industry, from educating medical students to managing patients in clinics.",
      backgroundImg: HealthcareImage,
      ButtonTitle: "Learn more",
    },
    {
      title: "Travel",
      description: "We enable leading travel & hospitality search engines with our dedicated team of software developers, machine learning and data engineers.",
      backgroundImg: TravelImage,
      ButtonTitle: "Learn more",
    },
  ];
  return (
    <Grid container spacing={0}>
      {items.map((item, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} sx={{ textAlign: "center"}}>
            <Box sx={{ position: "relative", backgroundImage: `url(${item.backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
              <img src={item.backgroundImg} alt="" width="100%" />
              <Box sx={{ position: "absolute", top: 100, left: 50 }}>
                <Typography
                  gutterBottom
                  align="left"
                  variant="h2"
                  sx={{ color: "white" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  gutterBottom
                  align="left"
                  variant="h6"
                  sx={{ color: "white", mr: 2 }}
                >
                  {item.description}
                </Typography>
                <CustomButton
                  text="Learn more"
                  color="info"
                  styles={{ float: "left", mt: 10 , bgcolor: "white"}}
                />
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

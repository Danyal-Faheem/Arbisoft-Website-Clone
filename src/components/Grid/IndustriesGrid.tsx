import { Grid } from "@mui/material";
import EducationImage from "../../assets/Mask_group__5_.png";
import FinanceImage from "../../assets/Mask_group__6_.png";
import HealthcareImage from "../../assets/Mask_group__7_.png";
import TravelImage from "../../assets/Mask_group__8_.png";
import { GridItem } from "../../components/Grid/GridItem";

export const IndustriesGrid = () => {
  let items = [
    {
      title: "Education",
      subtext:
        "We have partnered with some of the leading education and financial institutions, and nonprofits to modernize the way the world learns.",
      backgroundImage: EducationImage,
      button: {
        text: "Learn more",
        link: "https://arbisoft.com/work/education",
      },
    },
    {
      title: "Finance",
      subtext:
        "We have partnered with some of the leading education and financial institutions, and nonprofits to modernize the way the world learns.",
      backgroundImage: FinanceImage,
      button: {
        text: "Learn more",
        link: "https://arbisoft.com/work/finance",
      },
    },
    {
      title: "Healthcare",
      subtext:
        "Our apps have contributed to the technological revolution in the healthcare industry, from educating medical students to managing patients in clinics.",
      backgroundImage: HealthcareImage,
      button: {
        text: "Learn more",
        link: "https://arbisoft.com/work/healthcare",
      },
    },
    {
      title: "Travel",
      subtext:
        "We enable leading travel & hospitality search engines with our dedicated team of software developers, machine learning and data engineers.",
      backgroundImage: TravelImage,
      button: {
        text: "Learn more",
        link: "https://arbisoft.com/work/travel",
      },
    },
  ];
  return (
    <Grid container spacing={0}>
      {items.map((item, index) => {
        return (
          <Grid key={index} item xs={12} sm={6}>
            <GridItem
              styles={{ color: "white", height: "400px", border: "none" }}
              {...item}
              button={{
                text: item.button.text,
                link: item.button.link,
                styles: { color: "blue", backgroundColor: "white" },
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

import { Grid } from "@mui/material";
import BrainImage from "../../assets/brain_1.png";
import WebImage from "../../assets/function_1.png";
import SettingsImage from "../../assets/settings__1__1__1_.png";
import SoftwareImage from "../../assets/software_1.png";
import { GridItem } from "../../components/Grid/GridItem";

export const ServicesGrid = () => {
  let items = [
    {
      title: "Data and AI",
      subtext:
        "We can help you unlock your business potential with our cutting-edge Machine Learning and Artificial Intelligence capabilities.",
      logo: BrainImage,
      button: {
        text: "Learn more",
        link: "https://arbisoft.com/services/data-and-artificial-intelligence",
      },
    },
    {
      title: "Web Apps",
      subtext:
        "We provide custom-tailored solutions for each phase of development from designing to coding and implementation.",
      logo: WebImage,
      button: {
        text: "Learn more",
        link: "https://arbisoft.com/services/web-app-development",
      },
    },
    {
      title: "Mobile Apps",
      subtext:
        "We build native apps optimized for iOS and Android to provide users with a seamless mobile experience that leverages the full power of the OS.",
      logo: SettingsImage,
      button: {
        text: "Learn more",
        link: "https://arbisoft.com/services/mobile-app-development",
      },
    },
    {
      title: "Enterprise software",
      subtext:
        "We bring your ideas to life with our turnkey solutions that are custom-designed to fit into your enterprise software ecosystem.",
      logo: SoftwareImage,
      button: {
        text: "Learn more",
        link: "https://arbisoft.com/services/enterprise-software-development",
      },
    },
  ];
  return (
    <Grid container spacing={0}>
      {items.map((item, index) => {
        return (
          <Grid key={index} item xs={12} sm={6}>
            <GridItem {...item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

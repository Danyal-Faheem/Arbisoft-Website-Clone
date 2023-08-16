import { Grid } from "@mui/material";
import EdlyLogo from "../../assets/Edly-logo_1__1_.png";
import MoonbeamLogo from "../../assets/Moonbeam-logo_1__1_.png";
import IlmxLogo from "../../assets/g12__1_.png";
import HirestreamLogo from "../../assets/_x30_1-Component-_x2F_-Logo-_x2F_-Full-_x2F_-Small__1_.png";
import LaunchIcon from "@mui/icons-material/Launch";
import { GridItem } from "./GridItem";

export const ProductsGrid = () => {
  let items = [
    {
      subtext:
        "A learning and training management system that responds to your needs and delivers accordingly while simultaneously connecting you to your audience.",
      logo: EdlyLogo,
      button: {
        text: "Explore Edly",
        link: "https://edly.io/",
      },
    },
    {
      subtext:
        "A podcast player that enables listeners to sift through short audio clips from different podcasts and find new shows that they otherwise wouldn’t come across.",
      logo: MoonbeamLogo,
      ButtonTitle: "Explore Moonbeam",
      button: {
        text: "Explore Moonbeam",
        link: "https://www.moonbeam.fm/",
      },
    },
    {
      subtext:
        "An applicant tracking system and recruiting software that gives you more power over hiring decisions that matter. Hirestream automates the tasks that slow you down and refines your process through single-click bulk applicant management.",
      logo: HirestreamLogo,
      ButtonTitle: "Explore Hirestream",
      button: {
        text: "Explore Hirestream",
        link: "https://hirestream.io/",
      },
    },
    {
      subtext:
        "A social enterprise committed to connecting and empowering learners by making e-learning opportunities accessible and affordable for all.",
      logo: IlmxLogo,
      ButtonTitle: "Explore Ilmx",
      button: {
        text: "Explore Ilmx",
        link: "https://www.ilmx.org/",
      },
    },
  ];
  return (
    <Grid container spacing={0}>
      {items.map((item, index) => {
        return (
          <Grid key={index} item xs={12} sm={6}>
            <GridItem
              {...item}
              styles={{
                "&:hover": {
                  borderBottom: "10px solid blue",
                },
              }}
              button={{
                text: item.button.text,
                link: item.button.link,
                EndIcon: LaunchIcon,
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

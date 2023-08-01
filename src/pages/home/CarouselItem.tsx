import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import {
  IHomePageCarouselItemButton,
  IHomePageCarouselItems,
} from "./HomePageCarousel";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

interface ICarouselItemProps {}

export const CarouselItem = ({
  heading,
  subheading,
  largeImg,
  smallImg,
  buttons,
}: IHomePageCarouselItems) => {
  return (
    <Box>
        <img src={largeImg} srcSet={`${smallImg} 100w, ${largeImg} 1000w`} width="100%"/>
        <Box sx={{
            position: "absolute",
            top: "0",
            color: "white",
            right: "20",
            width: "40%",
        }}>

        <Typography
          variant="h3"
          align="left"
          >
          {heading}
        </Typography>
        <Typography
          variant="subtitle1"
          align="left"
          >
          {subheading}
        </Typography>
            {buttons.map((button: IHomePageCarouselItemButton) => {
                return (
                    <Button key={button.description}>
                        {button.description}
                    </Button>
                )
            })}
        </Box>
            </Box>
  );
};

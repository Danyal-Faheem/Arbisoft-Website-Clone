import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {
  IHomePageCarouselItemButton,
  IHomePageCarouselItems,
} from "./HomePageCarousel";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CustomButton } from "../../components/CustomButton";

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
            top: "150px",
            left: "200px",
            color: "white",
            right: "20",
            width: "40%",
        }}>

        <Typography
          variant="h2"
          align="left"
          gutterBottom
          >
          {heading}
        </Typography>
        <Typography
          align="left"
          gutterBottom
          >
          {subheading}
        </Typography>
            {buttons.map((button: IHomePageCarouselItemButton) => {
                return (
                    <CustomButton styles={{mt:3, mb: 3, mr:3}} key={button.description} text={button.description} color={button.color} EndIcon={ArrowRightAltIcon} />
                )
            })}
        </Box>
            </Box>
  );
};

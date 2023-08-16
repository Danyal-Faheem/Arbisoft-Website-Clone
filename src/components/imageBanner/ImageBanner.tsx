import { Box, Typography } from "@mui/material";
import IImageBannerItems from "../../interfaces/imageBanner";
import { useEffect, useState } from "react";
import CustomButton, { ICustomButtonProps } from "../customButton";

const ImageBanner = ({
  title,
  subtext,
  largeImg,
  smallImg,
  buttons,
}: IImageBannerItems) => {
  const [image, setImage] = useState<string>(largeImg);
  const [height, setHeight] = useState<number>(700);

  useEffect(() => {
    window.addEventListener("resize", changeImage);
  });

  const changeImage = () => {
    if (window.innerWidth < 850) {
      setImage(smallImg);
      setHeight(1500);
    } else {
      setImage(largeImg);
      setHeight(700);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('${image}')`,
        height: `${height}px`,
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          color: "white",
          p: 15,
          alignItems: "left",
          height: "60%",
          maxWidth: "900px",
        }}
      >
        <Typography variant="h2" align="left" gutterBottom>
          {title}
        </Typography>
        <Typography align="left" gutterBottom>
          {subtext}
        </Typography>
        {buttons.map((button: ICustomButtonProps, index) => {
          return <CustomButton key={index} {...button} />;
        })}
      </Box>
    </Box>
  );
};

export default ImageBanner;

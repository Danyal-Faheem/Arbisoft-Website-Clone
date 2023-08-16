import { Box, Button, Typography } from "@mui/material";
import largeImg from "../../assets/Group_2099.png";
import smallImg from "../../assets/Why_Arbisoft.jpg";
import { useEffect, useState } from "react";
import NatSharpIcon from "@mui/icons-material/NatSharp";

export const EmpoweringBusinesses = () => {
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
          {`Empowering businesses for the modern age`}
        </Typography>
        <Typography align="left" gutterBottom>
          {`Specializing in integrated software, data management, and development services, that enable businesses to take the digital leap to growth and success.`}
        </Typography>
        <Button
          startIcon={<NatSharpIcon />}
          sx={{
            border: "none",
            color: "white",
            ":hover": { border: "none", color: "blue" },
          }}
        >
          {`Let's work together`}
        </Button>
      </Box>
    </Box>
  );
};

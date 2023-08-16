import { Box, Container, Grid, Typography } from "@mui/material";
import DataAndArtificialIntelligenceLogo from "../../assets/Group.png";
import { CustomButton } from "../../components/customButton/CustomButton";

export const ServicesGrid = () => {
  const items = [
    {
      img: DataAndArtificialIntelligenceLogo,
      title: "Data and Artificial Intelligence",
      subtext:
        "We unlock insights for your business like never before using cutting-edge technologies of machine learning and in-depth data analytics.",
    },
    {
      img: DataAndArtificialIntelligenceLogo,
      title: "Enterprise software development",
      subtext:
        "Our software development team can help you modernize your enterprise to achieve higher operational efficiency, automate processes, and increase customer satisfaction.",
    },
    {
      img: DataAndArtificialIntelligenceLogo,
      title: "Data and Artificial Intelligence",
      subtext:
        "We unlock insights for your business like never before using cutting-edge technologies of machine learning and in-depth data analytics.",
    },
    {
      img: DataAndArtificialIntelligenceLogo,
      title: "Data and Artificial Intelligence",
      subtext:
        "We unlock insights for your business like never before using cutting-edge technologies of machine learning and in-depth data analytics.",
    },
    {
      img: DataAndArtificialIntelligenceLogo,
      title: "Data and Artificial Intelligence",
      subtext:
        "We unlock insights for your business like never before using cutting-edge technologies of machine learning and in-depth data analytics.",
    },
    {
      img: DataAndArtificialIntelligenceLogo,
      title: "Data and Artificial Intelligence",
      subtext:
        "We unlock insights for your business like never before using cutting-edge technologies of machine learning and in-depth data analytics.",
    },
  ];
  return (
    <Container>
      <Box
        sx={{
          gap: 15,
          marginTop: 10,
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {items.map((item, index) => {
          return (
            <Box
              sx={{
                maxWidth: "500px",
                border: "1px solid lightgray",
                borderWidth: "thin",
              }}
            >
              <img
                src={item.img}
                alt=""
                width="100px"
                height="100px"
                style={{ margin: "20px" }}
              />
              <Box sx={{ m: "20px" }}>
                <Typography gutterBottom align="left" variant="h3">
                  {item.title}
                </Typography>
                <Typography gutterBottom align="left" variant="subtitle1">
                  {item.subtext}
                </Typography>
                <CustomButton
                  text="Learn more"
                  color="info"
                  styles={{ bgcolor: "white" }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

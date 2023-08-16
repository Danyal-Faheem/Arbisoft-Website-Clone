import "react-multi-carousel/lib/styles.css";
import edXLogo from "../../assets/Mask_group__3_.png";
import lendAidLogo from "../../assets/Rectangle.png";
import payPerkLogo from "../../assets/Mask_group.png";
import worldBankLogo from "../../assets/image_81.png";
import aeeLogo from "../../assets/Rectangle__2_.png";
import kayakLogo from "../../assets/Rectangle__3_.png";
import importIoLogo from "../../assets/image_104.png";
import { Box, Container, Typography } from "@mui/material";
import { CustomButton } from "../../components/customButton/CustomButton";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Slider from "react-slick";
import { useState } from "react";
import { blueButton } from "../../styles/buttons";

export const RelationshipsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
    afterChange: (current: any) => {
      setCurrentSlide(current);
    },
  };
  const items = [
    {
      text: "Helping Payperks drive positive change for financially-under served consumers and create value for the institutions which serve them.",
      image: payPerkLogo,
    },
    {
      text: "Arbisoft helped mortgage lenders become more digitally visible & helps consumers find top rated loan officers.",
      image: lendAidLogo,
    },
    {
      text: "Arbisoft has worked with the World Bank to develop educational games to study subjects in North Africa, South and South-East Asia.",
      image: worldBankLogo,
    },
    {
      text: "Arbisoft has worked with the World Bank to develop educational games to study subjects in North Africa, South and South-East Asia.",
      image: aeeLogo,
    },

    {
      text: "Arbisoft and KAYAK collaborated on award-winning iOS/Android apps, downloaded 50M+ times, globally.",
      image: kayakLogo,
    },
    {
      text: "Arbisoft provided Web Data integration solutions to import.io to maximize strategic value of web data.",
      image: importIoLogo,
    },
    {
      text: "Arbisoft helped edX create apps, courses, and data analytics for 20M+ learners.",
      image: edXLogo,
    },
    {
      text: "Arbisoft helped edX create apps, courses, and data analytics for 20M+ learners.",
      image: edXLogo,
    },
  ];
  return (
    <Box sx={{ mt: 10, mb: 10, bgcolor: "lightgray" }}>
      <Container>
        <Typography variant="h3" sx={{ mb: 10, mt: 10 }} align="left">
          {`Great software needs great relationships`}
        </Typography>
        <Slider {...settings}>
          {items.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  bgcolor: currentSlide === index ? "#223554" : "lightgray",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "white",
                    margin: "20px auto",
                    height: "300px",
                    width: "300px",
                  }}
                >
                  <img
                    src={item.image}
                    style={{ alignSelf: "center", margin: "0 auto" }}
                    width="200px"
                  />
                </Box>
                <Typography
                  sx={{
                    m: 2,
                    color: currentSlide === index ? "white" : "lightgray",
                    maxWidth: "90%",
                  }}
                  variant="h6"
                  align="left"
                >
                  {item.text}
                </Typography>
              </Box>
            );
          })}
        </Slider>
      </Container>
      <Box sx={{ textAlign: "center" }}>
        <CustomButton
          styles={{ ...{ mt: 20, mb: 5 }, ...blueButton }}
          text="View our work"
          link="https://arbisoft.com/case-studies"
          EndIcon={ArrowRightAltIcon}
        />
      </Box>
    </Box>
  );
};

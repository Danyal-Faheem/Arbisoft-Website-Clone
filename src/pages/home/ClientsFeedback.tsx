import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import paulEnglishAvatar from "../../assets/img-6.png";
import EdZarecorAvatar from "../../assets/img-5.png";
import AliceDanonAvatar from "../../assets/image_115.png";
import kayakLogo from "../../assets/Rectangle__3_.png";
import edxLogo from "../../assets/Mask_group_edx.png";
import worldBankLogo from "../../assets/image_81.png";
import Slider from "react-slick";
import { grayDivider } from "../../styles/divider";
export const ClientsFeedback = () => {
  const items = [
    {
      avatar: paulEnglishAvatar,
      name: "Paul English",
      designation: "Co-Founder, KAYAK",
      testimony: `"I have managed remote teams now for over ten years, and our early work with Arbisoft is the best experience I’ve had for off-site contractors."`,
      logo: kayakLogo,
    },
    {
      avatar: EdZarecorAvatar,
      name: "Ed Zarecor",
      designation: "Senior Director & Head of Engineering",
      testimony: `“Arbisoft has been a valued partner to edX since 2013. We work with their engineers day in and day out to advance the Open edX platform and support our learners across the world.”`,
      logo: edxLogo,
    },
    {
      avatar: AliceDanonAvatar,
      name: "Alice Danon",
      designation: "Project Coordinator, World Bank",
      testimony: `“They delivered a high-quality product and their customer service was excellent. We’ve had other teams approach us, asking to use it for their own projects”.`,
      logo: worldBankLogo,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    draggable: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Box sx={{ p: 5, bgcolor: "#223554" }}>
      <Container>
        <Typography
          sx={{
            m: 5,
            display: "flex",
            justifyContent: "center",
            color: "white",
          }}
          variant="h3"
        >
          {`What our Clients Say`}
        </Typography>
        <Box>
          <Slider {...settings}>
            {items.map((item, index) => {
              return (
                <Card key={index} sx={{ m: 5, maxWidth: "500px" }}>
                  <CardHeader
                    avatar={
                      <Avatar
                        src={item.avatar}
                        sx={{ width: 112, height: 112 }}
                      />
                    }
                    title={item.name}
                    subheader={item.designation}
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        pb: "50px",
                        maxHeight: "200px",
                        ...grayDivider,
                      }}
                    >
                      {item.testimony}
                    </Typography>
                    <img
                      height="60px"
                      style={{ display: "block", margin: "auto" }}
                      src={item.logo}
                    />
                  </CardContent>
                </Card>
              );
            })}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

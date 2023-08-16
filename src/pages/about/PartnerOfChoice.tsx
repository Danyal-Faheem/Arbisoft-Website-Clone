import { Box, Container, Typography } from "@mui/material";
import handShakeLogo from "../../assets/Group_250.png";
import ValueLogo from "../../assets/Group_248__1_.png";
import CapabilityLogo from "../../assets/Group_247.png";

export const PartnerOfChoice = () => {
  const items = [
    {
      img: handShakeLogo,
      heading: `Building partnerships that last`,
      subtext: `We nurture long-term relationships by creating value for our clients in all industries.`,
    },
    {
      img: ValueLogo,
      heading: `Creating value`,
      subtext: `Our world-class team of engineers is ready to take on diverse and challenging projects to create real value.`,
    },
    {
      img: CapabilityLogo,
      heading: `Proven capability`,
      subtext: `Give us a problem and we will engineer a solution! We build enterprise and analytical software for every industry.`,
    },
  ];
  return (
    <Box sx={{ pt: 10, pb: 10, mt: 10, mb: 10 }}>
      {/* <Box sx={{ backgroundColor: "#f8f8f8", height: "70%" }} /> */}
      <Container>
        <Typography variant="h3" align="center">
          {`Why we're the partner of choice for our clients`}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            mt: 10,
            mb: 5,
          }}
        >
          {items.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  mt: 2,
                  mb: 2,
                  p: 5,
                  border: "1px solid lightgray",
                  borderWidth: "thin",
                }}
              >
                <img
                  src={item.img}
                  height={"60px"}
                  width={"60px"}
                  style={{ float: "left" }}
                />
                <Typography
                  variant="h6"
                  align="left"
                  maxWidth={"180px"}
                  sx={{ ml: 10 }}
                >
                  {item.heading}
                </Typography>
                <Typography
                  variant="subtitle2"
                  align="left"
                  maxWidth={"250px"}
                  sx={{ borderLeft: "1px solid orange", pl: 5, mt: 5 }}
                >
                  {item.subtext}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

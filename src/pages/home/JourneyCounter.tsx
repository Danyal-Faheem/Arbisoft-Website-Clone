import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { CountUp } from "use-count-up";
import iconPeople from "../../assets/icon-people.svg";
import iconBulb from "../../assets/icon-bulb.svg";
import iconClutch from "../../assets/icon-clutch.svg";
import iconHome from "../../assets/icon-home.svg";

export const JourneyCounter = () => {
  let items = [
    {
      description: "People onboard",
      end: 800,
      icon: iconPeople,
      plusIcon: true,
    },
    {
      description: "Global offices",
      end: 4,
      icon: iconHome,
      plusIcon: false,
    },
    {
      description: "Projects completed",
      end: 550,
      icon: iconBulb,
      plusIcon: true,
    },
    {
      description: "Clutch rating",
      end: 4.9,
      icon: iconClutch,
      plusIcon: false,
    },
  ];

  return (
    <>
      <Box
        sx={{
          mt: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography align="left" display="inline" variant="h2">
          <strong>{`A Journey of `}</strong>
        </Typography>
        <Typography
          align="left"
          display="inline"
          variant="h2"
          sx={{ color: "blue" }}
        >
          <strong>
            <CountUp isCounting end={15} duration={3} /> Years
          </strong>
        </Typography>
      </Box>
      <Box sx={{ borderRadius: "5px", border: "1px solid", borderTop: "none" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ justifyContent: "space-evenly" }}
        >
          {items.map((item) => {
            return (
                <>
              <Box key={item.description} sx={{ m: 5, display: "flex", flexDirection: "column", alignItems: "center"}}>
                <img src={item.icon} />
                <Typography variant="h3">
                  <CountUp isCounting end={item.end} duration={3} />
                  {item.plusIcon && "+"}
                </Typography>
                <Typography>{item.description}</Typography>
              </Box>
                </>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};

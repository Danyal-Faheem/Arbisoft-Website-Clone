import { Box, CardHeader, Typography } from "@mui/material";
import { ItemHeader } from "../../../components/item/ItemHeader";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SickIcon from "@mui/icons-material/Sick";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import { ItemContent } from "../../../components/item/ItemContent";
import { grayDivider } from "../../../styles/divider";

export const TeamUpdates = () => {
  const updates = [
    {
      title: "Danyal Faheem is on Sick Leave",
      subheader: "Today",
      avatar: <SickIcon />,
    },
    {
      title: "Danyal Faheem is taking leave in",
      subheader: "4 days",
      avatar: <PersonOffIcon />,
    },
  ];

  return (
    <Box sx={{ mb: 5 }}>
      <ItemHeader>
        <SupervisedUserCircleIcon />
        <Typography variant="h6">{`Team Updates`}</Typography>
      </ItemHeader>
      <ItemContent styles={{ height: "65vh" }}>
        {updates.map((update, index) => {
          return (
            <CardHeader key={index} {...update} sx={grayDivider}></CardHeader>
          );
        })}
      </ItemContent>
    </Box>
  );
};

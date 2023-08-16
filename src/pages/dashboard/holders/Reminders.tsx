import { Box, CardHeader, Typography } from "@mui/material";
import { ItemHeader } from "../../../components/item/ItemHeader";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { ItemContent } from "../../../components/item/ItemContent";
import { grayDivider } from "../../../styles/divider";

export const Reminders = () => {
  const items = [
    {
      title: "Fill Project Logs",
      subheader: "For the week of Aug 1 - Aug 7",
      importance: "red",
    },
    {
      title: "Complete CV",
      subheader: "Add Kin details",
      importance: "blue",
    },
  ];
  return (
    <Box sx={{ mb: 5 }}>
      <ItemHeader>
        <ListAltIcon />
        <Typography variant="h6">{`My Reminders`}</Typography>
      </ItemHeader>
      <ItemContent styles={{ height: "65vh" }}>
        {items.map((item, index) => {
          return (
            <CardHeader
              key={index}
              {...item}
              sx={{
                borderLeft: `3px solid ${item.importance}`,
                ...grayDivider,
              }}
            ></CardHeader>
          );
        })}
      </ItemContent>
    </Box>
  );
};

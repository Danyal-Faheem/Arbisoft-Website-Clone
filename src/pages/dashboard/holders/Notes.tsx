import { Box, IconButton, Typography } from "@mui/material";
import { ItemHeader } from "../../../components/item/ItemHeader";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { ItemContent } from "../../../components/item/ItemContent";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

export const Notes = () => {
  return (
    <Box sx={{ mb: 5 }}>
      <ItemHeader>
        <EditNoteIcon />
        <Typography variant="h6" sx={{ flexGrow: "1" }}>
          {`Notes`}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <AddIcon />
        </IconButton>
      </ItemHeader>
      <ItemContent styles={{ height: "35vh" }}>
        <Typography align="left" sx={{ m: "0 auto" }}>
          {`There are no notes to show.`}
        </Typography>
      </ItemContent>
    </Box>
  );
};

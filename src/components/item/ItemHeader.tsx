import { Paper } from "@mui/material";

export const ItemHeader = ({ children }: any) => {
  return (
    <Paper
      elevation={24}
      sx={{
        margin: "0 auto",
        position: "relative",
        width: "75%",
        zIndex: "2",
        p: "10px",
        display: "flex",
      }}
    >
      {children}
    </Paper>
  );
};

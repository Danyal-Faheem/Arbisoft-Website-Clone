import { Paper } from "@mui/material";

export const ItemContent = ({ styles, children }: any) => {
  return (
    <Paper
      elevation={2}
      sx={{
        ...{
          position: "relative",
          p: "40px 30px 10px 10px",
          mt: "-20px",
          zIndex: "1",
          height: "500px",
          overflow: "auto",
        },
        ...styles,
      }}
    >
      {children}
    </Paper>
  );
};

import { Box, Container, Typography } from "@mui/material";
import CoreValuesImg from "../../assets/core-values-img.png";

export const CoreValues = () => {
  return (
    <Box sx={{ backgroundColor: "#000e26", pt: 10, pb: 10 }}>
      <Container>
        <Typography m={10} color={"white"} align="center" variant="h3">
          {`Values that drive us`}
        </Typography>
        <img
          src={CoreValuesImg}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </Container>
    </Box>
  );
};

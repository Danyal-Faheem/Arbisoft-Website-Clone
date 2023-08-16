import { Box, Typography } from "@mui/material";
import CustomButton, { ICustomButtonProps } from "../customButton";

interface IGridItemProps {
  backgroundImage?: string;
  logo?: string;
  title?: string;
  subtext?: string;
  button?: ICustomButtonProps;
  styles?: any;
}

export const GridItem = ({
  backgroundImage,
  logo,
  title,
  subtext,
  button,
  styles,
}: IGridItemProps) => {
  return (
    <Box
      sx={{
        ...{
          border: "1px solid lightgray",
          borderWidth: "thin",
          backgroundImage: `url('${backgroundImage}')`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        },
        ...styles,
      }}
    >
      {logo && (
        <img
          src={logo}
          alt=""
          height="84px"
          width="84px"
          style={{
            marginLeft: "40px",
            marginRight: "40px",
            marginTop: "40px",
            objectFit: "contain",
          }}
        />
      )}
      <Box sx={{ m: 5 }}>
        <Typography gutterBottom align="left" variant="h3">
          {title}
        </Typography>
        <Typography sx={{ mb: 5 }} align="left" variant="subtitle1">
          {subtext}
        </Typography>
        {button && <CustomButton {...button} />}
      </Box>
    </Box>
  );
};

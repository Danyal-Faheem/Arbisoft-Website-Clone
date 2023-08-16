import { Button, Link } from "@mui/material";
import { ICustomButtonProps } from ".";

export const CustomButton = ({
  color,
  text,
  link,
  EndIcon,
  styles,
}: ICustomButtonProps) => {
  return (
    <Button
      variant="outlined"
      sx={{ ...{ borderRadius: 10 }, ...styles }}
      color={color}
      endIcon={EndIcon ? <EndIcon /> : <></>}
    >
      <Link
        underline="none"
        sx={{ textDecoration: "none", color: "inherit" }}
        href={link}
      >
        {text}
      </Link>
    </Button>
  );
};

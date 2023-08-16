import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
interface IGridButtonGroupProps {
  gridChoice: string;
  handleChange: (
    event: React.MouseEvent<HTMLElement>,
    newChoice: string,
  ) => void;
}

export const GridButtonGroup = ({
  gridChoice,
  handleChange,
}: IGridButtonGroupProps) => {
  const buttons = ["Industries", "Services", "Products"];

  return (
    <ToggleButtonGroup exclusive value={gridChoice} onChange={handleChange}>
      {buttons.map((button, index) => {
        return (
          <ToggleButton
            key={index}
            sx={{ mr: 5, border: "1px solid lightgray !important" }}
            value={`${button}`}
            size="large"
          >
            {`${button}`}
          </ToggleButton>
        );
      })}
      <Typography sx={{ m: 4, color: "blue" }}>
        <a
          style={{ textDecoration: "none" }}
          href={`https://arbisoft.com/${gridChoice.toLowerCase()}`}
        >{`All ${gridChoice}`}</a>
        <span>
          <ChevronRightOutlinedIcon />
        </span>
      </Typography>
    </ToggleButtonGroup>
  );
};

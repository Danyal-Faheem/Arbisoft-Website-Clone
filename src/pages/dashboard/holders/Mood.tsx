import ShowChartIcon from "@mui/icons-material/ShowChart";
import { Box, IconContainerProps, Rating, Typography } from "@mui/material";
import { ItemHeader } from "../../../components/item/ItemHeader";
import { ItemContent } from "../../../components/item/ItemContent";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

export const Mood = () => {
  const customIcons: {
    [index: string]: {
      icon: React.ReactElement;
      label: string;
    };
  } = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon fontSize="large" />,
      label: "Angry",
    },
    2: {
      icon: <SentimentDissatisfiedIcon fontSize="large" />,
      label: "Sad",
    },
    3: {
      icon: <SentimentNeutralIcon fontSize="large" />,
      label: "Neutral",
    },
    4: {
      icon: <SentimentSatisfiedAltIcon fontSize="large" />,
      label: "Happy",
    },
    5: {
      icon: <SentimentVerySatisfiedIcon fontSize="large" />,
      label: "Very Happy",
    },
  };
  function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  return (
    <Box sx={{ mb: 5 }}>
      <ItemHeader>
        <ShowChartIcon />
        <Typography variant="h6">{`Mood`}</Typography>
      </ItemHeader>
      <ItemContent styles={{ height: "35vh" }}>
        <Typography gutterBottom sx={{ m: "0 auto" }} align="center">
          {`How are you feeling today?`}
        </Typography>
        <Box sx={{ m: 10, display: "flex", justifyContent: "center" }}>
          <Rating
            highlightSelectedOnly
            IconContainerComponent={IconContainer}
            getLabelText={(value: number) => customIcons[value].label}
          />
        </Box>
      </ItemContent>
    </Box>
  );
};

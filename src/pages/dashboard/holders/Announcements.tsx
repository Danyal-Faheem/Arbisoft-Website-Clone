import { Box, Button, CardHeader, Typography } from "@mui/material";
import { ItemHeader } from "../../../components/item/ItemHeader";
import CampaignIcon from "@mui/icons-material/Campaign";
import { ItemContent } from "../../../components/item/ItemContent";
import WorkIcon from "@mui/icons-material/Work";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CakeIcon from "@mui/icons-material/Cake";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { parseISO } from "date-fns";
import { grayDivider } from "../../../styles/divider";

export const Announcements = () => {
  const dailyAnnouncements = [
    {
      title: "John & 1 more have birthdays today",
      button: {
        text: "Wish Them",
        color: "pink",
      },
      avatar: <CakeIcon sx={{ color: `pink` }} />,
    },
    {
      title: "Smith & 1 more have work anniverseries today",
      button: {
        text: "Wish Them",
        color: "brown",
      },
      avatar: <WorkIcon sx={{ color: `brown` }} />,
    },
    {
      title: "Doe & 3 more joined us recentyl",
      button: {
        text: "Greet Them",
        color: "green",
      },
      avatar: <HandshakeIcon sx={{ color: `green` }} />,
    },
  ];
  const persistentAnnouncements = [
    {
      title: "Jashn-e-Azadi",
      date: `2014-02-11T11:30:30`,
      content: `Hi Folks! 

        The countdown to Jashn-e-Azadi has begun! Get ready to express your love for Pakistan with Arbisoft on the 10th of August. Join us for the hoisting of the flag, rendition of the national anthem, enjoy fun-filled activities, and taste yummy-yummy desi delights!
        
        But wait, there's more! Create a 3 to 5-minute video/clip/short/reel highlighting the community service you've done in the past 12 months as a gift for Pakistan. Share your efforts on Slack (#arbisoft-connect). The video with the most reactions will receive a fantastic prize, recognizing your valuable contributions to society. Keep those entries coming!
        
        Also, we hope you and your team are already thinking about the unique cultural attire that will make you and your team stand out. 
        
        We are eagerly looking forward to welcoming you all on the 10th.`,
    },
    {
      title: "Jashn-e-Azadi",
      date: `2014-02-11T11:30:30`,
      content: `Hi Folks! 

        The countdown to Jashn-e-Azadi has begun! Get ready to express your love for Pakistan with Arbisoft on the 10th of August. Join us for the hoisting of the flag, rendition of the national anthem, enjoy fun-filled activities, and taste yummy-yummy desi delights!
        
        But wait, there's more! Create a 3 to 5-minute video/clip/short/reel highlighting the community service you've done in the past 12 months as a gift for Pakistan. Share your efforts on Slack (#arbisoft-connect). The video with the most reactions will receive a fantastic prize, recognizing your valuable contributions to society. Keep those entries coming!
        
        Also, we hope you and your team are already thinking about the unique cultural attire that will make you and your team stand out. 
        
        We are eagerly looking forward to welcoming you all on the 10th.`,
    },
    {
      title: "Jashn-e-Azadi",
      date: `2014-02-11T11:30:30`,
      content: `Hi Folks! 

        The countdown to Jashn-e-Azadi has begun! Get ready to express your love for Pakistan with Arbisoft on the 10th of August. Join us for the hoisting of the flag, rendition of the national anthem, enjoy fun-filled activities, and taste yummy-yummy desi delights!
        
        But wait, there's more! Create a 3 to 5-minute video/clip/short/reel highlighting the community service you've done in the past 12 months as a gift for Pakistan. Share your efforts on Slack (#arbisoft-connect). The video with the most reactions will receive a fantastic prize, recognizing your valuable contributions to society. Keep those entries coming!
        
        Also, we hope you and your team are already thinking about the unique cultural attire that will make you and your team stand out. 
        
        We are eagerly looking forward to welcoming you all on the 10th.`,
    },
    {
      title: "Jashn-e-Azadi",
      date: `2014-02-11T11:30:30`,
      content: `Hi Folks! 

        The countdown to Jashn-e-Azadi has begun! Get ready to express your love for Pakistan with Arbisoft on the 10th of August. Join us for the hoisting of the flag, rendition of the national anthem, enjoy fun-filled activities, and taste yummy-yummy desi delights!
        
        But wait, there's more! Create a 3 to 5-minute video/clip/short/reel highlighting the community service you've done in the past 12 months as a gift for Pakistan. Share your efforts on Slack (#arbisoft-connect). The video with the most reactions will receive a fantastic prize, recognizing your valuable contributions to society. Keep those entries coming!
        
        Also, we hope you and your team are already thinking about the unique cultural attire that will make you and your team stand out. 
        
        We are eagerly looking forward to welcoming you all on the 10th.`,
    },
  ];
  return (
    <Box sx={{ mb: 5 }}>
      <ItemHeader>
        <CampaignIcon />
        <Typography variant="h6" sx={{ flexGrow: "1" }}>
          {`Announcements`}
        </Typography>
      </ItemHeader>
      <ItemContent styles={{ height: "105vh" }}>
        {dailyAnnouncements.map((announcement, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                ...grayDivider,
              }}
            >
              <CardHeader {...announcement}></CardHeader>
              <Button
                sx={{
                  m: 1,
                  color: `${announcement.button.color}`,
                  border: `1px solid ${announcement.button.color}`,
                }}
              >
                {announcement.button.text}
              </Button>
            </Box>
          );
        })}
        {persistentAnnouncements.map((announcement, index) => {
          return (
            <Box
              key={index}
              sx={{
                p: "20px 10px 10px 10px",
                ...grayDivider,
              }}
            >
              <Typography variant="h6" gutterBottom>
                {announcement.title}
              </Typography>
              <Typography variant="caption" gutterBottom>
                <WatchLaterIcon />{" "}
                {parseISO(String(announcement.date)).toLocaleDateString(
                  undefined,
                  {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  },
                )}
              </Typography>
              <Typography noWrap variant="body2" gutterBottom>
                {announcement.content}
              </Typography>
            </Box>
          );
        })}
      </ItemContent>
    </Box>
  );
};

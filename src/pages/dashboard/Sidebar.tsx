import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { drawerWidth } from "../../utils/constants";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import TvIcon from "@mui/icons-material/Tv";
import HailIcon from "@mui/icons-material/Hail";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LanIcon from "@mui/icons-material/Lan";
import GroupsIcon from "@mui/icons-material/Groups";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

interface ISidebarProps {
  sidebarOpen: boolean;
  handleSidebarOpen: () => void;
  handleSidebarClose: () => void;
}

const items = [
  {
    icon: <HomeOutlinedIcon />,
    text: "Home",
  },
  {
    icon: <WatchLaterIcon />,
    text: "Project Logs",
  },
  {
    icon: <TvIcon />,
    text: "Training",
  },
  {
    icon: <HailIcon />,
    text: "Leave",
  },
  {
    icon: <AttachMoneyIcon />,
    text: "Expense Claims",
  },
  {
    icon: <LanIcon />,
    text: "Organogram",
  },
  {
    icon: <GroupsIcon />,
    text: "Team Review",
  },
  {
    icon: <ListAltIcon />,
    text: "Forms",
  },
  {
    icon: <LocalAtmIcon />,
    text: "Allowances",
  },
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  height: `calc(100% - 64px)`,
  marginTop: `64px`,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  height: `calc(100% - 64px)`,
  marginTop: `64px`,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = ({ sidebarOpen }: ISidebarProps) => {
  return (
    <Drawer variant="permanent" open={sidebarOpen}>
      <Paper elevation={3} sx={{ flexGrow: "1" }}>
        <List>
          {items.map((item, index) => {
            return (
              <ListItemButton key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            );
          })}
        </List>
      </Paper>
    </Drawer>
  );
};

export default Sidebar;

import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import workStreamLogo from "../../assets/logo-white.53057dc7.svg";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { grayDivider } from "../../styles/divider";

interface INavbarProps {
  avatarImage: string;
  sidebarOpen: boolean;
  handleSidebarOpen: () => void;
  handleSidebarClose: () => void;
}

const Navbar = ({
  avatarImage,
  sidebarOpen,
  handleSidebarClose,
  handleSidebarOpen,
}: INavbarProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          onClick={
            sidebarOpen ? () => handleSidebarClose() : () => handleSidebarOpen()
          }
        >
          {sidebarOpen ? (
            <MenuOpenIcon />
          ) : (
            <MenuOpenIcon style={{ transform: `rotate(180deg)` }} />
          )}
        </IconButton>
        <Link href="/dashboard" sx={{ flexGrow: "1" }}>
          <img src={workStreamLogo} style={{ width: "150px" }} />
        </Link>
        <Box>
          <IconButton>
            <HelpOutlinedIcon />
          </IconButton>
          <IconButton>
            <AppsOutlinedIcon />
          </IconButton>
        </Box>
        <Button onClick={handleMenu}>
          <Avatar src={avatarImage} variant="square" />
          <ArrowDropDownOutlinedIcon />
        </Button>
        <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem sx={grayDivider}>{`Paul English`}</MenuItem>
                <MenuItem onClick={handleClose}><PersonIcon/> Profile</MenuItem>
                <MenuItem onClick={handleClose}><PowerSettingsNewIcon/>Logout</MenuItem>
              </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import AvatarLogo from "../../assets/img-6.png";
import { useEffect, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  const [drawerWidth, setDrawerWidth] = useState<number>(240);
  const handleSidebarOpen = () => {
    setOpenSidebar(true);
    setDrawerWidth(240);
  };
  const handleSidebarClose = () => {
    setOpenSidebar(false);
    setDrawerWidth(64);
  };

  const changeView = () => {
    if (window.innerWidth < 1000) {
      handleSidebarClose();
    } else {
      handleSidebarOpen();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", changeView);
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar
        sidebarOpen={openSidebar}
        handleSidebarClose={handleSidebarClose}
        handleSidebarOpen={handleSidebarOpen}
        avatarImage={AvatarLogo}
      />
      <Sidebar
        sidebarOpen={openSidebar}
        handleSidebarClose={handleSidebarClose}
        handleSidebarOpen={handleSidebarOpen}
      />
      <HomePage drawerWidth={drawerWidth} />
      <Footer />
    </ThemeProvider>
  );
};

export default Dashboard;

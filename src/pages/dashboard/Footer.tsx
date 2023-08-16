import { Paper } from "@mui/material";
import appStoreLogo from "../../assets/imgAppleStore.0bbd59d3.svg";
import playStoreLogo from "../../assets/imgGooglePlay.10985e5d.svg";

const Footer = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        m: "0 auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "right",
        width: "100%",
      }}
    >
      <a
        style={{ marginRight: 10 }}
        href="https://apps.apple.com/us/app/workstream-erp/id1592501582"
      >
        <img src={appStoreLogo} width="120px" />
      </a>
      <a
        style={{ marginRight: 10 }}
        href="https://play.google.com/store/apps/details?id=com.arbisoft.workstream&pli=1"
      >
        <img src={playStoreLogo} width="120px" />
      </a>
    </Paper>
  );
};

export default Footer;

import { Box, Container, Divider, Typography } from "@mui/material";
import contactImage from "../../assets/Group_304.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const addresses = [
    `+1 (469) 215 2958
        2035 Central Cir Suite #201 McKinney, TX 75069`,
    `+49 157 39369191
        Köpenicker Str. 40, Berlin, Germany 10179`,
    `(042) 37498533
        25 Canal Rd, Westwood Colony Lahore, Punjab 54000`,
    `10-D (West), 1st Floor Taimur Chambers Fazl-ul-Haq Road, Blue Area Islamabad 44010`,
  ];
  const policies = [
    {
      text: "Privacy Policy",
      link: "https://www.iubenda.com/privacy-policy/58198053",
    },
    {
      text: "Security Policy",
      link: "https://arbisoft.com/security-policy",
    },
    {
      text: "Imprint Policy",
      link: "https://arbisoft.com/imprint",
    },
  ];

  const socialMedia = [
    {
      icon: faFacebook,
      link: "https://www.facebook.com/arbisoft",
    },
    {
      icon: faInstagram,
      link: "https://www.instagram.com/lifeatarbisoft",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/company/arbisoft",
    },
    {
      icon: faTwitter,
      link: "https://twitter.com/arbisoft",
    },
  ];
  return (
    <Box sx={{ bgcolor: "#0d3f8a", p: 2, mt: 5 }}>
      <Container>
        <Box
          sx={{
            m: 5,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            color: "whitesmoke",
          }}
        >
          <Box>
            <Typography gutterBottom>
              {`For job opportunities, reach out to `}{" "}
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                href="mailto:pod@arbisoft.com"
              >{`pod@arbisoft.com`}</a>
            </Typography>
            <Typography gutterBottom>
              {`For business enquiries, reach out to `}{" "}
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                href="mailto:contact@arbisoft.com"
              >{`contact@arbisoft.com`}</a>
            </Typography>
          </Box>
          <img src={contactImage} alt="" width="200" height="200" />
        </Box>
        <Box
          sx={{
            color: "whitesmoke",
            mt: 5,
            mb: 2,
            display: "flex",
            flexFlow: "row-wrap",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {addresses.map((address, index) => {
            return (
              <Typography
                maxWidth={"200px"}
                key={index}
                gutterBottom
                variant="subtitle2"
              >
                {address}
              </Typography>
            );
          })}
        </Box>
        <Divider style={{ backgroundColor: "white" }} flexItem light />
        <Box
          sx={{
            color: "whitesmoke",
            display: "flex",
            flexFlow: "row-wrap",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              mt: 3,
              mb: 3,
              display: "flex",
              flexFlow: "row-wrap",
              flexWrap: "wrap",
              justifyContent: "space-between",
              textAlign: "left",
            }}
          >
            <Typography
              sx={{ mr: 5 }}
            >{`© 2023 Arbisoft. All Rights Reserved.`}</Typography>
            {policies.map((policy, index) => {
              return (
                <Typography sx={{ mr: 5 }} key={index}>
                  <a
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                    href={policy.link}
                  >
                    {policy.text}
                  </a>
                </Typography>
              );
            })}
          </Box>
          <Box
            sx={{
              mt: 3,
              mb: 3,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Typography>{`Find us on: `}</Typography>
            {socialMedia.map((icon, index) => {
              return (
                <a key={index} href={icon.link}>
                  <FontAwesomeIcon
                    icon={icon.icon}
                    style={{
                      backgroundColor: "#0a76db",
                      color: "white",
                      borderRadius: "100%",
                      padding: 5,
                      marginLeft: 10,
                    }}
                  />
                </a>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

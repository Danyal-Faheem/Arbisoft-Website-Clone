import { Box, Typography } from "@mui/material";
import worldBackground from "../../assets/bg-10.8d9aa0ad.png";
import microsoftLogo from "../../assets/Microsoft.svg";

export const Partnerships = () => {
  const images = [
    microsoftLogo,
    "https://images.ctfassets.net/o0a5sen1qlbz/1mowajsTrGxtHgqk73v0X1/9bf3dcc30564afb76603b3363665801b/Mongodb.svg",
    "https://images.ctfassets.net/o0a5sen1qlbz/770bQWCUEi7JLP8TGbNb2C/ffad68757b6a4ea4b94d05e65f67d813/zyte.svg",
    "https://images.ctfassets.net/o0a5sen1qlbz/4rqybTnguH51KnpeCwCsnp/3d4be02cb8913e66303e99bf028f3665/edX.svg",
    "https://images.ctfassets.net/o0a5sen1qlbz/66er28IVuZHtS34cxjFV48/0ea307468933a75d2047b1aac04b335a/Clutch.svg",
    "https://images.ctfassets.net/o0a5sen1qlbz/qYmyG6D7R2dORIbae8I3x/e20bd5f2a63c584d91d8f53fc72c35e0/AWS.svg",
    "https://images.ctfassets.net/o0a5sen1qlbz/7hVZDyWwuqkNDe4fShPZ72/b7922712675d9d87b2d2dadf628ffbe6/Clutch_2.svg",
  ];
  return (
    <>
      <Box
        sx={{
          m: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom align="center" variant="h4">
          {`We're proud of our accomplishments`}
        </Typography>
        <Typography align="center" variant="body1">
          {`As a result of Arbisoft's experience and work ethic, we have formed valuable industry partnerships over the years. This has not only helped us in getting certified from industry leaders, but also in acquiring new businesses and customers.`}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 10,
          pb: 20,
          backgroundImage: `url('${worldBackground}')`,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {images.map((image, index) => {
          return (
            <img
              key={index}
              style={{ marginTop: 5, marginBottom: 5, marginRight: 20 }}
              src={image}
              alt=""
            />
          );
        })}
      </Box>
    </>
  );
};

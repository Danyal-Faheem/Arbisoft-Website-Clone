import { Box, Button, Stack, Typography } from "@mui/material"
import peopleImg from "../../assets/Mask_group__2___1_.png"
import { CustomButton } from "../../components/CustomButton"

export const PeopleDetails = () => {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} sx={{mt: 10, mb: 10}}>
        <img src={peopleImg} alt="" width="100%"/>
        <Box sx={{justifyContent:"center", background: "f4f5f7", mt: "-50", "mb": "-50", "ml": "-110"}}>
            <Typography variant="h2" sx={{"m": 5}}>
                {`We are our people`}
            </Typography>
            <Typography  sx={{"ml": 5}}>
                {`Our team of over 800 blends the skills of engineers, developers, UX architects, and designers to craft impactful solutions. Together, we have aided businesses in their journey toward digital transformation by delivering custom software that drives change.`}
            </Typography>
            <CustomButton styles={{m: 5, bgcolor: "blue", color: "white"}} text={"Learn more"} color="primary" />
        </Box>
    </Stack>
  )
}

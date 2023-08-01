import { Container, Typography } from "@mui/material"

export const JourneyCounter = () => {
  return (
    <Container>
        <Typography display="inline" variant="h2">
            <strong>{`A Journey of `}</strong> 
        </Typography>
        <Typography display="inline" variant="h2" sx={{color: "blue"}}>
             <strong>15 years</strong>
        </Typography>
    </Container>
  )
}

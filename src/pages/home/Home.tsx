import { Container } from "@mui/material"
import { HomePageCarousel } from "./HomePageCarousel"
import { JourneyCounter } from "./JourneyCounter"
import { PeopleDetails } from "./PeopleDetails"
import { WorkGrid } from "./WorkGrid"


export const Home = () => {
  return (
    <>
    <HomePageCarousel/>
    <Container>
    <JourneyCounter/>
    <PeopleDetails/>
    <WorkGrid/>
    </Container>
    </>
  )
}

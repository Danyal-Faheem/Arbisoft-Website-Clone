import { Container } from "@mui/material";
import { HomePageCarousel } from "./HomePageCarousel";
import { JourneyCounter } from "./JourneyCounter";
import { PeopleDetails } from "./PeopleDetails";
import { useState } from "react";
import { RelationshipsCarousel } from "./RelationshipsCarousel";
import { Partnerships } from "./Partnerships";
import { ContactWork } from "./ContactWork";
import { TechnicalSkillSet } from "./TechnicalSkillSet";
import { ClientsFeedback } from "./ClientsFeedback";
import { Grid, GridButtonGroup } from "../../components/Grid";

const Home = () => {
  const [gridChoice, setGridChoice] = useState<string>("Industries");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newChoice: string,
  ) => {
    setGridChoice(newChoice);
  };
  return (
    <>
      <HomePageCarousel />
      <Container>
        <JourneyCounter />
        <PeopleDetails />
        <GridButtonGroup gridChoice={gridChoice} handleChange={handleChange} />
        <Grid gridElement={gridChoice} />
      </Container>
      <RelationshipsCarousel />
      <Container>
        <Partnerships />
      </Container>
      <ClientsFeedback />
      <TechnicalSkillSet />
      <ContactWork />
    </>
  );
};

export default Home;

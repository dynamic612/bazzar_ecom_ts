"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { CarouselCard1 } from "components/carousel-cards";
// CUSTOM DATA MODEL
import MainCarouselItem from "models/Market-1.model";

// ======================================================
type Props = { carouselData: MainCarouselItem[] };
// ======================================================

const Section1 = ({ carouselData }: Props) => {
  return (
    <Box bgcolor="white" mb={7.5}>
      <Container sx={{ py: 4 }}>
        <Carousel slidesToShow={1} arrows={false} dots autoplay>
          {carouselData.map((data, ind) => (
            <CarouselCard1 {...data} key={ind} />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Section1;

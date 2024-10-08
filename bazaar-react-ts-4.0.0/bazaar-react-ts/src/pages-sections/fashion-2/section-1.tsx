"use client";

import { FC } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { CarouselCard1 } from "components/carousel-cards";
// CUSTOM DATA MODEL
import MainCarouselItem from "models/Market-1.model";

// ======================================================
type Props = { carouselData?: MainCarouselItem[] };
// ======================================================

const Section1: FC<Props> = ({ carouselData }) => {
  return (
    <Box bgcolor="grey.100" mb={7.5}>
      <Container sx={{ py: 4 }}>
        <Carousel dots spaceBetween={0} slidesToShow={1} arrows={false}>
          {carouselData.map((item, ind) => (
            <CarouselCard1
              key={ind}
              buttonColor="dark"
              title={item.title}
              imgUrl={item.imgUrl}
              buttonLik={item.buttonLik}
              buttonText={item.buttonText}
              description={item.description}
            />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Section1;

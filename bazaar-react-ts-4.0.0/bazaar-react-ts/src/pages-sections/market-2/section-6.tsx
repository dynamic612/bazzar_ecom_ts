"use client";

import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { H4, Paragraph, Span } from "components/Typography";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";

// STYLED COMPONENT
const BannerBox = styled("div", {
  shouldForwardProp: (prop) => prop !== "img",
})<{ img: string }>(({ theme, img }) => ({
  padding: 32,
  overflow: "hidden",
  borderRadius: "3px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${img})`,
  ...(theme.direction === "rtl" && {
    textAlign: "right",
    "& > .MuiDivider-root": { marginLeft: "auto" },
  }),
}));

const Section6 = () => {
  return (
    <Container sx={{ my: 8 }}>
      <Grid container spacing={3}>
        {/* FINAL REDUCTION BANNER */}
        <Grid item md={6} xs={12}>
          <BannerBox img="/assets/images/banners/banner-21.jpg">
            <H4>Final Reduction</H4>

            <H4 fontSize={27} fontWeight={700}>
              Sale up to 20% Off
            </H4>

            <Divider
              sx={{
                borderColor: "dark.main",
                borderWidth: 1,
                width: 60,
                my: 1,
              }}
            />

            <Paragraph fontSize={16}>
              Only From{" "}
              <Span fontWeight={700} color="primary.main" fontSize={21}>
                {currency(270)}
              </Span>
            </Paragraph>
          </BannerBox>
        </Grid>

        {/* WEEKEND SALE BANNER */}
        <Grid item md={6} xs={12}>
          <BannerBox img="/assets/images/banners/banner-22.jpg">
            <H4 color="white">Weekend Sale</H4>

            <H4 fontSize={27} fontWeight={700} color="white">
              Fine Smart Speaker
            </H4>

            <Divider
              sx={{ borderColor: "white", borderWidth: 1, width: 60, my: 1 }}
            />

            <Paragraph fontSize={16} color="white">
              Starting at{" "}
              <Span fontWeight={700} color="primary.main" fontSize={21}>
                {currency(185)}
              </Span>
            </Paragraph>
          </BannerBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section6;

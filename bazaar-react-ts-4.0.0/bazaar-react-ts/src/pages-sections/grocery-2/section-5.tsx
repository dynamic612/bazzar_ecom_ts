import { FC } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import styled from "@mui/material/styles/styled";
// CUSTOM ICON COMPONENT
import Quote from "icons/Quote";
// Local CUSTOM COMPONENTS
import { FlexBox } from "components/flex-box";
import BazaarCard from "components/BazaarCard";
import { Carousel } from "components/carousel";
import { H5, Paragraph } from "components/Typography";

// STYLED COMPONENTS
const StyledBazaarCard = styled(BazaarCard)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  padding: "2rem 4rem",
  [theme.breakpoints.down("sm")]: { padding: "2rem" },
}));

const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  padding: "4rem 6rem",
  [theme.breakpoints.down("sm")]: { padding: "2rem 4rem" },
}));

const StyledQuote = styled(Quote)(({ theme }) => ({
  opacity: 0.08,
  fontSize: "4rem",
  position: "absolute",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: { fontSize: "3rem" },
}));

const StyledAvatar = styled(Avatar)({
  width: 64,
  height: 64,
  margin: "auto",
  display: "block",
});

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  flexWrap: "wrap",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gap: 16,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

// ======================================================================
type Props = { testimonials: any[] };
// ======================================================================

const Section9: FC<Props> = ({ testimonials = [] }) => {
  return (
    <Carousel slidesToShow={1} spaceBetween={0}>
      {testimonials.map((data, ind) => (
        <StyledBazaarCard key={ind}>
          <StyledFlexBox position="relative" flexWrap="wrap">
            <StyledQuote sx={{ left: 0, top: 0 }} />

            <StyledGridContainer container spacing={1}>
              <Grid item lg={2} md={3}>
                <StyledAvatar src={data.user.avatar} />
              </Grid>

              <Grid item lg={10} md={9}>
                <Paragraph color="grey.700">{data.comment}</Paragraph>
                <H5 mt={1} fontWeight="700">
                  {data.user.name}
                </H5>
              </Grid>
            </StyledGridContainer>

            <StyledQuote
              sx={{ right: 0, bottom: 0, transform: "rotate(180deg)" }}
            />
          </StyledFlexBox>
        </StyledBazaarCard>
      ))}
    </Carousel>
  );
};

export default Section9;

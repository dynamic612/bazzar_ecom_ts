"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styled from "@mui/material/styles/styled";
// GLOBAL CUSTOM COMPONENTS
import BazaarCard from "components/BazaarCard";
import { NavLink2 } from "components/nav-link";
import { H2, Paragraph } from "components/Typography";

// STYLED COMPONENT
const StyledCard = styled(BazaarCard)(({ theme }) => ({
  padding: "3rem 4rem",
  borderRadius: "0",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top right",
  boxShadow: theme.shadows[4],
  backgroundImage: `linear-gradient(to right,#fff 60%, transparent), url(/assets/images/products/bg-gradient.png)`,
  "&:hover": { boxShadow: theme.shadows[2] },
  [theme.breakpoints.down("sm")]: { padding: "2rem" },
}));

const Section6 = () => {
  return (
    <Container sx={{ mb: 8 }}>
      <StyledCard>
        <Box maxWidth={390}>
          <H2 lineHeight={1.3}>Build Your Own Youtube Studio Save Upto 70%</H2>

          <Paragraph color="grey.600" mt="0.5rem" mb="1.5rem">
            Everything you need to create your youtube studio
          </Paragraph>

          <NavLink2 title="DISCOVER EQUIPMENTS" url="#" />
        </Box>
      </StyledCard>
    </Container>
  );
};

export default Section6;

import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { NavLink2 } from "components/nav-link";
import { H1, Paragraph, Span } from "components/Typography";

// STYLED COMPONENT
const StyledGrid = styled(Grid)(({ theme }) => ({
  borderRadius: 4,
  alignItems: "center",
  boxShadow: theme.shadows[4],
  transition: "all 250ms ease-in-out",
  backgroundColor: "#fff",
  border: `1px solid ${theme.palette.grey[200]}`,
  "&:hover": { boxShadow: theme.shadows[3], borderColor: "transparent" },
  [theme.breakpoints.down("sm")]: {
    "&": { padding: "2rem", paddingBottom: 0 },
  },
}));

const ShowcaseCard3 = () => {
  return (
    <StyledGrid container>
      <Grid item sm={5} xs={12}>
        <LazyImage
          alt="t-shirt"
          src={require("../../../../public/assets/images/products/t-shirt2.png")}
          sx={{
            maxHeight: "225px",
            width: "auto",
            mx: "auto",
            display: "flex",
          }}
        />
      </Grid>

      <Grid item sm={7} xs={12} py={4}>
        <Paragraph mb={1}>MENS SHIRTS</Paragraph>

        <H1 lineHeight={1.3}>
          <Span lineHeight={1.3}>Stylish</Span> Genuine <br /> Comfy T-shirts
        </H1>

        <Paragraph mt={1} mb={2} maxWidth={{ md: 350, xs: "100%" }}>
          Handcrafted from genuine Italian leather. One inner compartment with
          black satin lining
        </Paragraph>

        <NavLink2
          url="/shops/scarlett-beauty"
          title="SHOP NOW"
          borderColor="grey.100"
        />
      </Grid>
    </StyledGrid>
  );
};

export default ShowcaseCard3;

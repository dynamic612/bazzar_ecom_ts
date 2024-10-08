import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { NavLink2 } from "components/nav-link";
import { H1, Paragraph, Span } from "components/Typography";

// STYLED COMPONENTS
const StyledBox = styled("div")(({ theme }) => ({
  height: "100%",
  borderRadius: 4,
  boxShadow: theme.shadows[4],
  transition: "all 250ms ease-in-out",
  backgroundColor: "#fff",
  border: `1px solid ${theme.palette.grey[200]}`,
  "&:hover": { boxShadow: theme.shadows[3], borderColor: "transparent" },
  [theme.breakpoints.between("sm", "md")]: {
    "&": { display: "flex", alignItems: "center", padding: "2rem" },
    "& .content": { padding: "0", width: "50%" },
  },
  [theme.breakpoints.down("sm")]: {
    "&": { padding: "2rem" },
    "& .content": { padding: 0, marginTop: 10 },
  },
}));

const StyledImage = styled(LazyImage)(({ theme }) => ({
  padding: "2rem",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("sm")]: { padding: 0 },
  [theme.breakpoints.between("sm", "md")]: { width: "50%", padding: "1rem" },
}));

const ShowcaseCard1 = () => {
  return (
    <StyledBox>
      <StyledImage
        alt="apple-watch-1"
        src={require("../../../../public/assets/images/products/shoes-1.png")}
      />

      <Box p={3} pt={0} className="content">
        <Paragraph mb={1}>SPECIAL OFFER</Paragraph>

        <H1 lineHeight={1.3}>
          <Span lineHeight={1.3}>Comfortable</Span> Original <br /> Cotton
          Sneaker
        </H1>

        <Paragraph mt={1} mb={2}>
          Handcrafted from genuine Italian leather. One inner compartment with
          black satin lining
        </Paragraph>

        <NavLink2
          url="/shops/scarlett-beauty"
          title="SHOP NOW"
          borderColor="grey.100"
        />
      </Box>
    </StyledBox>
  );
};

export default ShowcaseCard1;

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container";
// CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, H4 } from "components/Typography";

// STYLED COMPONENTS
const StyledContent = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  "&:after": {
    content: '" "',
    position: "absolute",
    height: 150,
    width: 150,
    top: 0,
    right: 0,
    background: "#fbeef0",
    zIndex: -1,
    borderRadius: "300px",
    marginRight: -75,
    marginTop: -51,
  },
  "&:before": {
    content: '" "',
    position: "absolute",
    height: 150,
    width: 150,
    bottom: 0,
    left: 0,
    background: theme.palette.grey[300],
    zIndex: -1,
    borderRadius: "300px",
    marginLeft: -75,
    marginBottom: -75,
  },
}));

const Section4 = () => {
  return (
    <Container id="technologies" sx={{ mb: "7rem" }}>
      <H3
        mb={8}
        fontSize={28}
        fontWeight="700"
        textAlign="center"
        color="secondary.main"
        textTransform="uppercase"
      >
        Technologies Used
      </H3>

      <StyledContent>
        <Grid container spacing={3}>
          {list.map((item) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={item.title}>
              <Card
                elevation={3}
                sx={{
                  display: "flex",
                  minHeight: "260px",
                  boxShadow: "large",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box mb={2}>
                  <LazyImage
                    width={60}
                    height={60}
                    alt={item.title}
                    src={item.imgUrl}
                  />
                </Box>
                <H4
                  fontSize="18px"
                  fontWeight="700"
                  maxWidth="200px"
                  textAlign="center"
                  mx="auto"
                >
                  {item.title}
                </H4>
              </Card>
            </Grid>
          ))}
        </Grid>
      </StyledContent>
    </Container>
  );
};

const list = [
  { imgUrl: "/assets/images/logos/react.png", title: "React" },
  { imgUrl: "/assets/images/logos/next-js.png", title: "Next.js" },
  { imgUrl: "/assets/images/logos/typescript.png", title: "TypeScript" },
  { imgUrl: "/assets/images/logos/mui.svg", title: "MUI" },
];

export default Section4;

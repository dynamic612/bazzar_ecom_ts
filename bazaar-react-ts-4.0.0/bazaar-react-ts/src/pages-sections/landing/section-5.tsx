import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container";
import Done from "@mui/icons-material/Done";
// CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { FlexBox } from "components/flex-box";
import { H2, Paragraph, Span } from "components/Typography";

// STYLED COMPONENT
const ImageBox = styled("div")(({ theme }) => ({
  padding: 32,
  display: "flex",
  borderRadius: 16,
  justifyContent: "center",
  backgroundColor: theme.palette.grey[300],
}));

const model = [
  "Product model",
  "User model",
  "Shop model",
  "Order model",
  "Address model",
  "20+ more models",
];

const Section5 = () => {
  return (
    <Box mb={4}>
      <Container>
        <Box my={25}>
          <Grid
            container
            spacing={{ md: 8, xs: 4 }}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item lg={4} md={5} sm={6} xs={10}>
              <ImageBox>
                <LazyImage
                  width={413}
                  height={660}
                  src="/assets/images/landing/product-model.png"
                  alt="product-model"
                />
              </ImageBox>
            </Grid>

            <Grid item lg={4} md={5} sm={6} xs={10}>
              <H2 fontSize={{ md: 28, xs: 27 }}>
                Data structure with Typescript Data models
              </H2>

              <Box mt={3}>
                {model.map((item) => (
                  <FlexBox
                    mb={1}
                    gap={1}
                    key={item}
                    fontWeight={500}
                    color="grey.900"
                    alignItems="center"
                  >
                    <Done color="success" />
                    <Span fontSize={16}>{item}</Span>
                  </FlexBox>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box my={25}>
          <Grid
            container
            spacing={{ md: 8, xs: 4 }}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
              lg={4}
              md={5}
              xs={10}
              textAlign={{ xs: "center", md: "start" }}
            >
              <H2 fontSize={28}>REST API endpoints</H2>

              <Paragraph fontSize={16}>
                Customize and use existing data structure to implement your
                server easily.
              </Paragraph>
            </Grid>

            <Grid item md={6} xs={12}>
              <ImageBox>
                <LazyImage
                  width={634}
                  height={312}
                  alt="rest-api-endpoint"
                  src="/assets/images/landing/rest-api-endpoint.png"
                />
              </ImageBox>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Section5;

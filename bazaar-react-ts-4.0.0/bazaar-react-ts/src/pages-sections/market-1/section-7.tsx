"use client";

import { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import ProductCategoryItem from "./shared/product-category-item";
// GLOBAL CUSTOM COMPONENTS
import { H3 } from "components/Typography";
import { FlexBox } from "components/flex-box";
import BazaarCard from "components/BazaarCard";
import { SectionHeader } from "components/section-header";
import ProductCard1 from "components/product-cards/product-card-1";
// CUSTOM DATA MODELS
import Brand from "models/Brand.model";
import Product from "models/Product.model";

// ======================================================
interface Props {
  shops: any[];
  title: string;
  brands: Brand[];
  productList: Product[];
}
// ======================================================

const Section7: FC<Props> = (props) => {
  const { productList, shops, brands, title } = props;

  const [list, setList] = useState<any[]>([]);
  const [selected, setSelected] = useState("");
  const [type, setType] = useState<"brands" | "shops">("brands");

  const handleCategoryClick = (brand: any) => () => {
    if (selected.match(brand)) setSelected("");
    else setSelected(brand);
  };

  useEffect(() => {
    if (type === "brands") setList(brands);
    else setList(shops);
  }, [brands, shops, type]);

  return (
    <Container sx={{ mb: "70px" }}>
      <FlexBox gap="1.75rem">
        <BazaarCard
          sx={{
            height: "100%",
            padding: "1.25rem",
            borderRadius: "10px",
            display: { xs: "none", md: "block" },
          }}
        >
          <FlexBox mt={-1} mb={1}>
            <H3
              fontSize={20}
              fontWeight={600}
              padding="0.5rem 1rem"
              style={{ cursor: "pointer" }}
              onClick={() => setType("brands")}
              color={type === "brands" ? "grey.900" : "grey.600"}
            >
              Brands
            </H3>
            <H3
              fontSize={20}
              lineHeight="1.3"
              color="grey.400"
              fontWeight={600}
              paddingTop="0.5rem"
            >
              |
            </H3>
            <H3
              fontSize={20}
              fontWeight={600}
              padding="0.5rem 1rem"
              style={{ cursor: "pointer" }}
              onClick={() => setType("shops")}
              color={type === "shops" ? "grey.900" : "grey.600"}
            >
              Shops
            </H3>
          </FlexBox>

          {list.map((item) => (
            <ProductCategoryItem
              key={item.id}
              title={item.name}
              isSelected={!!selected.match(item.slug)}
              onClick={handleCategoryClick(item.slug)}
              imgUrl={
                type === "shops"
                  ? `/assets/images/shops/${item.thumbnail}.png`
                  : item.image
              }
              sx={{
                mb: "0.75rem",
                bgcolor: selected.match(item.slug) ? "white" : "grey.100",
              }}
            />
          ))}

          <ProductCategoryItem
            title={`View All ${type}`}
            isSelected={!!selected.match(`all-${type}`)}
            onClick={handleCategoryClick(`all-${type}`)}
            sx={{ mt: 8, bgcolor: selected.match(`all-${type}`) }}
          />
        </BazaarCard>

        <Box flex="1 1 0" minWidth="0px">
          <SectionHeader title={title} seeMoreLink="#" />

          <Grid container spacing={3}>
            {productList.map((item) => (
              <Grid item lg={4} sm={6} xs={12} key={item.id}>
                <ProductCard1
                  hoverEffect
                  id={item.id}
                  slug={item.slug}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  imgUrl={item.thumbnail}
                  discount={item.discount}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </FlexBox>
    </Container>
  );
};

export default Section7;

import { FC } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import StyledMegaMenu from "./StyledMegaMenu";
// GLOBAL CUSTOM COMPONENTS
import { FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import { NavLink } from "components/nav-link";
import BazaarCard from "components/BazaarCard";
import { H3, Small } from "components/Typography";

// ====================================================================================
type Image = { imgUrl: string; href: string };
type SubCategory = { title: string; href: string };
type Category = { title: string; href?: string; subCategories: SubCategory[] };
type MegaMenu = { categories: Category[]; rightImage?: Image };
type MegaMenuProps = { data: MegaMenu; minWidth?: string };
// ====================================================================================

const MegaMenu3: FC<MegaMenuProps> = ({
  data: { categories, rightImage },
  minWidth = "760px",
}) => {
  return categories ? (
    <StyledMegaMenu>
      <BazaarCard sx={{ ml: "1rem", minWidth }} elevation={2}>
        <FlexBox px={2.5} py={1.75}>
          <Box flex="1 1 0">
            <Grid container spacing={4}>
              {categories?.map((item, ind) => (
                <Grid item md={3} key={ind}>
                  {item.href ? (
                    <NavLink className="title-link" href={item.href}>
                      {item.title}
                    </NavLink>
                  ) : (
                    <div className="title-link">{item.title}</div>
                  )}

                  {item.subCategories?.map((sub, ind) => (
                    <NavLink className="child-link" href={sub.href} key={ind}>
                      {sub.title}
                    </NavLink>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>

          {rightImage && (
            <Link href={rightImage.href}>
              <Box position="relative" width="153px" height="100%">
                <LazyImage alt="banner" src={rightImage.imgUrl} />
              </Box>
            </Link>
          )}
        </FlexBox>

        <Link href="/sale-page-2">
          <Grid
            className="h-full"
            container
            spacing={0}
            wrap="wrap-reverse"
            alignItems="center"
          >
            <Grid item sm={6} xs={12}>
              <Box px={2.5}>
                <H3 mb={1}>Big Sale Upto 60% Off</H3>

                <Box color="grey.600" mb={1}>
                  Handcrafted from genuine Italian Leather
                </Box>

                <Small
                  fontWeight="700"
                  borderBottom="2px solid"
                  borderColor="primary.main"
                >
                  SHOP NOW
                </Small>
              </Box>
            </Grid>

            <Grid item sm={6} xs={12}>
              <FlexBox
                height="160px"
                position="relative"
                flexDirection="column"
                justifyContent="flex-end"
              >
                <LazyImage
                  alt="model"
                  width={292}
                  height={195}
                  src="/assets/images/models/model-1.png"
                />
              </FlexBox>
            </Grid>
          </Grid>
        </Link>
      </BazaarCard>
    </StyledMegaMenu>
  ) : null;
};

export default MegaMenu3;

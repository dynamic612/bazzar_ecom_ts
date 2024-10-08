import { FC } from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import { alpha, styled } from "@mui/material/styles";
// MUI ICON COMPONENTS
import Call from "@mui/icons-material/Call";
import East from "@mui/icons-material/East";
import Place from "@mui/icons-material/Place";
// GLOBAL CUSTOM COMPONENTS
import { H3, Span } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";
// CUSTOM DATA MODEL
import Shop from "models/Shop.model";

// STYLED COMPONENT
const ContentWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "img",
})<{ img: string }>(({ theme, img }) => ({
  color: "white",
  backgroundSize: "cover",
  padding: "17px 30px 56px",
  backgroundPosition: "center",
  backgroundImage: `linear-gradient(to bottom,
    ${alpha(theme.palette.grey[900], 0.8)}, ${alpha(
      theme.palette.grey[900],
      0.8,
    )}), 
    url(${img})`,
}));

const ShopCard: FC<Partial<Shop>> = (props) => {
  const { name, rating, address, phone, coverPicture, profilePicture, slug } =
    props || {};

  return (
    <Card>
      <ContentWrapper img={coverPicture || "/assets/images/banners/cycle.png"}>
        <H3 fontWeight="600" mb={1}>
          {name}
        </H3>

        <Rating
          value={rating || 0}
          color="warn"
          size="small"
          readOnly
          sx={{ mb: "0.75rem" }}
        />

        <FlexBox mb={1} gap={1}>
          <Place fontSize="small" sx={{ fontSize: 17, mt: "3px" }} />
          <Span color="white">{address}</Span>
        </FlexBox>

        <FlexBox alignItems="center" gap={1}>
          <Call fontSize="small" sx={{ fontSize: 17 }} />
          <Span color="white">{phone}</Span>
        </FlexBox>
      </ContentWrapper>

      <FlexBetween pl={3} pr={1}>
        <Avatar
          alt={name}
          src={profilePicture}
          sx={{
            width: 64,
            height: 64,
            mt: "-32px",
            border: "3px solid",
            borderColor: "grey.100",
          }}
        />

        <Link href={`/shops/${slug}`}>
          <IconButton sx={{ my: 0.5 }}>
            <East
              sx={{
                fontSize: 19,
                transform: ({ direction }) =>
                  `rotate(${direction === "rtl" ? "180deg" : "0deg"})`,
              }}
            />
          </IconButton>
        </Link>
      </FlexBetween>
    </Card>
  );
};

export default ShopCard;

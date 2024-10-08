import { FC } from "react";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import styled from "@mui/material/styles/styled";
import Box, { BoxProps } from "@mui/material/Box";
// GLOBAL CUSTOM COMPONENTS
import BazaarImage from "components/BazaarImage";
import { H2, Paragraph } from "components/Typography";

// STYLED COMPONENTS
const CardWrapper = styled(Box)({
  maxHeight: 240,
  overflow: "hidden",
  borderRadius: "10px",
  position: "relative",
  "& img": { transition: "0.3s" },
  ":hover": { img: { transform: "scale(1.1)" } },
});

const CardContent = styled(Box, {
  shouldForwardProp: (props) => props !== "contentAlign",
})<{ contentAlign: "right" | "left" }>(({ contentAlign }) => ({
  top: 0,
  zIndex: 1,
  color: "#fff",
  height: "100%",
  display: "flex",
  position: "absolute",
  flexDirection: "column",
  justifyContent: "center",
  ...(contentAlign === "left"
    ? { left: 32 }
    : { right: 32, alignItems: "flex-end" }),
}));

const CardLink = styled("span")({
  position: "relative",
  paddingBottom: "2px",
  textTransform: "uppercase",
  ":hover::after": { width: "100%" },
  ":after": {
    left: 0,
    bottom: 0,
    width: "0%",
    content: "''",
    height: "2px",
    transition: "0.3s",
    position: "absolute",
    backgroundColor: "white",
  },
});

// ========================================================
interface Props extends BoxProps {
  img: string;
  url: string;
  title: string;
  subTitle: string;
  contentPosition?: "left" | "right";
}
// ========================================================

const BannerCard1: FC<Props> = ({
  img,
  url,
  title,
  subTitle,
  contentPosition = "left",
  ...props
}) => {
  return (
    <CardWrapper {...props}>
      <BazaarImage alt="category" height="100%" width="100%" src={img} />

      <CardContent contentAlign={contentPosition} className="content">
        <H2>{title}</H2>
        <Paragraph>{subTitle}</Paragraph>
        <Divider sx={{ borderWidth: 2, my: 1.5, width: 50 }} />

        <Link href={url}>
          <CardLink>Shop Now</CardLink>
        </Link>
      </CardContent>
    </CardWrapper>
  );
};

export default BannerCard1;

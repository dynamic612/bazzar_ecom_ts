import { FC } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";
// GLOBAL CUSTOM COMPONENTS
import BazaarImage from "components/BazaarImage";
import { H1, H3, Paragraph } from "components/Typography";

// STYLED COMPONENTS
const CardWrapper = styled("div")({
  maxHeight: 240,
  overflow: "hidden",
  borderRadius: "10px",
  position: "relative",
  "& img": { transition: "0.3s" },
  ":hover": { img: { transform: "scale(1.1)" } },
});

const CardContent = styled("div")({
  top: 0,
  zIndex: 1,
  padding: 32,
  width: "100%",
  color: "#fff",
  height: "100%",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  justifyContent: "space-between",
});

// ========================================================
interface Props {
  img: string;
  url: string;
  text1: string;
  text2: string;
  text3: string;
}
// ========================================================

const BannerCard: FC<Props> = ({ img, url, text1, text2, text3 }) => {
  return (
    <CardWrapper>
      <BazaarImage alt="category" height="100%" width="100%" src={img} />

      <CardContent>
        <div>
          <Paragraph fontWeight={600}>{text1}</Paragraph>
          <H3>{text2}</H3>
          <H1 fontSize={52} lineHeight={1}>
            {text3}
          </H1>
        </div>

        <Button
          LinkComponent={Link}
          href={url}
          variant="outlined"
          size="large"
          color="info"
        >
          Shop Now
        </Button>
      </CardContent>
    </CardWrapper>
  );
};

export default BannerCard;

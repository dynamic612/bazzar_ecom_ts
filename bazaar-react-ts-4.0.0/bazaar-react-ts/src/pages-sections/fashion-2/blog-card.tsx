import { FC } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { NavLink3 } from "components/nav-link";
import { FlexRowCenter } from "components/flex-box";
import { H4, Paragraph } from "components/Typography";

// STYLED COMPONENTS
const ImageBox = styled(Box)({
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  "& img": { transition: "0.3s" },
  ":hover": { "& img": { transform: "scale(1.1)" } },
});

const DateBox = styled(FlexRowCenter)(({ theme }) => ({
  top: 30,
  left: 30,
  width: 50,
  height: 50,
  textAlign: "center",
  position: "absolute",
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.grey[200],
}));

// =====================================================
interface Props {
  date: string;
  image: string;
  title: string;
  description: string;
}
// =====================================================

const BlogCard: FC<Props> = ({ image, title, date, description }) => {
  return (
    <Card sx={{ borderRadius: 0, boxShadow: 2 }}>
      <ImageBox m={2} maxHeight={220}>
        <LazyImage width={580} height={272} src={image} alt="blog-1" />

        <DateBox>
          <Paragraph width="min-content" lineHeight={1} fontWeight={600}>
            {date}
          </Paragraph>
        </DateBox>
      </ImageBox>

      <Box px={2} pt={1} pb={3}>
        <Link href="/">
          <H4 fontWeight={700}>{title}</H4>
        </Link>

        <Paragraph mt={0.5} mb={3}>
          {description}
        </Paragraph>

        <NavLink3 text="Read More" href="/" />
      </Box>
    </Card>
  );
};

export default BlogCard;

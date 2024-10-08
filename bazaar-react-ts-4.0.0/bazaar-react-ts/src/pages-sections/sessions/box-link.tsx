import Link from "next/link";
import Box from "@mui/material/Box";

// ==============================================================
interface Props {
  title: string;
  href: string;
}
// ==============================================================

const BoxLink = ({ href, title }: Props) => (
  <Box
    href={href}
    component={Link}
    fontWeight={600}
    borderColor="grey.900"
    borderBottom="1px solid"
  >
    {title}
  </Box>
);

export default BoxLink;

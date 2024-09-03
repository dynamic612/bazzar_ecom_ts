import Box, { BoxProps } from "@mui/material/Box";

const FlexBetween = ({ children, ...props }: BoxProps) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    {...props}
  >
    {children}
  </Box>
);

export default FlexBetween;

import { FC } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENT
import PersonOutline from "@mui/icons-material/PersonOutline";
// GLOBAL CUSTOM COMPONENT
import { FlexBox } from "components/flex-box";
// CUSTOM ICON COMPONENT
import ShoppingBagOutlined from "icons/ShoppingBagOutlined";
// GLOBAL CUSTOM HOOK
import useCart from "hooks/useCart";

// ==============================================================
interface Props {
  toggleDialog: () => void;
  toggleSidenav: () => void;
}
// ==============================================================

const LoginCartButtons: FC<Props> = ({ toggleDialog, toggleSidenav }) => {
  const { state } = useCart();

  return (
    <FlexBox gap={1.5} alignItems="center">
      <Box
        component={IconButton}
        p={1.25}
        bgcolor="grey.200"
        onClick={toggleDialog}
      >
        <PersonOutline />
      </Box>

      <Badge badgeContent={state.cart.length} color="primary">
        <Box
          p={1.25}
          bgcolor="grey.200"
          component={IconButton}
          onClick={toggleSidenav}
        >
          <ShoppingBagOutlined />
        </Box>
      </Badge>
    </FlexBox>
  );
};

export default LoginCartButtons;

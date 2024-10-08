import Link from "next/link";
import { FC, Fragment, ReactElement } from "react";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx";
// LOCAL CUSTOM HOOKS
import useHeader from "./use-header";
// GLOBAL CUSTOM COMPONENTS
import Image from "components/BazaarImage";
import { FlexBox } from "components/flex-box";
// LOCAL CUSTOM COMPONENTS
import MobileHeader from "./mobile-header";
import DialogDrawer from "./dialog-drawer";
import CategoriesMenu from "./categories-menu";
import LoginCartButtons from "./login-cart-buttons";
// STYLED COMPONENTS
import { HeaderWrapper, StyledContainer } from "./styles";

// ==============================================================
interface Props {
  isFixed?: boolean;
  className?: string;
  searchInput: ReactElement;
}
// ==============================================================

const Header: FC<Props> = ({ isFixed, className, searchInput }) => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down(1150));
  const { dialogOpen, sidenavOpen, toggleDialog, toggleSidenav } = useHeader();

  const CONTENT_FOR_LARGE_DEVICE = (
    <Fragment>
      {/* LEFT CONTENT - LOGO AND CATEGORY */}
      <FlexBox mr={2} minWidth="170px" alignItems="center">
        <Link href="/">
          <Image height={44} src="/assets/images/logo2.svg" alt="logo" />
        </Link>

        {/* SHOW DROP DOWN CATEGORY BUTTON WHEN HEADER FIXED */}
        {isFixed ? <CategoriesMenu /> : null}
      </FlexBox>

      {/* SEARCH FORM */}
      <FlexBox justifyContent="center" flex="1 1 0">
        {searchInput}
      </FlexBox>

      {/* LOGIN AND CART BUTTON */}
      <LoginCartButtons
        toggleDialog={toggleDialog}
        toggleSidenav={toggleSidenav}
      />

      {/* LOGIN FORM DIALOG AND CART SIDE BAR  */}
      <DialogDrawer
        dialogOpen={dialogOpen}
        sidenavOpen={sidenavOpen}
        toggleDialog={toggleDialog}
        toggleSidenav={toggleSidenav}
      />
    </Fragment>
  );

  return (
    <HeaderWrapper className={clsx(className)}>
      <StyledContainer>
        {downMd ? (
          <MobileHeader searchInput={searchInput} />
        ) : (
          CONTENT_FOR_LARGE_DEVICE
        )}
      </StyledContainer>
    </HeaderWrapper>
  );
};

export default Header;

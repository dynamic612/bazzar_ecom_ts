import { FC } from "react";
import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";
// CUSTOM ICON COMPONENTS
import appIcons from "icons";
// GLOBAL CUSTOM COMPONENTS
import { FlexBox } from "components/flex-box";
import { H4, Span } from "components/Typography";
// CUSTOM DATA MODEL
import Service from "models/Service.model";

// STYLED COMPONENT
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  flexWrap: "wrap",
  padding: "1.5rem",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.grey[400]}`,
  [theme.breakpoints.between("sm", "md")]: {
    textAlign: "center",
    padding: "1rem 0.5rem",
    flexDirection: "column",
  },
}));

// ==========================================================
type Props = { services: Service[] };
// ==========================================================

const Section2: FC<Props> = ({ services = [] }) => {
  return (
    <div>
      <Grid container spacing={3}>
        {services.map((item, ind) => {
          const Icon = appIcons[item.icon];

          return (
            <Grid item lg={4} sm={6} xs={12} key={ind}>
              <StyledFlexBox gap={2} alignItems="center">
                <Icon sx={{ fontSize: 50, color: "grey.600" }} />

                <div>
                  <H4 color="grey.900" fontSize={20} fontWeight={700}>
                    {item.title}
                  </H4>
                  <Span color="grey.600">{item.description}</Span>
                </div>
              </StyledFlexBox>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Section2;

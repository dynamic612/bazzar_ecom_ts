import { FC } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

// ==============================================================
type Props = { address: string };
// ==============================================================

const ShippingAddress: FC<Props> = ({ address }) => {
  return (
    <Card sx={{ px: 3, py: 4 }}>
      <TextField
        rows={5}
        multiline
        fullWidth
        color="info"
        variant="outlined"
        label="Shipping Address"
        defaultValue={address}
        sx={{ mb: 4 }}
      />

      <TextField
        rows={5}
        multiline
        fullWidth
        color="info"
        variant="outlined"
        label="Customer’s Note"
        defaultValue="Please deliver ASAP."
      />
    </Card>
  );
};

export default ShippingAddress;

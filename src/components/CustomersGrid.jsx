import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Customer from "./Customer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CustomersGrid(props) {
  const { customers } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {customers.map((customer, index) => (
          <Grid item xs={12} sm={4} md={4} key={customer.Id}>
            <div style={{ width: "100%", margin: "0 auto" }}>
              <Customer key={customer.Id} customer={customer} />
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

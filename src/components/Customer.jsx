import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import CustomerCalls from "./CustomerCalls";
import { Button } from "@mui/material";

export default function Customer(props) {
  const [isModalOpen, setisModalOpen] = React.useState(false);
  const { customer } = props;

  return (
    <>
      <Card sx={{ maxWidth: 600 }}>
        <CardHeader
          sx={{ textAlign: "left" }}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {customer.Name.split("")[0].toUpperCase()}
            </Avatar>
          }
          title={customer.Name}
          subheader={customer.city}
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            Total calls: {customer.callRecords.length}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            Total call time: {customer.totalCallTime}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button onClick={() => setisModalOpen(true)}>Show details</Button>
        </CardActions>
      </Card>
      {isModalOpen && (
        <CustomerCalls
          customer={customer}
          handleClose={() => setisModalOpen(false)}
        />
      )}
    </>
  );
}

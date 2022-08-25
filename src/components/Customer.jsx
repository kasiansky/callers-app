import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomerCalls from "./CustomerCalls";
import { Button } from "@mui/material";

export default function Customer(props) {
  const [expanded, setExpanded] = React.useState(false);
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

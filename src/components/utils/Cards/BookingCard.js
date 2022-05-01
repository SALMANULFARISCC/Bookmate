

import React from "react";
import { useState, useEffect } from "react";

// material components
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import { db } from "../../../Firebase/firebase";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BookingCard(book) {
  console.log(book.data);
  const [expanded, setExpanded] = React.useState(false);
  




  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width:"30%", bgcolor: "#F4F6F8",ml:5,minWidth:"24%"}}>
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={book.data.bookedId[0].image}
        />}
        title={book.data.bookedId[0].name}
        subheader={book.data.bookedId[0].phoneNumber}
      />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {" "}
        <CardMedia>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Card sx={{ width: "80%" }}>
              <CardMedia
                component="img"
                sx={{ width: "100%" }}
                image={book.data.image}
                alt="Paella dish"
                /* Rectangle 8 */
              />
            </Card>
          </Grid>
        </CardMedia>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <CardContent>
          <Typography variant="head3" align="" color="black">
          {book.data.name}
                    </Typography>
        </CardContent>
      </Grid>
    </Card>
  );
}

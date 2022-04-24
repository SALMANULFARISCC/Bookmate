import React from "react";
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

export default function BookingCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width:"30%", bgcolor: "#F4F6F8",ml:5,minWidth:"24%"}}>
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" />}
        title="Janith"
        subheader="September 14, 2020"
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
                image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564"
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
            The Life of a Man
          </Typography>
        </CardContent>
      </Grid>
    </Card>
  );
}

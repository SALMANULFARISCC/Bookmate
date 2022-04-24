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
import { Grid, Link, Stack } from "@mui/material";

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

export default function BookCard(data) {
  // console.log(data);
  const bookData = data.data;
  console.log(bookData);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: "20%", bgcolor: "#F4F6F8", ml: 5 }}>
      <Grid container direction="row">
        {" "}
        <CardMedia
          component="img"
          sx={{}}
          image={bookData.image}
          alt="Paella dish"
          /* Rectangle 8 */
        />
      </Grid>
      <Grid
        container
        direction="row"
        // justifyContent="center"
        alignItems="center"
      >
        <CardContent>
          <Link href={`book/booking/view/${bookData.id}`} underline="none">
            <Typography variant="subtitle1" align="" color="#212B36">
              {bookData && bookData.name}
            </Typography>
          </Link>
          <Stack direction="row">
            <Typography sx={{ pr: 2, fontSize: 12 }}>
              {bookData && bookData.language}
            </Typography>
            <Typography sx={{ pr: 2, fontSize: 12 }}>
              {bookData && bookData.author}
            </Typography>
          </Stack>
        </CardContent>
      </Grid>
    </Card>
  );
}

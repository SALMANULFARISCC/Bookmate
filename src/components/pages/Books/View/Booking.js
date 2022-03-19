import BookingCard from "../../../utils/Cards/BookingCard";
import BookingList from "./BookingList";
import { Card, Typography, Grid, Stack, Box, Container } from "@mui/material";
import Page from "../../../utils/Page";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";

export default function Booking() {
  return (
    <Page title="Booking">
      <Container>
      <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems="baseline"
            spacing={2}
          >
            <Typography variant="h5" fontFamily={"Roboto"} sx={{ pl: 2 }}>
              Newest Booking
            </Typography>
            <Box>
              <IconButton size="small">
                {" "}
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton size="small">
                {" "}
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Stack>
          <Typography
            varient="h7"
            fontFamily={"Roboto"}
            sx={{ color: "#626161", pl: 2, pb: 2 }}
          >
            12 booking
          </Typography>
        <Card  sx={{ pt: 3, pb: 3}}>
        
          <Grid></Grid>



          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: "flex" }}>
            <BookingCard></BookingCard>
            <BookingCard sx={{}}></BookingCard>
            <BookingCard></BookingCard>
            <BookingCard></BookingCard>
            <BookingCard></BookingCard>
          </Grid>

          {/* <BookingCard></BookingCard> */}
        </Card>
        <Typography variant="h5" fontFamily={"Roboto"} sx={{ pl: 2 ,pt:5}}>
               Booking List
            </Typography>
        <BookingList />
        
      </Container>
    </Page>
  );
}

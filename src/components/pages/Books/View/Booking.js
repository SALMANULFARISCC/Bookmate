import {
  collection,
  setDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import BookingCard from "../../../utils/Cards/BookingCard";
import BookingList from "./BookingList";
import { Card, Typography, Grid, Stack, Box, Container } from "@mui/material";
import Page from "../../../utils/Page";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import { shadows } from "@mui/system";
import { useRef, useEffect, useState, useContext } from "react";

import userContext from "../../../../Context/userContext";

import { db } from "../../../../Firebase/firebase";

import styled from "styled-components";

const ScrollContainer = styled(Grid)`
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default function Booking() {
  const ref = useRef(null);
  const handleScroll = () => (ref.current.scrollLeft += 150);
  const handleScrollBack = () => (ref.current.scrollLeft -= 150);

  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "books"));
        querySnapshot.forEach((doc) => {
          // console.log("i am here",{ id: doc.isBooked})
          // if(doc.isBooked === false){
          list.push({ id: doc.id, ...doc.data() });
          // }
        });
        // console.log(list);
        const filteredBooks = list.filter((book) =>{
          return book.isBooked === true;
        });
        console.log(filteredBooks);
        setBookData(filteredBooks)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

  },[]
  )
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
            <IconButton size="small" onClick={handleScrollBack}>
              {" "}
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton size="small" onClick={handleScroll}>
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

        <Grid></Grid>

        <ScrollContainer item xs={12} sm={12} md={12} lg={12} ref={ref}>
        {bookData && bookData.map(book =>( <BookingCard data={book} />))}
        </ScrollContainer>

        {/* <BookingCard></BookingCard> */}
        <Typography variant="h5" fontFamily={"Roboto"} sx={{ pl: 2, pt: 5 }}>
          Booking Details
        </Typography>
        <BookingList />
      </Container>
    </Page>
  );
}

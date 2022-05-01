import { BookSharp } from "@mui/icons-material";

import { useState, useEffect } from "react";

import { Stack, Button, Container, Typography, Grid } from "@mui/material";
import BookCard from "../../../utils/Cards/BookCard";
import SearchBox from "../../../utils/Search/Search";
import Page from "../../../utils/Page";

import { db } from "../../../../Firebase/firebase";
import {
  collection,
  setDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function Books() {
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "books"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBookData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, {});
  console.log(bookData);

  return (
    <Page title="Books">
      <Container>
        <Grid>
          <Grid
            sx={{ pl: 5 }}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <SearchBox />
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            sx={{ pt: 10, gap: 1 }}
          >
            {bookData && bookData.map(book =>( <BookCard data={book} />))}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

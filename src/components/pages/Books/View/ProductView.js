import {
  Card,
  CardMedia,
  Typography,
  Grid,
  Stack,
  Box,
  CardContent,
  Button,
} from "@mui/material";
import {
  collection,
  setDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,

} from "firebase/firestore";

import { useState, useEffect } from "react";


import { green } from "@mui/material/colors";
import { CustomButton } from "../../../utils/Button/CustomButton";
import styled from "styled-components";
import {Container} from "../../../utils/Cards/LabelCard";
import { useParams } from "react-router-dom";

import { db } from "../../../../Firebase/firebase";
const bookCollectionRef = collection(db, "books");


export default function ProductView() {
  const {id} = useParams();
  const [bookData ,setBookData] = useState([]);

  // local Storage
//  const userNew = localStorage.getItem(data);
//  console.log(userNew)
  //Add booking
const bookId = bookData.id;
console.log(bookId);

  const updateBook = async (id) => { 
      const bookDoc = doc(db, "books", id);
      const newFields = { 
        // bookedId: userId,
        isBooked: true,     
      };
      await updateDoc(bookDoc, newFields);
    };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "books"));
        querySnapshot.forEach((doc) => {
          //list.push({ id: doc.id, ...doc.data() });
          if(doc.id===id){
            setBookData({ id: doc.id, ...doc.data() });          }
        });
        // setBookData();
        // console.log();
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, {});
  console.log(bookData);
  //is booked
const booked = (bookData.isBooked);

  return (
    <Card>
      <Stack direction="row" spacing={4}>
        <CardMedia
          component="img"
          sx={{ width: "28%", borderRadius: 5, pl: 1, pb: 1, pt: 1 }}
          image={bookData.image}
          /* Rectangle 8 */
        />
        <Stack direction="column" sx={{ pt:5, pl: 1 }}>
          {/* <Container color="#229A16" background="#E3F9DD">IN STOCK</Container> */}
          {/* <Typography sx={{ pt: 2, color: "red" }} variant="subtitle1">
            SALE
          </Typography> */}
          <Typography sx={{ pt: 2 }} variant="h3">
            {bookData.name}
          </Typography>
          <Stack direction="row" >
            <Typography variant="subtitle2" color="#6C6C6C" sx={{pr:2}}>{bookData.language}</Typography>
            <Typography variant="subtitle2" color="#6C6C6C" >{bookData.author}</Typography>
          </Stack>
          <Typography sx={{ pt: 3, width: 600 }}>
            {bookData.description}

          </Typography>
          <Stack direction="row" sx={{ pt: 13, gap: 4 }}>
            {/* <CustomButton
              type="button"
              buttonStyle="btn--secondary--solid"
              buttonSize="btn--medium"
            >
              Add To Cart{" "}
            </CustomButton> */}

            {/* <Button variant="contained" size="large" color="success">Book Now</Button> */}
            <CustomButton
              type="button"
              // disabled={}
              buttonStyle="btn--primary--solid"
              buttonSize="btn--large"
              onClick={() => {
                updateBook(bookData.id, bookData.bookedId);
              }}            >
              Book Now{" "}
            </CustomButton>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

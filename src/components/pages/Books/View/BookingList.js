import { Link as RouterLink } from 'react-router-dom';
// material components
import {
  Stack,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { useState, useEffect } from "react";


// material icons
import AddIcon from '@mui/icons-material/Add';
// page wrapper for dynamic meta tags
import Page from '../../../utils/Page';
import DataTable from '../../../utils/DataTable';
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

// table header cell config
const TABLE_HEAD = [
  {id: 'stack', label:"Booker", alignRight: false,type:"stack"},
  { id: 'booker',  alignRight: false,type:"text" },
  { id: 'checkIn', label: 'Check In', alignRight: false ,type:"text"},
  { id: 'checkOut', label: 'Check Out', alignRight: false ,type:"text"},
  { id: 'status', label: 'Status', alignRight: false ,type:"text"},
  { id: 'phone', label: 'Phone', alignRight: false ,type:"text"},
  { id: 'bookName', label: 'Book Name', alignRight: false ,type:"text"},
  { id: 'BookType', label: 'Book Type', alignRight: false ,type:"text"},
];

const TABLE_DATA =[
    {
        id:"134doojon",
        booker:"Manu",
        checkIn:"12/03/2022",
        checkOut:"18/03/2022",
        status:"pending",
        phone:"960587401",
        bookName:"The Best Of Luck",
        BookType:"Novel"       
    },
    {
        id:"134doojon",
        booker:"Manu",
        checkIn:"12/03/2022",
        checkOut:"18/03/2022",
        status:"pending",
        phone:"960587401",
        bookName:"The Best Of Luck",
        BookType:"Novel"       
    },
    {
        id:"134doojon",
        booker:"Manu",
        checkIn:"12/03/2022",
        checkOut:"18/03/2022",
        status:"pending",
        phone:"960587401",
        bookName:"The Best Of Luck",
        BookType:"Novel"       
    },
    {
        id:"134doojon",
        booker:"Manu",
        checkIn:"12/03/2022",
        checkOut:"18/03/2022",
        status:"pending",
        phone:"960587401",
        bookName:"The Best Of Luck",
        BookType:"Novel"       
    },
]


export default function BookingList() {
  

  return (
    <Page title="BookList">
      <Container>
    
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>

        </Stack>
        <DataTable
            TABLE_DATA={TABLE_DATA}
            TABLE_HEAD={TABLE_HEAD}
        />
      </Container>
    </Page>
  );
}
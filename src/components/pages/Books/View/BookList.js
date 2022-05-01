import { Link as RouterLink } from 'react-router-dom';

import { useState,useEffect } from "react";

// material components
import {
  Stack,
  Button,
  Container,
  Typography,
} from '@mui/material';

import {
  collection,
  setDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"

// material icons
import AddIcon from '@mui/icons-material/Add';
// page wrapper for dynamic meta tags
import Page from '../../../utils/Page';
import DataTable from '../../../utils/DataTable';
import LabelCard from '../../../utils/Cards/LabelCard'

//import from firebase
import { db } from "../../../../Firebase/firebase";



// table header cell config
const TABLE_HEAD = [
  { id: 'name', label: 'Book Name', alignRight: false,type:"text" },
  { id: 'category', label: 'Category', alignRight: false ,type:"text"},
  { id: 'author', label: 'Author', alignRight: false ,type:"text"},
  { id: 'language', label: 'Language', alignRight: false ,type:"text"},
  { id: 'shelfCode', label: 'Shelf Code', alignRight: false ,type:"text"},
];






export default function BookList() {

  const [bookData , setBookData] = useState([]);
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

  },{}

  )
console.log(bookData);
     

  return (
    <Page title="BookList">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
           Book List
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/book/add"
            startIcon={<AddIcon/>}
          >
            Add Book
          </Button>
        </Stack>
        
            {bookData && 
              <DataTable TABLE_DATA={bookData} TABLE_HEAD={TABLE_HEAD} />
              }
      </Container>
    </Page>
  );
}
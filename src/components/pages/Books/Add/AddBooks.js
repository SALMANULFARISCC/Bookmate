import { useState } from "react";

// material components
import {
  Stack,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  styled,
  Tooltip,
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";
import ImageUpload from "../../../utils/Inputs/ImageUpload";

//firebase
import { db,storage } from "./../../../../Firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import useConfirm from "../../../hook/useConfirm"


import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

//profile card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

// table header cell config

export default function AddBook() {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [bookId, setBookId] = useState("");
  const [shelfCode, setShelfCode] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [profileImage, setProfileImage] = useState("")

  const [file, setFile] = useState();
  const [data,setData] = useState();
  const [per, setPerc] = useState(null);

  const bookCollectionRef = collection(db, "books");

  const {ConfirmSnack,confirmToggler } = useConfirm(
    "Book Added succesfuly"
  )


   //To clear the user input
   const clearBookCredentials = () => {
    setBookName("");
    setAuthor("");
    setCategory("");
    setBookId("");
    setShelfCode("");
    setLanguage("");
    setDescription("");
    setProfileImage("")
    setFile("")


  };


  //image upload

  const uploadFile = (e) => {
    e.preventDefault();
    const name = new Date().getTime() + file.name;

      const storageRef = ref(storage, `bookImage/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            handleAddBook(downloadURL);
          });
        }
      );
  };

  //add book

  const handleAddBook = async (imageUrl) => {
    await addDoc(bookCollectionRef, {
      name: bookName,
      author: author,
      category: category,
      shelfCode: shelfCode,
      language: language,
      description: description,
      image:imageUrl,
      bookedId:"",
      isBooked:false,
    });
    confirmToggler();
    clearBookCredentials();
  };

 

  
  return (
    <Page title="AddBook">
      <Container>
      <ConfirmSnack/>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            Add Book
          </Typography>
        </Stack>
        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p: 2 }}
          container
          spacing={2}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <ImageUpload image={file} setImage={setFile} value={file} />
            {file === "" && (
              <Typography sx={{ mt: 2 }} variant="body2" color="error">
                Profile image is required
              </Typography>
            )}
            <Typography sx={{ mt: 2, color: "gray" }} variant={"body2"}>
              Allowed *.jpeg, *.jpg, *.png, *.gif <br />
              max size: 1MB
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextField
              varient="contained"
              name="bookName"
              label="Book Name"
              color="info"
              fullWidth
              value={bookName}
              onChange={(event) => {
                setBookName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              varient="contained"
              name="author"
              label="Author"
              color="info"
              fullWidth
              value={author}
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              varient="contained"
              name="category"
              label="Category"
              color="info"
              fullWidth
              value={category}
              onChange={(event) =>{
                setCategory(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              varient="contained"
              name="bookId"
              label="Book ID"
              color="info"
              fullWidth
              value={bookId}
              onChange={(event) =>{
                setBookId(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              varient="contained"
              name="shelfCode"
              label="Shelf Code"
              color="info"
              fullWidth
              value={shelfCode}
              onChange={(event) =>{
                setShelfCode(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              varient="contained"
              name="language"
              label="Language"
              color="info"
              fullWidth
              value={language}
              onChange={(event) =>{
                setLanguage(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              varient="contained"
              name="language"
              label="Description"
              color="info"
              fullWidth
              multiline
              rows={3}
              onChange={(event) =>{
                setDescription(event.target.value);
              }}
              value={description}
            />
          </Grid>
        </Grid>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          mt={2}
        >
          <Tooltip
            // title={!username || !email ? "fill the fields" : "sumbit fields"}
          >
            <span>
              <Button
                variant="contained"
                color="info"
                //   component={RouterLink}
                onClick={uploadFile}
                disabled={!bookName || !author || !bookName || !category || !language || !shelfCode || !bookId}
                //   to="#"
                startIcon={<PublishIcon />}
              >
                Add
              </Button>
            </span>
          </Tooltip>
        </Stack>
      </Container>
    </Page>
  );
}

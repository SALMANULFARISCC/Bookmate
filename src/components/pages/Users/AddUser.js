import { useState,useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
import Page from "../../utils/Page";
import DataTable from "./../../utils/DataTable";
import ImageUpload from "../../utils/Inputs/ImageUpload";
import PasswordField from "../../../components/pages/Users/utils/PasswordField";


//firebase
import { db, auth,signup,storage} from "./../../../Firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// import hook

import useConfirm from "../../hook/useConfirm"

import {
  collection,
  setDoc,
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

export default function AddUser() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState();
  const [data,setData] = useState();
  const [per, setPerc] = useState(null);

  const {ConfirmSnack,confirmToggler } = useConfirm(
    "User Added succesfuly"
  )



  //image upload


  const uploadFile = (e) => {
    e.preventDefault();
    const name = new Date().getTime() + file.name;

      const storageRef = ref(storage, `userImage/${name}`);
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
            handleAddUser(downloadURL);
          });
        }
      );
  };
//To clear the user input
const clearBookCredentials = () => {
  setUserName("")
  setEmail("")
  setPhoneNumber("")
  setPassword("")
  setFile("")


};


  const handleAddUser = async (imageUrl) =>{
    try{
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(res.user.uid);
      await setDoc(doc(db, "users",res.user.uid),{
        name: userName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        image:imageUrl,
        userType:"user"

      });
      clearBookCredentials();
      confirmToggler();
    }catch(err){
      console.error(err.message);
    }

  }


  // const handleEmailChange = (event) => setEmail(event.target.value);
  // const [profileImage, setProfileImage] = useState();

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
            Add User
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
          {/* {file === "" && (
            <Typography sx={{ mt: 2 }} variant="body2" color="error">
              Profile image is required
            </Typography> */}
          {/* )} */}
          <Typography sx={{ mt: 2, color: "gray" }} variant={"body2"}>
            Allowed *.jpeg, *.jpg, *.png, *.gif <br />
            max size: 1MB
          </Typography>
        </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              varient="contained"
              name="userName"
              label="Name"
              color="info"
              fullWidth
              onChange={(event) => {
                setUserName(event.target.value);
              }}
              value={userName}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              varient="contained"
              name="email"
              label="Email"
              color="info"
              fullWidth
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              varient="contained"
              name="phoneNumber"
              label="Phone Number"
              color="info"
              fullWidth
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              varient="contained"
              name="password"
              label="Password"
              color="info"
              fullWidth
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
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
                // onClick={handleAddUser}
                onClick={uploadFile}
                disabled={!userName || !email || !phoneNumber || !password}
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

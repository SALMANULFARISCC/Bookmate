import {
  collection,
  setDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { useState, useContext, useRef } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  Link,
  TextField,
} from "@mui/material";

import { createContext, useEffect } from "react";

import { Link as RouterLink } from "react-router-dom";
import PasswordField from "./utils/PasswordField";
import TextInput from "./utils/TextInput";
import SubmitButton from "./utils/SubmitButton";
import { useNavigate } from "react-router-dom";
import userContext from "./../../../Context/userContext";
import Loader from "../../utils/Loader";

import { signUp, signIn, auth, db } from "../../../Firebase/firebase";

//services
// import authService from "../../../services/authService";
//constants
// import LOCAL_KEYS from "../../../constants/LOCAL_KEY";
//context
import Page from "../../utils/Page";
// import { loadingContext } from "../../../context/loadingContext";
// import Loader from "../../utils/Loader";
const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  minHeight: "80vh",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function Login() {
  const Context = createContext("Default Value");

  const { user, setUser } = useContext(userContext);

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);

  const navitage = useNavigate();
  // const { loaderToggler } = useContext(loadingContext);
  const navigate = useNavigate();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [authErrors, setAuthErrors] = useState();

  // async function handleSignup() {
  //   try {
  //     const Login = await signup(emailRef.current.value, passwordRef.current.value);
  //     navigate('/home')
  //   } catch (error) {

  //   }
  // }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const currentUser = userCredential.user.uid;
        setUser(currentUser);
        fetchData(currentUser);
        navigate("/home");
        // localStorage.setItem("userId", user);
      })
      .catch((error) => {
        setError(true);
      });
  };
  const fetchData = async (userId) => {
    console.log(userId);
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        //list.push({ id: doc.id, ...doc.data() });
        if (doc.id === userId) {
          setUserData({ id: doc.id, ...doc.data() });
          const data = [{ id: doc.id, ...doc.data() }];
          // localStorage.setItem("data",data)
        }
        // console.log(data[]);


      });
      // setBookData();
      // console.log();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    
  }, {});
  return (
    <Page title="Login">
      <Container>
        {/* <Loader /> */}
        <ContentStyle>
          <Card sx={{ p: 3 }}>
            <Box sx={{ mb: 3 }}>
              <Typography textAlign="center" variant="h3" gutterBottom>
                Login
              </Typography>
            </Box>
            <Stack spacing={2}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                //  setValue={setEmail}
                //  authErrors={authErrors}
              />
              <TextField
                label="Password"
                value={password}
                // setValue={setPassword}
                onChange={(e) => setPassword(e.target.value)}

                // authErrors={authErrors}
                // showError
              />
              {/* <input    placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} />
        <input  type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} /> */}
              <Stack
                direction="column"
                alignItems="flex-start"
                justifyContent="space-between"
                sx={{ my: 2 }}
              ></Stack>
              <SubmitButton
                // disabled={!email || !password ? true : false}
                name="Login"
                onClick={handleLogin}
              />
            </Stack>
          </Card>
        </ContentStyle>
      </Container>
    </Page>
  );
}

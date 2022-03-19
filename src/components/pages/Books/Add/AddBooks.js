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
  Tooltip
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";
import ImageUpload from "../../../utils/Inputs/ImageUpload";

//profile card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

// table header cell config

export default function AddBook() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const [profileImage, setProfileImage] = useState();

  const handleAddStudent = () => {
    const data = {
      username,
      email,
    };
    console.log(data);
  };
  return (
    <Page title="AddBook">
      <Container>
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
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
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
          <ImageUpload image={profileImage} setImage={setProfileImage} />
          {profileImage === "" && (
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
                // value={bookName}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="author"
                label="Author"
                color="info"
                fullWidth
                // value={author}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="category"
                label="Category"
                color="info"
                fullWidth
                // value={category}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="bookId"
                label="Book ID"
                color="info"
                fullWidth
                // value={bookId}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="shelfCode"
                label="Shelf Code"
                color="info"
                fullWidth
                // value={shelfId}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="language"
                label="Language"
                color="info"
                fullWidth
                // value={language}
                onChange={handleEmailChange}
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
                // value={description}
                onChange={handleEmailChange}
              />
            </Grid>
          </Grid>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            mt={2}
          >
            <Tooltip title={(!username || !email)?"fill the fields":"sumbit fields"}>
            <span>
              <Button
                variant="contained"
                color="info"
                //   component={RouterLink}
                onClick={handleAddStudent}
                disabled={!username || !email}
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

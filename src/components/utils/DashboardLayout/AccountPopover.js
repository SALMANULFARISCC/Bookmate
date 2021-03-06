import { useRef, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";


// material icons 
// import HomeIcon from '@mui/icons-material/Home';
// import PersonIcon from '@mui/icons-material/Person';
// material component
import { alpha } from "@mui/material/styles";
import userContext from "./../../../Context/userContext";



import {
  Button,
  Box,
  Divider,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import MenuPopover from "./MenuPopover";
import avatar from '../../../images/avatar.jpg'

// popover menu options
// const MENU_OPTIONS = [
//   {
//     label: "Home",
//     icon: HomeIcon,
//     linkTo: "/home",
//   },
//   {
//     label: "Profile",
//     icon: PersonIcon,
//     linkTo: "#",
//   },
// ];


export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  // const [userProfile,setuserprofile] = useState();

  const userData =JSON.parse(localStorage.getItem("data"));
  // setuserprofile(userData[0]);
  // console.log(userData[0]);


  // handle account popover open
  const handleOpen = () => {
    setOpen(true);
  };

  //handle account popover close
  const handleClose = () => {
    setOpen(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem("data","userId","user");
    setUser(null);
    navigate("/user/login");
    // window.location.reload();
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
      >
        <Avatar
         src={userData && userData[0].image}
          alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {userData && userData[0].name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
          {userData && userData[0].email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {/* {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: "body2", py: 1, px: 2.5 }}
          >
            <Box
              // component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24,
              }}
            />

            {option.label}
          </MenuItem>
        ))} */}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined" onClick={logoutHandler}>
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}

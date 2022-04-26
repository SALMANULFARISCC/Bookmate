
import {
  collection,
  setDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,

} from "firebase/firestore";

import PropTypes from "prop-types";
import { useEffect,useState,useContext } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// material ui predefined components
import { styled } from "@mui/material/styles";
import { Box, Drawer, Link, Avatar, Typography } from "@mui/material";
// custom components
// import Logo from "../../Logo";
import Scrollbar from "../Scrollbar";
import NavSection from "./NavSection";
import { MHidden } from "../../@material-extent";
import NavConfig from "./NavConfig";
import Logo from "../../../images/AvengersLogo.png";
import ProfileImg from '../../../images/avatar.jpg'
import { db } from "../../../Firebase/firebase";
import userContext from "../../../Context/userContext";

// import account from '../../_mocks_/account';

// drawer width for mobile devices
const DRAWER_WIDTH = 280;

// root container style
const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));


// profile card styel
const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200],
}));

// dashboard props structure
DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  // const {user, setUser} = useState([]);
  const { user } = useContext(userContext);
  const userData =JSON.parse(localStorage.getItem("data"));
  // setuserprofile(userData[0]);
  // console.log(userData[0]);


  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  const id = localStorage.getItem("userId");

  // useEffect(() => {
  //   const fetchData = async (id) => {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "users" ,id));
  //       querySnapshot.forEach((doc) => {
  //         //list.push({ id: doc.id, ...doc.data() });
  //         if(doc.id===id){
  //           setUser({ id: doc.id, ...doc.data() });          }
  //       });
  //       // setBookData();
  //       // console.log();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, {});
  console.log(user);

  const renderContent = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >


      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={userData && userData[0].image} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
               {userData && userData[0].name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {userData && userData[0].userType}

              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={NavConfig} />

      <Box sx={{ flexGrow: 1 }} />

      {/* <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{
            p: 2.5,
            pt: 5,
            borderRadius: 2,
            position: 'relative',
            bgcolor: 'grey.200'
          }}
        >
          <Box
            component="img"
            src="/static/illustrations/illustration_avatar.png"
            sx={{ width: 100, position: 'absolute', top: -50 }}
          />

          <Box sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h6">
              Get more?
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              From only $69
            </Typography>
          </Box>

          <Button
            fullWidth
            href="https://material-ui.com/store/items/minimal-dashboard/"
            target="_blank"
            variant="contained"
          >
            Upgrade to Pro
          </Button>
        </Stack>
      </Box> */}
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
            },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}

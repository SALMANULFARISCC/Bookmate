import PieChartIcon from "@mui/icons-material/PieChart";
import FaceIcon from "@mui/icons-material/Face";
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

//nav bar options
const NavConfig = [
  // {
  //   title: "home",
  //   path: "/home",
  //   icon: PieChartIcon,
  // },
  // {
  //   title: "teacher",
  //   path: "/teacher",
  //   icon: FaceIcon,
  // },
  {
    title: "Book",
    path: "/book",
    icon: BookmarkAddIcon,
    permittedUser:"admin"
  },
  {
  title: "booking",
  path: "/book/booking",
  icon: BookmarksIcon,
  permittedUser:"admin"

  },
  {
    title: "user",
    path: "/adduser",
    icon: PersonIcon,
    permittedUser:"admin"

  },
  {
    title: "books",
    path: "/books",
    icon:  BookIcon,
  }
  
];

export default NavConfig;

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
  },
  {
  title: "booking",
  path: "/book/booking",
  icon: BookmarksIcon,
  },
  {
    title: "user",
    path: "/adduser",
    icon: PersonIcon,
  },
  {
    title: "books",
    path: "/books",
    icon:  BookIcon,
  }
  
];

export default NavConfig;

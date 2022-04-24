import Home from "./components/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/utils/DashboardLayout";
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import TeachersList from "./components/pages/Teachers/View/TeachersList";
import AddTeacher from "./components/pages/Teachers/Add/AddTeacher";
import StudentsList from "./components/pages/Students/view/StudentsList";
import AddStudent from "./components/pages/Students/Add/AddStudents";
import BookList from "./components/pages/Books/View/BookList";
import AddBook from "./components/pages/Books/Add/AddBooks";
import Booking from "./components/pages/Books/View/Booking";
import ProductView from "./components/pages/Books/View/ProductView";
import Books from "./components/pages/Books/View/Books";
import AddUser from "./components/pages/Users/AddUser";
import {UserProvider} from "./Context/userContext"

// import Register from "./components/pages/Users/Register";
import Login from "./components/pages/Users/Login";
// import AuthLayout from "./components/utils/UserLayout/AuthLayout";
// import ForgotPassword from "./components/pages/Users/ForgotPassword";
// import RecoverPassword from "./components/pages/Users/RecoverPassword";
function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <UserProvider>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home/" element={<Home />} />
          <Route path="book" element={<BookList />} />
          <Route path="book/add" element={<AddBook />} />
          <Route path="book/booking" element={<Booking />} />
          <Route path="adduser" element={<AddUser/>} />
          <Route path="books" element={<Books />} />
          <Route path="book/booking/view/:id" element={<ProductView />} />
        </Route>
        {/*student route */}
        <Route path="/">
          
        </Route>
        {/* user routes */}
        <Route path="/user">
          {/* <Route path="register" element={<Register />} /> */}
          <Route path="login" element={<Login />} />
          {/* <Route path="forgot" element={<ForgotPassword />} />
          <Route path="recover/:token" element={<RecoverPassword />} /> */}
        </Route>
      </Routes>
      </UserProvider>
    </ThemeConfig>
  );
}

export default App;

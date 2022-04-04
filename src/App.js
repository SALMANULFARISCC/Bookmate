import Home from './components/pages/Home'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import DashboardLayout from './components/utils/DashboardLayout';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import TeachersList from './components/pages/Teachers/View/TeachersList';
import AddTeacher from './components/pages/Teachers/Add/AddTeacher';
import StudentsList from './components/pages/Students/view/StudentsList';
import AddStudent from './components/pages/Students/Add/AddStudents';
import BookList from './components/pages/Books/View/BookList';
import AddBook from './components/pages/Books/Add/AddBooks';
import Booking from './components/pages/Books/View/Booking';
import ProductView from './components/pages/Books/View/ProductView';
function App() {
    return (
      <ThemeConfig>
      <GlobalStyles/>
        <Routes>
          <Route path="/" element={<DashboardLayout/>}>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="home" element={<Home/>}/>
            {/* <Route path="teacher" element={<TeachersList/>}/>
            <Route path="teacher/add" element={<AddTeacher/>}/>
            <Route path="student" element={<StudentsList/>}/>
            <Route path="student/add" element={<AddStudent/>}/> */}
            <Route path="book" element={<BookList/>}/>
            <Route path="book/add" element={<AddBook/>}/>
            <Route path="book/booking" element={<Booking/>}/>
            <Route path="book/booking/view" element={<ProductView/>}/>
          </Route>
        </Routes>
        </ThemeConfig>
    );
}

export default App;

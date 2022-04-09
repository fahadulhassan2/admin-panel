
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Main from './pages/Main'
import Post from './pages/Posts'
import ManagePost from './pages/ManagePost'
import Approves from './pages/Approves'
import Unapprove from './pages/Unappprove'
import Userlist from './pages/UserList'
import Addcategories from './pages/AddCategories'
import RemoveCategories from './pages/RemoveCategories'
import Complain from './pages/complain'
import ResolveComplain from './pages/Resolve'
import PendingComplain from './pages/Pending'
import Suggestion from './pages/suggestion'
import Login from './components/Login'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/ManagePost" element={<ManagePost />} />
      <Route path="/Post" element={<Post />} />
      <Route path="/Approves" element={<Approves />} />
      <Route path="/Unapprove" element={<Unapprove />} />
      <Route path="/Userlist" element={<Userlist />} />
      <Route path="/AddCategories" element={<Addcategories />} />
      <Route path="/RemoveCategories" element={<RemoveCategories />} />
      <Route path="/Complain" element={<Complain />} />
      <Route path="/ResolveComplain" element={<ResolveComplain />} />
      <Route path="/PendingComplain" element={<PendingComplain />} />
      <Route path="/Suggestion" element={<Suggestion />} />
    </Routes>
    </>
  );
}

export default App;

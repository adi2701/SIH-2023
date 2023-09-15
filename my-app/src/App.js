import './App.css';
import Cards from './components/Cards'
import Navbar from './components/Navbar';
import logo from './images/ourLogo.png';
import Login from './components/Logins/Login';
import SignUp from './components/Logins/SignUp';
import AuthDetail from './components/Logins/AuthDetail';
import Mainpage from './components/Mainpage';
import Colleges from './components/Colleges';


// New section

import { Routes, Route, Link } from "react-router-dom";
import Contact from './components/Contact';
import UserProfile from './components/UserProfile';


// function App() {
//   return (
//    <>
//    <Navbar image={logo}/>
//    <AuthDetail/>

//    {/* <Cards/> */}
//    <Mainpage/>
//    {/* <Login/>  */}
//    {/* <SignUp/>  */}
//    </>
//   );
// }

function App() {
  return (

    <div> 
	  {/* <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/login" className="nav-item">Login</Link>
      <Link to="/signup" className="nav-item">SignUp</Link>
	  </nav> */}
      <Navbar image={logo}/>
      <AuthDetail/>
      {/* <UserProfile/> */}
      {/* <Colleges/> */}
      {/* <Contact/> */}
      {/* <Link to="/login" className="nav-item">AuthDetails</Link> */}
      <Routes> 
        <Route path="/" element={<Cards />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/mainpage" element={<Mainpage />}></Route>
        <Route path="/auth" element={<AuthDetail />}></Route>
        <Route path="/colleges" element={<Colleges />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;

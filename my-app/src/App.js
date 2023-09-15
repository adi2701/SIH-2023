import './App.css';
import Cards from './components/Cards'
import Navbar from './components/Navbar';
import logo from './images/ourLogo.png';
import Login from './components/Logins/Login';
import SignUp from './components/Logins/SignUp';
import AuthDetail from './components/Logins/AuthDetail';
import Mainpage from './components/Mainpage';


// New section

// import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
   <>
   <Navbar image={logo}/>
   <AuthDetail/>

   {/* <Cards/> */}
   <Mainpage/>
   {/* <Login/>  */}
   {/* <SignUp/>  */}
   </>
  );
}

// function App() {
//   return (

//     <div> 
// 	  <nav>
//       <Link to="/" className="nav-item">Homepage</Link>
//       <Link to="/login" className="nav-item">Login</Link>
//       <Link to="/signup" className="nav-item">SignUp</Link>
// 	  </nav>
//       <Routes> 
//         <Route path="/" element={<Cards />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/signup" element={<SignUp />}></Route>
//       </Routes>
//     </div>
//   );
// }

export default App;

import {React, useState} from "react"; 
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./pages/home";
import Cats from "./pages/cats";
import Breeds from "./pages/breeds";
import Favorites from "./pages/favorites";
import NavBarButtons from "./components/NavBarButtons";

import { UserProvider } from "./components/UserContext";
import UserName from "./components/UserName";

function App ()  {
  const [user, setUser] = useState("");
 // const navigate = useNavigate();

  const handleSubmitName = (userName) => {
    setUser(userName);
  };

  return (
    <UserProvider value={{ user, handleSubmitName }}>
    <BrowserRouter>
      <header>
        
        <nav>
          <div className="navBar">
            <div className="logo">
              <img className="catLogo" src="images/catLogo.png" alt="" />
              </div>
           <NavBarButtons /> 
              {/* <div className="navBarLinks">   
                <Link className="nav-link" to = "/home" >Home</Link>
                <Link className="nav-link" to = "/cats" >Cats</Link>
                <Link className="nav-link" to = "/breeds" >Breeds</Link>
                <Link className="nav-link" to = "/favorites" >Favorites</Link>
              </div> */}
             
                 
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<UserName />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cats" element={<Cats />} />
        <Route path="/Breeds" element={<Breeds />} />
        <Route path="/Favorites" element={<Favorites />} />
       {/*  <Route path="/Votes" element={<Votes />} /> */}
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
};

export default App;

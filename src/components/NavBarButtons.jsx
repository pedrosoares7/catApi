import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';


const NavBarButtons = () => {
    const { user } = useContext(UserContext);

    if (user) {
        return (
            <div className="navBar">
                {/* <div className="logo">
                    <img className="catLogo" src="images/catLogo.png" alt="" />
                </div> */}
                <div className="navBarLinks">
                    <Link className="nav-link" to="/home">Home</Link>
                    <Link className="nav-link" to="/cats">Cats</Link>
                    <Link className="nav-link" to="/breeds">Breeds</Link>
                    <Link className="nav-link" to="/favorites">Favorites</Link>
                </div>
            </div>
        );
    }
    else { return null; }
   
}
export default NavBarButtons;
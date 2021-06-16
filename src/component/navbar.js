import {Link} from 'react-router-dom';
import React from 'react';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The dojo blof</h1>
            <div className="links">
                <Link className="link" to="/principals/home.js">Home</Link>
                <Link  className="link"to="/principals/services.js">Services</Link>
                <Link className="link" style={{color:'white'}} to="/principals/contact.js">contact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;  
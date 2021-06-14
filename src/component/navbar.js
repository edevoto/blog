import React from 'react';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The dojo blof</h1>
            <div className="links">
                <a className="link" href="#">Home</a>
                <a  className="link"href="#">Services</a>
                <a className="link" style={{color:'white'}} href="#">contact</a>
            </div>
        </nav>
     );
}
 
export default Navbar;  
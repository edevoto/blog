import React from "react";
import Navbar from './navbar.js'
import Home from './home';
function App(){

 const title = 'Welcome to the new blog';
const like = 50;
//const person = {name:'jiji', age:30';

    return (
        <div className="App">
            <Navbar />
        <div className="content">
            <Home />
            </div>
        </div>
    )
}

export default App;
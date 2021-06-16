import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from './navbar.js'
import Home from './principals/home.js';
import Error404 from "./principals/404.js";
import Contact from "./principals/contact.js";
import { Services } from "./principals/services.js";

function App(){

 const title = 'Welcome to the new blog';
const like = 50;
//const person = {name:'jiji', age:30';

    return (
        <BrowserRouter>
       
            <Navbar />
            <Switch>
                <Route exact path="/principals/home.js" component={Home} />
                <Route exact path="/principals/services.js"  component={Services} />
                <Route exact path="/principals/contact.js"  component={Contact} />
                <Route component={Error404} /> 
            </Switch>
                   
       
        </BrowserRouter>
    )
}

export default App;
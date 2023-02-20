//1. import area

import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './pages/style.css'
//1.1 import {somenamedimport} from some location/library
//1.2 import somedefaultimport from some location/library
import Layout from './pages/Layout'
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import { NotFound } from "./pages/NotFound";

//2. Component defination area
class App extends Component{
    // properties 

    // constructor method

    // methods 

    //every class component must have render method
    render(){
            // every method should return something
            return(
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="register" element={<Register />} />
                            <Route path="login" element={<Login />} />
                            <Route path="*" element={<NotFound />} /> 
                        </Route>
                    </Routes>
                </BrowserRouter>
            )
    }
}

//3. export area

//3.1 default export
export default App;
//3.2 named export
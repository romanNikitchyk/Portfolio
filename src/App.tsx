import React from 'react';

import './App.css';
import Header from "./header/Header";
import Main from "./1/Main";
import Skills from "./2/Skills";
import MyWorks from "./3/MyWorks";
import DistansWork from "./4/DistansWork";
import Contacts from "./5/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <DistansWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

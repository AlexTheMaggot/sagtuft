import React, {Component} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Main from "../Main/Main";


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Main level="home" />}></Route>
                        <Route exact path="/catalog/" element={<Main level="catalog" />}></Route>
                        <Route exact path="/about/" element={<Main level="about" />}></Route>
                        <Route exact path="/vacancies/" element={<Main level="vacancies" />}></Route>
                        <Route exact path="/contacts/" element={<Main level="contacts" />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
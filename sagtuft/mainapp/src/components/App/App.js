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
                        <Route exact path="/" element={<Main level="home_ru" />}></Route>
                        <Route exact path="/en/" element={<Main level="home_en" />}></Route>
                        <Route exact path="/uz/" element={<Main level="home_uz" />}></Route>
                        <Route exact path="/catalog/" element={<Main level="catalog_ru" />}></Route>
                        <Route exact path="/en/catalog/" element={<Main level="catalog_en" />}></Route>
                        <Route exact path="/uz/catalog/" element={<Main level="catalog_uz" />}></Route>
                        <Route exact path="/catalog/:category_slug/" element={<Main level="category_detail_ru" />}></Route>
                        <Route exact path="/en/catalog/:category_slug/" element={<Main level="category_detail_en" />}></Route>
                        <Route exact path="/uz/catalog/:category_slug/" element={<Main level="category_detail_uz" />}></Route>
                        <Route exact path="/about/" element={<Main level="about_ru" />}></Route>
                        <Route exact path="/en/about/" element={<Main level="about_en" />}></Route>
                        <Route exact path="/uz/about/" element={<Main level="about_uz" />}></Route>
                        <Route exact path="/vacancies/" element={<Main level="vacancies_ru" />}></Route>
                        <Route exact path="/en/vacancies/" element={<Main level="vacancies_en" />}></Route>
                        <Route exact path="/uz/vacancies/" element={<Main level="vacancies_uz" />}></Route>
                        <Route exact path="/contacts/" element={<Main level="contacts_ru" />}></Route>
                        <Route exact path="/en/contacts/" element={<Main level="contacts_en" />}></Route>
                        <Route exact path="/uz/contacts/" element={<Main level="contacts_uz" />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
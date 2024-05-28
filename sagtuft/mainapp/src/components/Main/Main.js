import React, {Component} from "react";
import {Navigate, useParams} from "react-router-dom";
import './Main.css'
import Header from "../Header/Header";
import HeaderEn from "../Header/HeaderEn";
import HeaderUz from "../Header/HeaderUz";
import Footer from '../Footer/Footer';
import FooterEn from '../Footer/FooterEn';
import FooterUz from '../Footer/FooterUz';
import Home from "../Home/Home";
import HomeEn from "../Home/HomeEn";
import HomeUz from "../Home/HomeUz";
import Catalog from "../Catalog/Catalog";
import CatalogEn from "../Catalog/CatalogEn";
import CatalogUz from "../Catalog/CatalogUz";
import About from "../About/About";
import AboutEn from "../About/AboutEn";
import AboutUz from "../About/AboutUz";
import Vacancies from "../Vacancies/Vacancies";
import VacanciesEn from "../Vacancies/VacanciesEn";
import VacanciesUz from "../Vacancies/VacanciesUz";
import Contacts from "../Contacts/Contacts";
import ContactsEn from "../Contacts/ContactsEn";
import ContactsUz from "../Contacts/ContactsUz";

export default function Main(props) {
    let params = useParams()
    return <MainClass {...props} params={params}/>
}

class MainClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            main_show: false,
            main_content_show: false,
            menu_nav: this.props.level,
            show_languages: false,
            nav_id: '',
        }

    }

    navi = (e, level, id = undefined) => {
        e.preventDefault()
        if (id !== undefined) {
            this.setState({nav_id: id})
        }
        this.setState({menu_nav: level});
        this.setState({main_content_show: false});
        setTimeout(() => {
            this.setState({navigate: level}, () => {
                this.setState({navigate: ''})
                window.scrollTo(0, 0)
            });
        }, 300);
        setTimeout(() => {
            this.setState({main_content_show: true});
        }, 600);
    }

    lang_change = (e, lang) => {
        e.preventDefault()
        let new_level = this.props.level.slice(0, -3);
        if (lang === 'en') {
            new_level = new_level + '_en';
        }
        else if (lang === 'uz') {
            new_level = new_level + '_uz';
        }
        else {
            new_level = new_level + '_ru';
        }
        this.navi(e, new_level)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({main_show: true})
            this.setState({main_content_show: true})
        }, 300);
    }

    render() {
        return (
            <div className={this.state.main_show ? 'main' : 'main main_hidden'}>
                {this.props.level.slice(-2) === 'ru' && <Header level={this.props.level} navi={this.navi} lang_change={this.lang_change} />}
                {this.props.level.slice(-2) === 'en' && <HeaderEn level={this.props.level} navi={this.navi} lang_change={this.lang_change} />}
                {this.props.level.slice(-2) === 'uz' && <HeaderUz level={this.props.level} navi={this.navi} lang_change={this.lang_change} />}
                <div className={this.state.main_content_show ? 'main__content' : 'main__content main__content_hidden'}>
                    {this.state.navigate === 'home_ru' && <Navigate to='/'/>}
                    {this.state.navigate === 'home_en' && <Navigate to='/en/'/>}
                    {this.state.navigate === 'home_uz' && <Navigate to='/uz/'/>}
                    {this.state.navigate === 'catalog_ru' && <Navigate to='/catalog/'/>}
                    {this.state.navigate === 'catalog_en' && <Navigate to='/en/catalog/'/>}
                    {this.state.navigate === 'catalog_uz' && <Navigate to='/uz/catalog/'/>}
                    {this.state.navigate === 'about_ru' && <Navigate to='/about/'/>}
                    {this.state.navigate === 'about_en' && <Navigate to='/en/about/'/>}
                    {this.state.navigate === 'about_uz' && <Navigate to='/uz/about/'/>}
                    {this.state.navigate === 'vacancies_ru' && <Navigate to='/vacancies/'/>}
                    {this.state.navigate === 'vacancies_en' && <Navigate to='/en/vacancies/'/>}
                    {this.state.navigate === 'vacancies_uz' && <Navigate to='/uz/vacancies/'/>}
                    {this.state.navigate === 'contacts_ru' && <Navigate to='/contacts/'/>}
                    {this.state.navigate === 'contacts_en' && <Navigate to='/en/contacts/'/>}
                    {this.state.navigate === 'contacts_uz' && <Navigate to='/uz/contacts/'/>}
                    {this.props.level === 'home_ru' && <Home />}
                    {this.props.level === 'home_en' && <HomeEn />}
                    {this.props.level === 'home_uz' && <HomeUz />}
                    {this.props.level === 'catalog_ru' && <Catalog />}
                    {this.props.level === 'catalog_en' && <CatalogEn />}
                    {this.props.level === 'catalog_uz' && <CatalogUz />}
                    {this.props.level === 'about_ru' && <About />}
                    {this.props.level === 'about_en' && <AboutEn />}
                    {this.props.level === 'about_uz' && <AboutUz />}
                    {this.props.level === 'vacancies_ru' && <Vacancies />}
                    {this.props.level === 'vacancies_en' && <VacanciesEn />}
                    {this.props.level === 'vacancies_uz' && <VacanciesUz />}
                    {this.props.level === 'contacts_ru' && <Contacts />}
                    {this.props.level === 'contacts_en' && <ContactsEn />}
                    {this.props.level === 'contacts_uz' && <ContactsUz />}
                </div>
                {this.props.level.slice(-2) === 'ru' && <Footer level={this.props.level} navi={this.navi} lang_change={this.lang_change} main_content_show={this.state.main_content_show} />}
                {this.props.level.slice(-2) === 'en' && <FooterEn level={this.props.level} navi={this.navi} lang_change={this.lang_change} main_content_show={this.state.main_content_show} />}
                {this.props.level.slice(-2) === 'uz' && <FooterUz level={this.props.level} navi={this.navi} lang_change={this.lang_change} main_content_show={this.state.main_content_show} />}
            </div>
        );
    }
}
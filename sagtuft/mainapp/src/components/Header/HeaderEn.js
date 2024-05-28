import React, {Component} from "react";
import {useParams} from "react-router-dom";
import './Header.css'
export default function HeaderEn(props) {
    let params = useParams()
    return <HeaderClass {...props} params={params}/>
}

class HeaderClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_languages: false,
        }

    }

    navi = (e, level, id = undefined ) => {
        e.preventDefault()
        this.props.navi(e, level, id)
    }

    lang_change = (e, lang) => {
        e.preventDefault()
        this.props.lang_change(e, lang)
    }

    language_mouse_in = () => {
        this.setState({show_languages: true})
    }

    language_mouse_out = () => {
        this.setState({show_languages: false})
    }

    render() {
        return (
            <header className="header">
                <div className="header__wrap">
                    <div className="header__left">
                        <div className="header__left-block"></div>
                    </div>
                    <div className="header__center">
                        <a href={this.props.level.slice(-2) === 'ru' ? '/catalog/' : '/' + this.props.level.slice(-2) + '/catalog/'} onClick={(e) => {this.navi(e,'catalog' + this.props.level.slice(-3))}} className="header__link">Catalog</a>
                        <a href={this.props.level.slice(-2) === 'ru' ? '/about/' : '/' + this.props.level.slice(-2) + '/about/'} onClick={(e) => {this.navi(e, 'about' + this.props.level.slice(-3))}} className="header__link">About</a>
                        <a href={this.props.level.slice(-2) === 'ru' ? '/' : '/' + this.props.level.slice(-2) + '/'} onClick={(e) => {this.navi(e, 'home' + this.props.level.slice(-3))}} >
                            <img className="header__logo-img" src="../../static/img/logo.svg" alt="sagtuft"/>
                        </a>
                        <a href={this.props.level.slice(-2) === 'ru' ? '/vacancies/' : '/' + this.props.level.slice(-2) + '/vacancies/'} onClick={(e) => {this.navi(e, 'vacancies' + this.props.level.slice(-3))}} className="header__link">Vacancies</a>
                        <a href={this.props.level.slice(-2) === 'ru' ? '/contacts/' : '/' + this.props.level.slice(-2) + '/contacts/'} onClick={(e) => {this.navi(e, 'contacts' + this.props.level.slice(-3))}} className="header__link">Contacts</a>
                    </div>
                    <div className="header__right">
                        <div className="header__lang-wrap" onMouseEnter={() => this.language_mouse_in()}>
                            <div className="header__lang-flag"></div>
                            <svg className="header__lang-arrow" viewBox="0 0 1000 500">
                                <polyline points="0,0 1000,0 500,500 "/>
                            </svg>
                        </div>
                        <div className={this.state.show_languages ? 'header__languages' : 'header__languages header__languages_hidden'} onMouseLeave={() => this.language_mouse_out()}>
                            <a href="" onClick={(event) => {this.lang_change(event, 'uz')}} className="header__language">O'zbekcha</a>
                            <a href="" onClick={(event) => {this.lang_change(event, 'ru')}} className="header__language">Русский</a>
                            <a href="" onClick={(event) => {this.lang_change(event, 'en')}} className="header__language">English</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
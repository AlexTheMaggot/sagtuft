import React, {Component} from "react";
import {useParams} from "react-router-dom";
import './Catalog.css'
import api_sender from "../api_sender";

export default function Catalog(props) {
    let params = useParams()
    return <CatalogClass {...props} params={params}/>
}

class CatalogClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        }
    }

    navi = (e, level, id = undefined ) => {
        e.preventDefault()
        this.props.navi(e, level, id)
    }

    componentDidMount() {
        let categories = api_sender('CategoryGetList', 1)
        categories.then((response) => {
            this.setState({categories: response.result})
        })
    }


    render() {
        return (
            <main>
                <section className="catalog">
                    <div className="search__block">
                        <div className="search">
                            <input className="search__input" type="text" placeholder="Поиск по коллекции или дизайну"/>
                        </div>
                        <button className="search__button">Найти</button>
                    </div>
                    <div className="breadcrumbs">
                        <a className="breadcrumbs__link" href="/" onClick={(e) => {this.navi(e, 'home_ru')}}>Главная</a>
                        <p className="breadcrumbs__text">/</p>
                        <p className="breadcrumbs__text">Каталог</p>
                    </div>
                    <div className="post__wrapper">
                        {this.state.categories.map(c => (
                            <a key={c.id} href={'/catalog/' + c.slug + '/'} className="post" onClick={(e) => {this.navi(e, 'category_detail_ru', c.slug)}}>
                                <img alt="" src={c.img} className="post__img"/>
                                <div className="post__content">
                                    <div>
                                        <p className="post__title">{c.name_ru}</p>
                                        <p>{c.description_ru}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </main>
        );
    }
}
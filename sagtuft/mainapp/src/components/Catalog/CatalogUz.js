import React, {Component} from "react";
import {useParams} from "react-router-dom";
import './Catalog.css'
import api_sender from "../api_sender";

export default function CatalogUz(props) {
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
        let categories = api_sender('CategoryGetList', 3)
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
                            <input className="search__input" type="text" placeholder="To'plam yoki dizayn bo'yicha qidiring"/>
                        </div>
                        <button className="search__button">Toping</button>
                    </div>
                    <div className="breadcrumbs">
                        <a className="breadcrumbs__link" href="/uz/" onClick={(e) => {this.navi(e, 'home_uz')}}>Uy</a>
                        <p className="breadcrumbs__text">/</p>
                        <p className="breadcrumbs__text">Katalog</p>
                    </div>
                    <div className="post__wrapper">
                        {this.state.categories.map(c => (
                            <a key={c.id} href={'/uz/catalog/' + c.slug + '/'} className="post">
                                <img alt="" src={c.img} className="post__img"/>
                                <div className="post__content">
                                    <div>
                                        <p className="post__title">{c.name_uz}</p>
                                        <p>{c.description_uz}</p>
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
import React, {Component} from "react";
import {useParams} from "react-router-dom";
import './Catalog.css'
import api_sender from "../api_sender";

export default function CatalogEn(props) {
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
        let categories = api_sender('CategoryGetList', 2)
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
                            <input className="search__input" type="text" placeholder="Search by collection or design"/>
                        </div>
                        <button className="search__button">Search</button>
                    </div>
                    <div className="breadcrumbs">
                        <a className="breadcrumbs__link" href="/en/" onClick={(e) => {this.navi(e, 'home_en')}}>Home</a>
                        <p className="breadcrumbs__text">/</p>
                        <p className="breadcrumbs__text">Catalog</p>
                    </div>
                    <div className="post__wrapper">
                        {this.state.categories.map(c => (
                            <a key={c.id} href={'/en/catalog/' + c.slug + '/'} className="post" onClick={(e) => {this.navi(e, 'category_detail_en', c.slug)}}>
                                <img alt="" src={c.img} className="post__img"/>
                                <div className="post__content">
                                    <div>
                                        <p className="post__title">{c.name_en}</p>
                                        <p>{c.description_en}</p>
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
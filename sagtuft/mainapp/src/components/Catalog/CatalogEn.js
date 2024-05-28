import React, {Component} from "react";
import {useParams} from "react-router-dom";
import './Catalog.css'

export default function CatalogEn(props) {
    let params = useParams()
    return <CatalogClass {...props} params={params}/>
}

class CatalogClass extends Component {
    constructor(props) {
        super(props);
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
                        <a className="breadcrumbs__link" href="index.html">Home</a>
                        <p className="breadcrumbs__text">/</p>
                        <p className="breadcrumbs__text">Catalog</p>
                    </div>
                    <div className="post__wrapper">
                        <a href="tufting_covers.html" className="post">
                            <img alt="" src="../../static/img/c01.webp" className="post__img"/>
                            <div className="post__content">
                                <div>
                                    <p className="post__title">Tufted coverings</p>
                                    <p>The optimal ratio of cost and quality of tufted carpet is used
                                         consistently high demand due to a number of advantages</p>
                                </div>
                            </div>
                        </a>
                        <a href="artificial_turf.html" className="post">
                            <img alt="" src="../../static/img/c02.webp" className="post__img"/>
                            <div className="post__content">
                                <div>
                                    <p className="post__title">Artificial Lawn</p>
                                    <p>The optimal ratio of cost and quality of tufted carpet is used
                                         consistently high demand due to a number of advantages</p>
                                </div>
                            </div>
                        </a>
                        <a href="tufting_covers.html" className="post">
                            <img alt="" src="../../static/img/c03.webp" className="post__img"/>
                            <div className="post__content">
                                <div>
                                    <p className="post__title">Velveteen</p>
                                    <p>The optimal ratio of cost and quality of tufted carpet is used
                                         consistently high demand due to a number of advantages</p>
                                </div>
                            </div>
                        </a>
                        <a href="tufting_covers.html" className="post">
                            <img alt="" src="../../static/img/c04.webp" className="post__img"/>
                            <div className="post__content">
                                <div>
                                    <p className="post__title">Thread</p>
                                    <p>The optimal ratio of cost and quality of tufted carpet is used
                                         consistently high demand due to a number of advantages</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
            </main>
        );
    }
}
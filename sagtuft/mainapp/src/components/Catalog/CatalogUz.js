import React, {Component} from "react";
import {useParams} from "react-router-dom";
import './Catalog.css'

export default function CatalogUz(props) {
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
                            <input className="search__input" type="text" placeholder="To'plam yoki dizayn bo'yicha qidiring"/>
                        </div>
                        <button className="search__button">Toping</button>
                    </div>
                    <div className="breadcrumbs">
                        <a className="breadcrumbs__link" href="index.html">Uy</a>
                        <p className="breadcrumbs__text">/</p>
                        <p className="breadcrumbs__text">Katalog</p>
                    </div>
                    <div className="post__wrapper">
                        <a href="tufting_covers.html" className="post">
                            <img alt="" src="../../static/img/c01.webp" className="post__img"/>
                            <div className="post__content">
                                <div>
                                    <p className="post__title">Tuftli qoplamalar</p>
                                    <p>Tufted gilamning narxi va sifatining optimal nisbati qo'llaniladi
                                         qator afzalliklari tufayli doimiy ravishda yuqori talab</p>
                                </div>
                            </div>
                        </a>
                        <a href="artificial_turf.html" className="post">
                            <img alt="" src="../../static/img/c02.webp" className="post__img"/>
                            <div className="post__content">
                                <div>
                                    <p className="post__title">Sun'iy maysazor</p>
                                    <p>Tufted gilamning narxi va sifatining optimal nisbati qo'llaniladi
                                         qator afzalliklari tufayli doimiy ravishda yuqori talab</p>
                                </div>
                            </div>
                        </a>
                        <a href="tufting_covers.html" className="post">
                            <img alt="" src="../../static/img/c03.webp" className="post__img"/>
                            <div className="post__content">
                                <div>
                                    <p className="post__title">Velvetin</p>
                                    <p>Tufted gilamning narxi va sifatining optimal nisbati qo'llaniladi
                                         qator afzalliklari tufayli doimiy ravishda yuqori talab</p>
                                </div>
                            </div>
                        </a>
                        <a href="tufting_covers.html" className="post">
                            <img alt="" src="../../static/img/c04.webp" className="post__img"/>
                            <div className="post__content">
                                <div>
                                    <p className="post__title">Ip</p>
                                    <p>Tufted gilamning narxi va sifatining optimal nisbati qo'llaniladi
                                         qator afzalliklari tufayli doimiy ravishda yuqori talab</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
            </main>
        );
    }
}
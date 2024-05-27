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
                            <input className="search__input" type="text" placeholder="Поиск по коллекции или дизайну"/>
                        </div>
                        <button className="search__button">Найти</button>
                    </div>
                    <div className="breadcrumbs">
                        <a className="breadcrumbs__link" href="index.html">Главная</a>
                        <p className="breadcrumbs__text">/</p>
                        <p className="breadcrumbs__text">Каталог</p>
                    </div>
                    <div className="post__wrapper">
                        <a href="tufting_covers.html" className="post">
                            <img alt="" src="../../static/img/c01.webp" className="post__img"/>
                            <div className="post__content">
                                <div>
                                    <p className="post__title">Тафтиновые покрытия</p>
                                    <p>Оптимальное по соотношению стоимости и качества тафтинговый ковролин пользуется
                                        стабильно высоким спросом благодаря ряду преимуществ</p>
                                </div>
                            </div>
                        </a>
                        <a href="artificial_turf.html" className="post">
                            <img alt="" src="../../static/img/c02.webp" className="post__img"/>
                            <div className="post__content">
                                <div>
                                    <p className="post__title">Искусственный Газон</p>
                                    <p>Оптимальное по соотношению стоимости и качества тафтинговый ковролин пользуется
                                        стабильно высоким спросом благодаря ряду преимуществ</p>
                                </div>
                            </div>
                        </a>
                        <a href="tufting_covers.html" className="post">
                            <img alt="" src="../../static/img/c03.webp" className="post__img"/>
                            <div className="post__content">
                                <div>
                                    <p className="post__title">Вельвет</p>
                                    <p>Оптимальное по соотношению стоимости и качества тафтинговый ковролин пользуется
                                        стабильно высоким спросом благодаря ряду преимуществ</p>
                                </div>
                            </div>
                        </a>
                        <a href="tufting_covers.html" className="post">
                            <img alt="" src="../../static/img/c04.webp" className="post__img"/>
                            <div className="post__content">
                                <div>
                                    <p className="post__title">Нитка</p>
                                    <p>Оптимальное по соотношению стоимости и качества тафтинговый ковролин пользуется
                                        стабильно высоким спросом благодаря ряду преимуществ</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
            </main>
        );
    }
}
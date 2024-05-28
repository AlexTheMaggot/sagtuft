import React, {Component} from "react";
import {useParams} from "react-router-dom";
import './Contacts.css'

export default function ContactsUz(props) {
    let params = useParams()
    return <ContactsClass {...props} params={params}/>
}

class ContactsClass extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <section className="contacts">
                    <div className="contacts__block">
                        <p className="contacts__title">Bizning manzillarimiz xaritada</p>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac0675216cbf366ecf5478de3743ece551040f898fb2a64c35ae9f12c5928f832&amp;source=constructor"
                            width="1040" height="600"></iframe>
                        <div className="contacts__list">
                            <div className="contacts__item contact">
                                <img src="../../static/img/ci01.webp" alt="" className="contact__img"/>
                                <div className="contact__texts">
                                    <p className="contact__title">Samarqand viloyati</p>
                                    <p className="contact__text">Barcha do'konlar: 1</p>
                                </div>
                                <img src="../../static/img/arrow.svg" className="contact__arrow"/>
                            </div>
                            <div className="contacts__item contact">
                                <img src="../../static/img/ci01.webp" alt="" className="contact__img"/>
                                <div className="contact__texts">
                                    <p className="contact__title">Samarqand viloyati</p>
                                    <p className="contact__text">Barcha do'konlar: 1</p>
                                </div>
                                <img src="../../static/img/arrow.svg" className="contact__arrow"/>
                            </div>
                            <div className="contacts__item contact">
                                <img src="../../static/img/ci01.webp" alt="" className="contact__img"/>
                                <div className="contact__texts">
                                    <p className="contact__title">Samarqand viloyati</p>
                                    <p className="contact__text">Barcha do'konlar: 1</p>
                                </div>
                                <img src="../../static/img/arrow.svg" className="contact__arrow"/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
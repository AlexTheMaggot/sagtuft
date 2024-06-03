import React, {Component} from "react";
import {useParams} from "react-router-dom";
import './Vacancies.css'

export default function VacanciesUz(props) {
    let params = useParams()
    return <VacanciesClass {...props} params={params}/>
}

class VacanciesClass extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <section className="vacancies">
                    <div className="vacancies__block">
                        <img src="../../../static/img/vacancies-img.webp" alt="" className="vacancies__img"/>
                        <p className="vacancies__text">Mavjud bo'sh ish o'rinlari</p>
                        <p className="vacancies__text">Biz haqiqiy professionallar bilan hamkorlik qilishdan xursandmiz!</p>
                        <p className="vacancies__text">Hurmatli nomzod! Ish haqi miqdori, shuningdek, boshqa qo'shimcha shartlar to'g'ridan-to'g'ri suhbatda muhokama qilinadi.</p>
                        <button className="vacancies__button">Shaklni to'ldiring</button>
                        <button className="vacancies__button">Rezyumeni qoldiring</button>
                    </div>
                </section>
            </main>
        );
    }
}
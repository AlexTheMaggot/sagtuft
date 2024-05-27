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
                        <p className="vacancies__text">Доступные вакансии</p>
                        <p className="vacancies__text">Мы рады сотрудничать с настоящими профессионалами!</p>
                        <p className="vacancies__text">Уважаемый кандидат! Размер оклада, а так же иные дополнительные условия обсуждаются непосредственно на собеседовании.</p>
                        <button className="vacancies__button">Заполнить анкету</button>
                        <button className="vacancies__button">Оставить резюме</button>
                    </div>
                </section>
            </main>
        );
    }
}
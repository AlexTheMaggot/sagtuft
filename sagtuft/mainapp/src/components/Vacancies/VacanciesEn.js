import React, {Component} from "react";
import {useParams} from "react-router-dom";
import './Vacancies.css'

export default function VacanciesEn(props) {
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
                        <p className="vacancies__text">Available vacancies</p>
                        <p className="vacancies__text">We are glad to cooperate with real professionals!</p>
                        <p className="vacancies__text">Dear candidate! The salary amount, as well as other additional conditions, are discussed directly at the interview.</p>
                        <button className="vacancies__button">Fill out the form</button>
                        <button className="vacancies__button">Leave your resume</button>
                    </div>
                </section>
            </main>
        );
    }
}
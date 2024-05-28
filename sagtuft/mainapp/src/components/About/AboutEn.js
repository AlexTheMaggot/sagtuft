import React, {Component} from "react";
import {useParams} from "react-router-dom";
import './About.css'

export default function AboutEn(props) {
    let params = useParams()
    return <AboutClass {...props} params={params}/>
}

class AboutClass extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <section className="about">
                    <div className="about__block">
                        <h1 className="about__title">SAG Tuft & Grass</h1>
                        <p className="about__text">Sag Taft and grass began their career as part of Sam Antep in 2013. Company activities
                             production of paving stones from carpet and artificial turf for homes and commercial establishments,
                             artificial turf to create landscape compositions and use sports grounds, and
                             also runners and bath mats, such as products produced at
                             high-tech equipment using only environmentally friendly raw materials and
                             materials ensures a high level of quality Carpet and artificial turf are woven on
                             high-tech Belgian, German and Swiss equipment using only
                             high-quality and environmentally friendly raw materials and supplies, which ensures high
                             quality level.product quality. In order to ensure high global quality standards
                             carried out at the enterprise See 01.0022.68810861 an international management system has been introduced
                             quality. The production line of the plant's products is constantly being replenished and has been for many years
                             successfully certified and has positive customer reviews both in the territory
                             of the Republic of Uzbekistan and abroad.</p>
                        <img className="about__img" src="../../../static/img/about-img.webp" alt=""/>
                        <p className="about__subtitle">Our advantages</p>
                        <p className="about__text">1. Product prices are determined directly by the factory</p>
                        <p className="about__text">2. Our products are manufactured by SAG, which is a leader in manufacturing
                             capacities in the CIS countries</p>
                        <p className="about__text">3. An assortment that includes more than 100 thousand types of carpet products can only be found at
                             us (we are confident that you will definitely find a carpet suitable for your home)</p>
                        <p className="about__text">4. Delivery time ranges from 1 to 10 days depending on the warehouse
                             the product you have chosen. And yes, by the way, the delivery service at SAG express is free for our
                             clients</p>
                        <p className="about__text">5. You can benefit from free consulting services from our professional
                             sales specialists to select the right rug design for your home</p>
                        <p className="about__text">6. Also, for our clients we have an installment payment service</p>
                    </div>
                </section>
            </main>
        );
    }
}
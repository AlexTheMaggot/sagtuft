import React, {Component} from "react";
import {useParams} from "react-router-dom";
import './Home.css'

export default function HomeEn(props) {
    let params = useParams()
    return <HomeClass {...props} params={params}/>
}

class HomeClass extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <section className="main-block"></section>
                <section className="second-block">
                    <div className="second-block__features">
                        <div className="second-block__feature second-block__feature_with-line">
                            <p className="second-block__feature-num">01</p>
                            <p className="second-block__feature-title">Done</p>
                            <p className="second-block__feature-text">more than 100 objects</p>
                            <p className="second-block__feature-text">in seven years</p>
                        </div>
                        <div className="second-block__feature second-block__feature_with-line">
                            <p className="second-block__feature-num">02</p>
                            <p className="second-block__feature-title">Bonuses</p>
                            <p className="second-block__feature-text">for installation</p>
                            <p className="second-block__feature-text">and sowing the lawn</p>
                        </div>
                        <div className="second-block__feature">
                            <p className="second-block__feature-num">03</p>
                            <p className="second-block__feature-title">100% Guarantee</p>
                            <p className="second-block__feature-text">for accommodation</p>
                            <p className="second-block__feature-text">and automatic watering</p>
                        </div>
                    </div>
                    <div className="search__block">
                        <div className="search">
                            <input className="search__input" type="text"
                                   placeholder="Search by collection or design"/>
                        </div>
                        <button className="search__button">Search</button>
                    </div>
                    <p className="block-title">Green lawn possible</p>
                    <p className="block-title">Use in different ways:</p>
                    <div className="second-block__using-wrap">
                        <div className="second-block__using-item">
                            <div className="second-block__using-text-wrap">
                                <p className="second-block__using-title">Carpet</p>
                                <p className="second-block__using-text">Arrange</p>
                                <p className="second-block__using-text">there are picnics on it</p>
                            </div>
                            <img className="second-block__using-img" src="../../static/img/us01.webp" alt=""/>
                        </div>
                        <div className="second-block__using-item">
                            <div className="second-block__using-text-wrap">
                                <p className="second-block__using-title">Lawn</p>
                                <p className="second-block__using-text">Exercise</p>
                                <p className="second-block__using-text">sport</p>
                            </div>
                            <img className="second-block__using-img" src="../../static/img/us02.webp" alt=""/>
                        </div>
                        <div className="second-block__using-item">
                            <div className="second-block__using-text-wrap">
                                <p className="second-block__using-title">Velveteen</p>
                                <p className="second-block__using-text">Have</p>
                                <p className="second-block__using-text">picnics on it</p>
                            </div>
                            <img className="second-block__using-img" src="../../static/img/us03.webp" alt=""/>
                        </div>
                        <div className="second-block__using-item">
                            <div className="second-block__using-text-wrap">
                                <p className="second-block__using-title">Thread</p>
                                <p className="second-block__using-text">Have</p>
                                <p className="second-block__using-text">picnics on it</p>
                            </div>
                            <img className="second-block__using-img" src="../../static/img/us04.webp" alt=""/>
                        </div>
                    </div>
                </section>
                <section className="bg-block"></section>
                <section className="third-block">
                    <p className="block-title">Look at our cases</p>
                    <p className="third-block__text">We have experience in implementing projects from private plots</p>
                    <p className="third-block__text">up to 7.3 hectares of administrative plots</p>
                    <div className="third-block__categories">
                        <button className="third-block__category">Carpet</button>
                        <button className="third-block__category">Lawn</button>
                        <button className="third-block__category">Velveteen</button>
                        <button className="third-block__category">Thread</button>
                    </div>
                    <div className="third-block__products">
                        <div className="third-block__product">
                            <img className="third-block__product-img" src="../../static/img/product01.webp" alt=""/>
                            <div className="third-block__product-info">
                                <p className="third-block__product-hashtag">#TRN</p>
                                <p className="third-block__product-title">Rubin</p>
                                <p className="third-block__product-text">There are 35 models</p>
                                <div className="third-block__product-button-wrap">
                                    <button className="third-block__product-button">More details</button>
                                </div>
                            </div>
                        </div>
                        <div className="third-block__product">
                            <img className="third-block__product-img" src="../../static/img/product01.webp" alt=""/>
                            <div className="third-block__product-info">
                                <p className="third-block__product-hashtag">#TRN</p>
                                <p className="third-block__product-title">Rubin</p>
                                <p className="third-block__product-text">There are 35 models</p>
                                <div className="third-block__product-button-wrap">
                                    <button className="third-block__product-button">More details</button>
                                </div>
                            </div>
                        </div>
                        <div className="third-block__product">
                            <img className="third-block__product-img" src="../../static/img/product01.webp" alt=""/>
                            <div className="third-block__product-info">
                                <p className="third-block__product-hashtag">#TRN</p>
                                <p className="third-block__product-title">Rubin</p>
                                <p className="third-block__product-text">There are 35 models</p>
                                <div className="third-block__product-button-wrap">
                                    <button className="third-block__product-button">More details</button>
                                </div>
                            </div>
                        </div>
                        <div className="third-block__product">
                            <img className="third-block__product-img" src="../../static/img/product01.webp" alt=""/>
                            <div className="third-block__product-info">
                                <p className="third-block__product-hashtag">#TRN</p>
                                <p className="third-block__product-title">Rubin</p>
                                <p className="third-block__product-text">There are 35 models</p>
                                <div className="third-block__product-button-wrap">
                                    <button className="third-block__product-button">More details</button>
                                </div>
                            </div>
                        </div>
                        <div className="third-block__product">
                            <img className="third-block__product-img" src="../../static/img/product01.webp" alt=""/>
                            <div className="third-block__product-info">
                                <p className="third-block__product-hashtag">#TRN</p>
                                <p className="third-block__product-title">Rubin</p>
                                <p className="third-block__product-text">There are 35 models</p>
                                <div className="third-block__product-button-wrap">
                                    <button className="third-block__product-button">More details</button>
                                </div>
                            </div>
                        </div>
                        <div className="third-block__product">
                            <img className="third-block__product-img" src="../../static/img/product01.webp" alt=""/>
                            <div className="third-block__product-info">
                                <p className="third-block__product-hashtag">#TRN</p>
                                <p className="third-block__product-title">Rubin</p>
                                <p className="third-block__product-text">There are 35 models</p>
                                <div className="third-block__product-button-wrap">
                                    <button className="third-block__product-button">More details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="third-block__all-button">View all</button>
                </section>
                <section className="fourth-block">
                    <p className="block-title">Why choose us?</p>
                    <div className="fourth-block__choose-wrap">
                        <div className="fourth-block__choose-h">
                            <div className="fourth-block__choose-block">
                                <div className="fourth-block__choose-title-wrap">
                                    <p className="fourth-block__choose-title">Providing</p>
                                    <p className="fourth-block__choose-title">certificates</p>
                                </div>
                                <p className="fourth-block__choose-text">On the lawn, equipment and</p>
                                <p className="fourth-block__choose-text">Additional materials</p>
                            </div>
                            <div className="fourth-block__choose-v">
                                <div className="fourth-block__choose-block">
                                    <div className="fourth-block__choose-title-wrap">
                                        <p className="fourth-block__choose-title">Available</p>
                                    </div>
                                    <p className="fourth-block__choose-text">Price</p>
                                </div>
                                <div className="fourth-block__choose-block">
                                    <div className="fourth-block__choose-title-wrap">
                                        <p className="fourth-block__choose-title">Guarantee</p>
                                    </div>
                                    <p className="fourth-block__choose-text">For survival</p>
                                    <p className="fourth-block__choose-text">and automatic watering for 1 year</p>
                                </div>
                            </div>
                            <div className="fourth-block__choose-block">
                                <div className="fourth-block__choose-title-wrap">
                                    <p className="fourth-block__choose-title">Term</p>
                                    <p className="fourth-block__choose-title">execution of work</p>
                                </div>
                                <p className="fourth-block__choose-text">1-5 days depending</p>
                                <p className="fourth-block__choose-text">on the scope of work</p>
                            </div>
                        </div>
                        <div className="fourth-block__choose-h">
                            <div className="fourth-block__choose-block">
                                <div className="fourth-block__choose-title-wrap">
                                    <p className="fourth-block__choose-title">High quality material</p>
                                </div>
                                <p className="fourth-block__choose-text">Verified Uzbek</p>
                                <p className="fourth-block__choose-text">suppliers</p>
                            </div>
                            <div className="fourth-block__choose-block">
                                <div className="fourth-block__choose-title-wrap">
                                    <p className="fourth-block__choose-title">Specialist visit</p>
                                </div>
                                <p className="fourth-block__choose-text">To measure an object -</p>
                                <p className="fourth-block__choose-text">for free</p>
                            </div>
                        </div>
                    </div>
                    <p className="fourth-block__subtitle">International cultivation projects</p>
                    <p className="fourth-block__subtitle">hydroponic plants.</p>
                    <p>We know what grief is, we sit together, we create our elite.</p>
                    <img src="../../static/img/map.webp" alt="" className="fourth-block__map"/>
                    <div className="fourth-block__map-blocks">
                        <div className="fourth-block__map-block fourth-block__map-block_with-line">
                            <p className="fourth-block__map-block-title">27+</p>
                            <p>Countries</p>
                        </div>
                        <div className="fourth-block__map-block fourth-block__map-block_with-line">
                            <p className="fourth-block__map-block-title">2.9M+</p>
                            <p>Hectares of field</p>
                        </div>
                        <div className="fourth-block__map-block fourth-block__map-block_with-line">
                            <p className="fourth-block__map-block-title">87K+</p>
                            <p>Happy clients</p>
                        </div>
                        <div className="fourth-block__map-block">
                            <p className="fourth-block__map-block-title">15+</p>
                            <p>Our experience</p>
                        </div>
                    </div>
                </section>
                <section className="fifth-block">
                    <p className="block-title">Our experts</p>
                    <p>Our staff will answer your questions</p>
                    <div className="fifth-block__slider">
                        <div className="fifth-block__arrow-wrap">
                            <svg className="fifth-block__arrow-img" viewBox="0 0 1000 1000">
                                <path d="M703.1,819.4c-15.8,15.8-29.8,29.8-42.9,42.9c-120.8-120.6-242-241.6-362.4-361.8c120.7-120.4,242-241.4,362.7-361.9
                                c12.3,12.3,26.5,26.5,41.1,41.1c-106,106-212.5,212.5-319.1,319.1C489.8,606.1,596.6,712.9,703.1,819.4z"/>
                            </svg>
                        </div>
                        <div className="fifth-block__slider-content">
                            <div className="fifth-block__slide">
                                <img className="fifth-block__slide-img" src="../../static/img/avatar.webp" alt=""/>
                                <p className="fifth-block__slide-name">Shavkiddin</p>
                                <p className="fifth-block__slide-position">Head of Sales</p>
                                <p className="fifth-block__slide-position">export</p>
                                <div className="fifth-block__slide-links">
                                    <a href="" className="fifth-block__slide-link">
                                        <svg className="fifth-block__slide-link-img" viewBox="0 0 1000 1000"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M677.1,999.8c-115,0-229.9,0-344.9,0c-2.7-3.6-6.6-1.8-9.8-1.9c-34.1-1.2-68-3.7-101.2-11.9
                                            c-85.9-21-149.7-69.1-184.7-152c-20.2-47.7-26.2-98.2-27.7-149.4c-0.1-3.6,1.7-7.8-1.9-10.8c0-116.5,0-233,0-349.5
                                            c3.7-2.6,1.8-6.6,1.9-9.8c1.3-33.5,3.8-66.8,11.8-99.5C41.4,129.3,89.2,65.6,171.4,30.3C218.7,10,268.7,3.8,319.5,2.2
                                            c3.6-0.1,7.8,1.7,10.8-2c115.6,0,231.2,0,346.8,0c2.7,3.6,6.6,1.7,9.9,1.9c34.8,1.2,69.3,3.6,103.3,11.9
                                            C870.6,33.6,932.4,77.2,969,153.1c23.3,48.3,31.5,100.2,33.1,153.2c3.7,129.1,3.7,258.3,0,387.4c-0.9,30.6-4,61-11.2,90.8
                                            c-20.8,86.3-68.9,150.2-151.6,185.5c-48.3,20.6-99.4,26.5-151.3,27.9C684.4,998,680.2,996.3,677.1,999.8z M505.4,909.5
                                            c39,0,77.9,0.7,116.9-0.2c47-1.1,94.3,0.4,140.7-9.2c72.4-15,119.7-57.2,138.9-129.7c8.3-31.4,10-63.5,11-95.7
                                            c3.1-100.8,2.3-201.7,1.1-302.5c-0.5-43.2-0.1-86.6-8.9-129.3c-14.4-70.4-54.2-118-124.1-138.5C748,94.7,713.9,93,679.8,92
                                            c-98-3-196.1-2.2-294.2-1.2c-45.7,0.5-91.6-0.2-136.8,9.1c-74.2,15.2-121.7,58.9-140.3,133c-7.6,30.2-9.2,61-10.1,91.9
                                            c-3.1,100.8-2.3,201.7-1.2,302.5c0.5,43.5,0,87.3,9,130.2c11.4,54.2,37.6,97.9,88.5,123.8c30.6,15.5,63.5,22.5,97.4,24.6
                                            C363.2,910.6,434.3,909.8,505.4,909.5z"/>
                                            <path d="M505.3,243.4C646.4,243,760.7,357,761.7,499.1C762.6,640.6,648,756,506,756.6
                                            c-141,0.5-255.5-113.7-256.4-255.7C248.7,359.3,363.3,243.9,505.3,243.4z M506.1,333.6c-91.9-0.3-166,73.4-166.5,165.4
                                            c-0.5,92.5,73.3,167.1,165.6,167.4c91.8,0.3,166-73.4,166.5-165.5C672.2,408.5,598.4,333.9,506.1,333.6z"/>
                                            <path d="M831.6,233.7c-0.3,33.4-27.1,59.7-60.4,59.4c-33-0.3-59.3-27.5-59-60.9c0.3-32.7,27.1-58.9,60-58.7
                                            C805.7,173.6,831.9,200.2,831.6,233.7z"/>
                                        </svg>
                                    </a>
                                    <a href="" className="fifth-block__slide-link">
                                        <svg className="fifth-block__slide-link-img" viewBox="0 0 1000 1000">
                                            <path d="M684.1,0.2c4.8,3.8,10.5,1.6,15.7,2.1c17.1,1.6,34.3,3,51.4,4c5.4,0.3,7,2.4,7,7.8
                                            c-0.2,48.5-0.3,96.9,0.1,145.4c0.1,7.2-3.5,6.7-8.3,6.8c-35.4,0.6-70.7-1.5-106.1,1.4c-42,3.4-65.3,26-66.6,67.8
                                            c-1.3,41.3-0.4,82.6-0.9,123.9c-0.1,7.3,3.8,6.7,8.5,6.7c52.3,0,104.5,0.2,156.8-0.2c8.3-0.1,10.2,1.7,9.1,10.2
                                            c-7.1,52.8-13.8,105.7-20.3,158.5c-1,7.8-3.9,9.7-11.6,9.6c-44.5-0.4-88.9-0.1-133.4-0.3c-6.2,0-9.1,0.8-9.1,8.2
                                            c0.2,148,0.2,296,0.2,443.9c0,1.3,0.3,2.6,0.5,3.9c-61.1,0-122.1,0-183.2,0c-0.2-3.9-0.5-7.8-0.5-11.7c0-144.4-0.1-288.8,0.2-433.1
                                            c0-8.6-1.7-11.6-11-11.5c-44.5,0.5-88.9,0.1-133.4,0.4c-7,0-9.4-1.3-9.3-9c0.4-53.3,0.4-106.7,0-160c0-7.4,2-9.2,9.2-9.1
                                            c44.8,0.3,89.6,0,134.4,0.4c8.2,0.1,10.2-2.2,10.2-10.3c-0.2-47.1-1.2-94.4,0.7-141.4c2.2-56,18.7-107.3,58-149.2
                                            c30.2-32.1,67.9-50.1,110.4-59.4c9.3-2,19.2-1.1,27.9-5.7C621.7,0.2,652.9,0.2,684.1,0.2z"/>
                                        </svg>
                                    </a>
                                    <a href="" className="fifth-block__slide-link">
                                        <svg className="fifth-block__slide-link-img" viewBox="0 0 1000 1000">
                                            <path d="M999.8,140.8c-6.7,12.7-8,27-11.2,40.7c-55.1,233.5-109.9,467-164.7,700.5c-11.7,49.9-61.7,67.6-101.5,35.3
                                            C663,869.1,604,820.7,545.1,772c-6.3-5.2-9.9-5.2-16.3-0.3c-50.3,38.1-100.8,75.7-151.3,113.5c-2.9,2.1-5.7,4.4-8.6,6.4
                                            c-21.1,14.1-42,7-48.2-17.7c-6.8-26.7-12.1-53.8-17.9-80.8c-15.7-72.7-31.4-145.3-46.9-218c-1.4-6.4-4.5-9.7-10.4-12.3
                                            c-62.2-27-124.1-54.8-186.6-81.1c-25.9-10.9-49.2-23.1-58.6-52c0-8.5,0-16.9,0-25.4c8-24.5,23.9-39.8,48.9-48
                                            c288.7-94.8,577.3-190.1,866-285.3c39.8-13.1,71.1,3.3,83.2,43.4c0.1,0.5,1,0.7,1.5,1.1C999.8,123.8,999.8,132.3,999.8,140.8z
                                             M583,411c-88.6,49.1-177.2,98.2-265.8,147.2c-4.8,2.6-4,5.4-3.1,9.5c7,32,13.7,64.1,20.6,96.2c5.9,27.2,11.8,54.4,18.2,83.8
                                            c1.5-4,2.2-5.8,2.7-7.6c10.5-36.5,21-73,31.2-109.5c2.9-10.3,7.7-18.9,15.2-26.6c42.7-44.2,85.1-88.7,127.5-133.2
                                            c18.4-19.3,36.5-38.8,54.8-58.2c0.5-0.6,1.5-1.4,1.4-1.6C584.9,409.5,583.9,410.4,583,411z M461.2,627.2c1,1.1,1.4,1.6,1.9,2
                                            c98.4,80.5,196.8,161,295.1,241.7c8.1,6.7,7.8,0.2,8.9-4.5c14.2-60.3,28.4-120.7,42.6-181C852.8,502.2,896,319,938.9,135.7
                                            c0.7-3,3.5-6.8,1.2-9.2c-2.9-3.1-6.7,0.4-9.8,1.4C643.1,222.5,356,317.2,68.8,412c-3.2,1.1-7.2,0.9-9.2,5.3
                                            c3.3,1.6,6.5,3.1,9.7,4.6c66,28.9,132.1,57.6,197.9,86.8c7.7,3.4,13.4,3,20.6-1c145.5-81.1,291.1-162,436.8-242.9
                                            c4.2-2.4,8.6-4.7,13.2-6.2c13.9-4.6,27.8,1.3,34.6,14.2c6.6,12.6,3.7,24.9-9.3,38.5C668.3,410.6,573.4,509.8,478.5,609
                                            C472.7,615,466.9,621.2,461.2,627.2z M433.6,681.1c-10.8,37.9-21.2,74.2-32.2,112.8c30.7-23,59.5-44.5,88.8-66.5
                                            C471.3,711.9,453,697,433.6,681.1z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="fifth-block__slide">
                                <img className="fifth-block__slide-img" src="../../static/img/avatar.webp" alt=""/>
                                <p className="fifth-block__slide-name">Shavkiddin</p>
                                <p className="fifth-block__slide-position">Head of Sales</p>
                                <p className="fifth-block__slide-position">export</p>
                                <div className="fifth-block__slide-links">
                                    <a href="" className="fifth-block__slide-link">
                                        <svg className="fifth-block__slide-link-img" viewBox="0 0 1000 1000"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M677.1,999.8c-115,0-229.9,0-344.9,0c-2.7-3.6-6.6-1.8-9.8-1.9c-34.1-1.2-68-3.7-101.2-11.9
                                            c-85.9-21-149.7-69.1-184.7-152c-20.2-47.7-26.2-98.2-27.7-149.4c-0.1-3.6,1.7-7.8-1.9-10.8c0-116.5,0-233,0-349.5
                                            c3.7-2.6,1.8-6.6,1.9-9.8c1.3-33.5,3.8-66.8,11.8-99.5C41.4,129.3,89.2,65.6,171.4,30.3C218.7,10,268.7,3.8,319.5,2.2
                                            c3.6-0.1,7.8,1.7,10.8-2c115.6,0,231.2,0,346.8,0c2.7,3.6,6.6,1.7,9.9,1.9c34.8,1.2,69.3,3.6,103.3,11.9
                                            C870.6,33.6,932.4,77.2,969,153.1c23.3,48.3,31.5,100.2,33.1,153.2c3.7,129.1,3.7,258.3,0,387.4c-0.9,30.6-4,61-11.2,90.8
                                            c-20.8,86.3-68.9,150.2-151.6,185.5c-48.3,20.6-99.4,26.5-151.3,27.9C684.4,998,680.2,996.3,677.1,999.8z M505.4,909.5
                                            c39,0,77.9,0.7,116.9-0.2c47-1.1,94.3,0.4,140.7-9.2c72.4-15,119.7-57.2,138.9-129.7c8.3-31.4,10-63.5,11-95.7
                                            c3.1-100.8,2.3-201.7,1.1-302.5c-0.5-43.2-0.1-86.6-8.9-129.3c-14.4-70.4-54.2-118-124.1-138.5C748,94.7,713.9,93,679.8,92
                                            c-98-3-196.1-2.2-294.2-1.2c-45.7,0.5-91.6-0.2-136.8,9.1c-74.2,15.2-121.7,58.9-140.3,133c-7.6,30.2-9.2,61-10.1,91.9
                                            c-3.1,100.8-2.3,201.7-1.2,302.5c0.5,43.5,0,87.3,9,130.2c11.4,54.2,37.6,97.9,88.5,123.8c30.6,15.5,63.5,22.5,97.4,24.6
                                            C363.2,910.6,434.3,909.8,505.4,909.5z"/>
                                            <path d="M505.3,243.4C646.4,243,760.7,357,761.7,499.1C762.6,640.6,648,756,506,756.6
                                            c-141,0.5-255.5-113.7-256.4-255.7C248.7,359.3,363.3,243.9,505.3,243.4z M506.1,333.6c-91.9-0.3-166,73.4-166.5,165.4
                                            c-0.5,92.5,73.3,167.1,165.6,167.4c91.8,0.3,166-73.4,166.5-165.5C672.2,408.5,598.4,333.9,506.1,333.6z"/>
                                            <path d="M831.6,233.7c-0.3,33.4-27.1,59.7-60.4,59.4c-33-0.3-59.3-27.5-59-60.9c0.3-32.7,27.1-58.9,60-58.7
                                            C805.7,173.6,831.9,200.2,831.6,233.7z"/>
                                        </svg>
                                    </a>
                                    <a href="" className="fifth-block__slide-link">
                                        <svg className="fifth-block__slide-link-img" viewBox="0 0 1000 1000">
                                            <path d="M684.1,0.2c4.8,3.8,10.5,1.6,15.7,2.1c17.1,1.6,34.3,3,51.4,4c5.4,0.3,7,2.4,7,7.8
                                            c-0.2,48.5-0.3,96.9,0.1,145.4c0.1,7.2-3.5,6.7-8.3,6.8c-35.4,0.6-70.7-1.5-106.1,1.4c-42,3.4-65.3,26-66.6,67.8
                                            c-1.3,41.3-0.4,82.6-0.9,123.9c-0.1,7.3,3.8,6.7,8.5,6.7c52.3,0,104.5,0.2,156.8-0.2c8.3-0.1,10.2,1.7,9.1,10.2
                                            c-7.1,52.8-13.8,105.7-20.3,158.5c-1,7.8-3.9,9.7-11.6,9.6c-44.5-0.4-88.9-0.1-133.4-0.3c-6.2,0-9.1,0.8-9.1,8.2
                                            c0.2,148,0.2,296,0.2,443.9c0,1.3,0.3,2.6,0.5,3.9c-61.1,0-122.1,0-183.2,0c-0.2-3.9-0.5-7.8-0.5-11.7c0-144.4-0.1-288.8,0.2-433.1
                                            c0-8.6-1.7-11.6-11-11.5c-44.5,0.5-88.9,0.1-133.4,0.4c-7,0-9.4-1.3-9.3-9c0.4-53.3,0.4-106.7,0-160c0-7.4,2-9.2,9.2-9.1
                                            c44.8,0.3,89.6,0,134.4,0.4c8.2,0.1,10.2-2.2,10.2-10.3c-0.2-47.1-1.2-94.4,0.7-141.4c2.2-56,18.7-107.3,58-149.2
                                            c30.2-32.1,67.9-50.1,110.4-59.4c9.3-2,19.2-1.1,27.9-5.7C621.7,0.2,652.9,0.2,684.1,0.2z"/>
                                        </svg>
                                    </a>
                                    <a href="" className="fifth-block__slide-link">
                                        <svg className="fifth-block__slide-link-img" viewBox="0 0 1000 1000">
                                            <path d="M999.8,140.8c-6.7,12.7-8,27-11.2,40.7c-55.1,233.5-109.9,467-164.7,700.5c-11.7,49.9-61.7,67.6-101.5,35.3
                                            C663,869.1,604,820.7,545.1,772c-6.3-5.2-9.9-5.2-16.3-0.3c-50.3,38.1-100.8,75.7-151.3,113.5c-2.9,2.1-5.7,4.4-8.6,6.4
                                            c-21.1,14.1-42,7-48.2-17.7c-6.8-26.7-12.1-53.8-17.9-80.8c-15.7-72.7-31.4-145.3-46.9-218c-1.4-6.4-4.5-9.7-10.4-12.3
                                            c-62.2-27-124.1-54.8-186.6-81.1c-25.9-10.9-49.2-23.1-58.6-52c0-8.5,0-16.9,0-25.4c8-24.5,23.9-39.8,48.9-48
                                            c288.7-94.8,577.3-190.1,866-285.3c39.8-13.1,71.1,3.3,83.2,43.4c0.1,0.5,1,0.7,1.5,1.1C999.8,123.8,999.8,132.3,999.8,140.8z
                                             M583,411c-88.6,49.1-177.2,98.2-265.8,147.2c-4.8,2.6-4,5.4-3.1,9.5c7,32,13.7,64.1,20.6,96.2c5.9,27.2,11.8,54.4,18.2,83.8
                                            c1.5-4,2.2-5.8,2.7-7.6c10.5-36.5,21-73,31.2-109.5c2.9-10.3,7.7-18.9,15.2-26.6c42.7-44.2,85.1-88.7,127.5-133.2
                                            c18.4-19.3,36.5-38.8,54.8-58.2c0.5-0.6,1.5-1.4,1.4-1.6C584.9,409.5,583.9,410.4,583,411z M461.2,627.2c1,1.1,1.4,1.6,1.9,2
                                            c98.4,80.5,196.8,161,295.1,241.7c8.1,6.7,7.8,0.2,8.9-4.5c14.2-60.3,28.4-120.7,42.6-181C852.8,502.2,896,319,938.9,135.7
                                            c0.7-3,3.5-6.8,1.2-9.2c-2.9-3.1-6.7,0.4-9.8,1.4C643.1,222.5,356,317.2,68.8,412c-3.2,1.1-7.2,0.9-9.2,5.3
                                            c3.3,1.6,6.5,3.1,9.7,4.6c66,28.9,132.1,57.6,197.9,86.8c7.7,3.4,13.4,3,20.6-1c145.5-81.1,291.1-162,436.8-242.9
                                            c4.2-2.4,8.6-4.7,13.2-6.2c13.9-4.6,27.8,1.3,34.6,14.2c6.6,12.6,3.7,24.9-9.3,38.5C668.3,410.6,573.4,509.8,478.5,609
                                            C472.7,615,466.9,621.2,461.2,627.2z M433.6,681.1c-10.8,37.9-21.2,74.2-32.2,112.8c30.7-23,59.5-44.5,88.8-66.5
                                            C471.3,711.9,453,697,433.6,681.1z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="fifth-block__slide">
                                <img className="fifth-block__slide-img" src="../../static/img/avatar.webp" alt=""/>
                                <p className="fifth-block__slide-name">Shavkiddin</p>
                                <p className="fifth-block__slide-position">Head of Sales</p>
                                <p className="fifth-block__slide-position">export</p>
                                <div className="fifth-block__slide-links">
                                    <a href="" className="fifth-block__slide-link">
                                        <svg className="fifth-block__slide-link-img" viewBox="0 0 1000 1000"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M677.1,999.8c-115,0-229.9,0-344.9,0c-2.7-3.6-6.6-1.8-9.8-1.9c-34.1-1.2-68-3.7-101.2-11.9
                                            c-85.9-21-149.7-69.1-184.7-152c-20.2-47.7-26.2-98.2-27.7-149.4c-0.1-3.6,1.7-7.8-1.9-10.8c0-116.5,0-233,0-349.5
                                            c3.7-2.6,1.8-6.6,1.9-9.8c1.3-33.5,3.8-66.8,11.8-99.5C41.4,129.3,89.2,65.6,171.4,30.3C218.7,10,268.7,3.8,319.5,2.2
                                            c3.6-0.1,7.8,1.7,10.8-2c115.6,0,231.2,0,346.8,0c2.7,3.6,6.6,1.7,9.9,1.9c34.8,1.2,69.3,3.6,103.3,11.9
                                            C870.6,33.6,932.4,77.2,969,153.1c23.3,48.3,31.5,100.2,33.1,153.2c3.7,129.1,3.7,258.3,0,387.4c-0.9,30.6-4,61-11.2,90.8
                                            c-20.8,86.3-68.9,150.2-151.6,185.5c-48.3,20.6-99.4,26.5-151.3,27.9C684.4,998,680.2,996.3,677.1,999.8z M505.4,909.5
                                            c39,0,77.9,0.7,116.9-0.2c47-1.1,94.3,0.4,140.7-9.2c72.4-15,119.7-57.2,138.9-129.7c8.3-31.4,10-63.5,11-95.7
                                            c3.1-100.8,2.3-201.7,1.1-302.5c-0.5-43.2-0.1-86.6-8.9-129.3c-14.4-70.4-54.2-118-124.1-138.5C748,94.7,713.9,93,679.8,92
                                            c-98-3-196.1-2.2-294.2-1.2c-45.7,0.5-91.6-0.2-136.8,9.1c-74.2,15.2-121.7,58.9-140.3,133c-7.6,30.2-9.2,61-10.1,91.9
                                            c-3.1,100.8-2.3,201.7-1.2,302.5c0.5,43.5,0,87.3,9,130.2c11.4,54.2,37.6,97.9,88.5,123.8c30.6,15.5,63.5,22.5,97.4,24.6
                                            C363.2,910.6,434.3,909.8,505.4,909.5z"/>
                                            <path d="M505.3,243.4C646.4,243,760.7,357,761.7,499.1C762.6,640.6,648,756,506,756.6
                                            c-141,0.5-255.5-113.7-256.4-255.7C248.7,359.3,363.3,243.9,505.3,243.4z M506.1,333.6c-91.9-0.3-166,73.4-166.5,165.4
                                            c-0.5,92.5,73.3,167.1,165.6,167.4c91.8,0.3,166-73.4,166.5-165.5C672.2,408.5,598.4,333.9,506.1,333.6z"/>
                                            <path d="M831.6,233.7c-0.3,33.4-27.1,59.7-60.4,59.4c-33-0.3-59.3-27.5-59-60.9c0.3-32.7,27.1-58.9,60-58.7
                                            C805.7,173.6,831.9,200.2,831.6,233.7z"/>
                                        </svg>
                                    </a>
                                    <a href="" className="fifth-block__slide-link">
                                        <svg className="fifth-block__slide-link-img" viewBox="0 0 1000 1000">
                                            <path d="M684.1,0.2c4.8,3.8,10.5,1.6,15.7,2.1c17.1,1.6,34.3,3,51.4,4c5.4,0.3,7,2.4,7,7.8
                                            c-0.2,48.5-0.3,96.9,0.1,145.4c0.1,7.2-3.5,6.7-8.3,6.8c-35.4,0.6-70.7-1.5-106.1,1.4c-42,3.4-65.3,26-66.6,67.8
                                            c-1.3,41.3-0.4,82.6-0.9,123.9c-0.1,7.3,3.8,6.7,8.5,6.7c52.3,0,104.5,0.2,156.8-0.2c8.3-0.1,10.2,1.7,9.1,10.2
                                            c-7.1,52.8-13.8,105.7-20.3,158.5c-1,7.8-3.9,9.7-11.6,9.6c-44.5-0.4-88.9-0.1-133.4-0.3c-6.2,0-9.1,0.8-9.1,8.2
                                            c0.2,148,0.2,296,0.2,443.9c0,1.3,0.3,2.6,0.5,3.9c-61.1,0-122.1,0-183.2,0c-0.2-3.9-0.5-7.8-0.5-11.7c0-144.4-0.1-288.8,0.2-433.1
                                            c0-8.6-1.7-11.6-11-11.5c-44.5,0.5-88.9,0.1-133.4,0.4c-7,0-9.4-1.3-9.3-9c0.4-53.3,0.4-106.7,0-160c0-7.4,2-9.2,9.2-9.1
                                            c44.8,0.3,89.6,0,134.4,0.4c8.2,0.1,10.2-2.2,10.2-10.3c-0.2-47.1-1.2-94.4,0.7-141.4c2.2-56,18.7-107.3,58-149.2
                                            c30.2-32.1,67.9-50.1,110.4-59.4c9.3-2,19.2-1.1,27.9-5.7C621.7,0.2,652.9,0.2,684.1,0.2z"/>
                                        </svg>
                                    </a>
                                    <a href="" className="fifth-block__slide-link">
                                        <svg className="fifth-block__slide-link-img" viewBox="0 0 1000 1000">
                                            <path d="M999.8,140.8c-6.7,12.7-8,27-11.2,40.7c-55.1,233.5-109.9,467-164.7,700.5c-11.7,49.9-61.7,67.6-101.5,35.3
                                            C663,869.1,604,820.7,545.1,772c-6.3-5.2-9.9-5.2-16.3-0.3c-50.3,38.1-100.8,75.7-151.3,113.5c-2.9,2.1-5.7,4.4-8.6,6.4
                                            c-21.1,14.1-42,7-48.2-17.7c-6.8-26.7-12.1-53.8-17.9-80.8c-15.7-72.7-31.4-145.3-46.9-218c-1.4-6.4-4.5-9.7-10.4-12.3
                                            c-62.2-27-124.1-54.8-186.6-81.1c-25.9-10.9-49.2-23.1-58.6-52c0-8.5,0-16.9,0-25.4c8-24.5,23.9-39.8,48.9-48
                                            c288.7-94.8,577.3-190.1,866-285.3c39.8-13.1,71.1,3.3,83.2,43.4c0.1,0.5,1,0.7,1.5,1.1C999.8,123.8,999.8,132.3,999.8,140.8z
                                             M583,411c-88.6,49.1-177.2,98.2-265.8,147.2c-4.8,2.6-4,5.4-3.1,9.5c7,32,13.7,64.1,20.6,96.2c5.9,27.2,11.8,54.4,18.2,83.8
                                            c1.5-4,2.2-5.8,2.7-7.6c10.5-36.5,21-73,31.2-109.5c2.9-10.3,7.7-18.9,15.2-26.6c42.7-44.2,85.1-88.7,127.5-133.2
                                            c18.4-19.3,36.5-38.8,54.8-58.2c0.5-0.6,1.5-1.4,1.4-1.6C584.9,409.5,583.9,410.4,583,411z M461.2,627.2c1,1.1,1.4,1.6,1.9,2
                                            c98.4,80.5,196.8,161,295.1,241.7c8.1,6.7,7.8,0.2,8.9-4.5c14.2-60.3,28.4-120.7,42.6-181C852.8,502.2,896,319,938.9,135.7
                                            c0.7-3,3.5-6.8,1.2-9.2c-2.9-3.1-6.7,0.4-9.8,1.4C643.1,222.5,356,317.2,68.8,412c-3.2,1.1-7.2,0.9-9.2,5.3
                                            c3.3,1.6,6.5,3.1,9.7,4.6c66,28.9,132.1,57.6,197.9,86.8c7.7,3.4,13.4,3,20.6-1c145.5-81.1,291.1-162,436.8-242.9
                                            c4.2-2.4,8.6-4.7,13.2-6.2c13.9-4.6,27.8,1.3,34.6,14.2c6.6,12.6,3.7,24.9-9.3,38.5C668.3,410.6,573.4,509.8,478.5,609
                                            C472.7,615,466.9,621.2,461.2,627.2z M433.6,681.1c-10.8,37.9-21.2,74.2-32.2,112.8c30.7-23,59.5-44.5,88.8-66.5
                                            C471.3,711.9,453,697,433.6,681.1z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="fifth-block__arrow-wrap">
                            <svg className="fifth-block__arrow-img" viewBox="0 0 1000 1000">
                                <path d="M340.8,865.5c-1.7-1.5-3.2-2.8-4.5-4.1c-11.5-11.5-22.7-23.3-34.6-34.4c-5.2-4.9-4.4-7.4,0.3-12.1
                                c52.4-52.1,104.6-104.3,156.8-156.6c50.4-50.4,100.6-100.9,151.3-151c6.3-6.3,5.6-9.2-0.2-15.1C507.4,390.4,405.4,288.1,303,186.2
                                c-6.3-6.2-5.9-9.3,0.2-14.9c11.1-10.1,21.6-20.7,31.8-31.7c4.8-5.2,7.5-4.4,12.1,0.3c31.3,31.7,63,63.1,94.5,94.7
                                c85.9,86.2,171.8,172.4,257.9,258.4c5.9,5.9,5.3,8.8-0.2,14.4C581.4,625.1,463.7,743,346,860.9
                                C344.4,862.5,342.7,863.9,340.8,865.5z"/>
                            </svg>
                        </div>
                    </div>
                    <p className="block-title">Our partners</p>
                    <div className="fifth-block__partners">
                        <img src="../../static/img/SAG.svg" alt="" className="fifth-block__partner"/>
                        <img src="../../static/img/SET.svg" alt="" className="fifth-block__partner"/>
                        <img src="../../static/img/SIS.svg" alt="" className="fifth-block__partner"/>
                        <img src="../../static/img/TuftAndGrass.svg" alt="" className="fifth-block__partner"/>
                        <img src="../../static/img/SagExpress.svg" alt="" className="fifth-block__partner"/>
                        <img src="../../static/img/MaroqandSifat.svg" alt="" className="fifth-block__partner"/>
                        <img src="../../static/img/UzNuts.svg" alt="" className="fifth-block__partner"/>
                        <img src="../../static/img/Bionur.svg" alt="" className="fifth-block__partner"/>
                        <img src="../../static/img/XivaGilamlari.svg" alt="" className="fifth-block__partner"/>
                        <img src="../../static/img/SEAL.svg" alt="" className="fifth-block__partner"/>
                        <img src="../../static/img/Lelit.svg" alt="" className="fifth-block__partner"/>
                        <img src="../../static/img/MaroqandKlaster.svg" alt="" className="fifth-block__partner"/>
                    </div>
                </section>
                <section className="sixth-block">
                    <h1 className="sixth-block__title">Haven't decided which one exactly</h1>
                    <h1 className="sixth-block__title">Is lawn right for you?</h1>
                    <div className="sixth-block__subtitle">
                        <p className="sixth-block__text">Leave a request and we will contact you</p>
                        <p className="sixth-block__text">to find the ideal solution</p>
                    </div>
                    <form className="sixth-block__form" action="">
                        <input className="sixth-block__input" type="text" placeholder="Your name:"/>
                        <input className="sixth-block__input" type="number" placeholder="Your phone number:"/>
                        <input className="sixth-block__submit" type="submit" value="Submit your application"/>
                    </form>
                    <p className="sixth-block__text">*The final cost of landscaping an object depends on its
                         squares,</p>
                    <p className="sixth-block__text">current conditions at the site and the complexity of preparatory
                         works</p>
                </section>
                <section className="seventh-block">
                    <div className="seventh-block__wrap">
                        <div className="seventh-block__left-side">
                            <div className="seventh-block__contact-wrap">
                                <p className="seventh-block__contact-title">Contacts</p>
                                <p className="seventh-block__contact-text">+998 (90) 600-00-00</p>
                                <p className="seventh-block__contact-text">+998 (90) 600-00-01</p>
                            </div>
                            <div className="seventh-block__contact-wrap">
                                <p className="seventh-block__contact-title">Address</p>
                                <p className="seventh-block__contact-text">Uzbekistan, Samarkand</p>
                                <p className="seventh-block__contact-text">Spitamenshoh 270</p>
                            </div>
                            <div className="seventh-block__contact-wrap">
                                <p className="seventh-block__contact-title">Working hours</p>
                                <p className="seventh-block__contact-text">Mn - St</p>
                                <p className="seventh-block__contact-text">09:00 - 18:00</p>
                            </div>
                        </div>
                        <div className="seventh-block__right-side">
                            <iframe className="seventh-block__contact-map"
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aadca389633c35bd982884b0c09f2029b4298ddc4f1a8247eb4a7d2b126ca9d99&amp;source=constructor"
                                    width="767" height="565" frameBorder="0"></iframe>
                        </div>
                    </div>
                    <div className="seventh-block__blog-title">Blog</div>
                    <div className="post__wrapper">
                        <a href="" className="post">
                            <img alt="" src="../../static/img/0001-min.webp" className="post__img"/>
                            <div className="post__content">
                                <div>
                                    <p className="post__title">How about SAG rugs in a child's room?</p>
                                    <p>We are confident that Zilli, Bambino, Baby, Bali carpets will become one of the best
                                         offers for...</p>
                                </div>
                                <div className="post__date-wrap">
                                    <svg className="post__date-img" viewBox="0 0 1000 1000">
                                        <path d="M1000.1,189.4c0,267.2,0,534.4,0.2,801.6c0,7.3-1.6,9-9,9c-327.4-0.2-654.8-0.2-982.2,0c-7.3,0-9-1.6-9-9
                                        c0.2-267.9,0.2-535.7,0.2-803.6c3-0.9,2.2-3.7,2.7-5.7C19.9,119.1,66,83.5,130.8,83.5c37,0,74-0.2,111,0.1c6.8,0.1,8.8-1.8,8.6-8.7
                                        c-0.4-25-0.2-50-0.2-75c28,0,56,0,84,0c-0.2,25-0.1,50.1-0.6,75.1c-0.2,7.1,2.4,8.5,9,8.5c45.2-0.2,90.5-0.1,135.7-0.1
                                        c59.9,0,119.7,0,179.6,0c4.5,0,9.1,1,8.9-6.4c-0.5-25.7-0.4-51.4-0.6-77.1c28,0,56,0,84,0c0,24.7,0.4,49.5-0.2,74.2
                                        c-0.2,8.1,2.6,9.5,9.9,9.5c37.7-0.3,75.5-0.3,113.2-0.1c62.7,0.3,111.4,39.9,124.9,101.1C998.3,186.3,997.5,188.7,1000.1,189.4z
                                         M501.2,416.4c-135.4,0-270.8,0.1-406.2-0.2c-8.6,0-11.5,1.7-11.5,11c0.3,159.5,0.3,318.9,0,478.4c0,8.2,1.4,10.9,10.4,10.9
                                        c270.8-0.3,541.5-0.3,812.3,0c9,0,10.4-2.7,10.4-10.9c-0.2-159.5-0.3-318.9,0-478.4c0-9.3-2.9-11-11.5-11
                                        C770.7,416.5,635.9,416.4,501.2,416.4z M499.6,333.4c135.7,0,271.3-0.1,407,0.2c8.2,0,10.3-2.2,10.2-10.3
                                        c-0.4-37.1-0.1-74.2-0.2-111.3c-0.1-28.6-16.9-45.6-45.4-45.6c-247.3-0.1-494.5-0.1-741.8,0c-28.7,0-45.5,16.8-45.6,45.4
                                        c-0.1,36.8,0.4,73.5-0.3,110.3c-0.2,9.9,3,11.5,12,11.5C230.3,333.4,364.9,333.4,499.6,333.4z"/>
                                        <path d="M333.5,624.9c-11.7,0-23.4-0.2-35.1,0.1c-5,0.1-6.8-1.3-6.7-6.6c0.2-23.4,0.3-46.8,0-70.2
                                        c-0.1-5.8,2.3-7,7.5-7c23.1,0.2,46.1,0.3,69.2,0c5.7-0.1,7.1,1.9,7,7.3c-0.3,23.1-0.4,46.1,0.1,69.2c0.1,6.5-2.3,7.4-7.8,7.3
                                        C356.2,624.6,344.8,624.9,333.5,624.9z"/>
                                        <path d="M625.2,583.1c0-11.7,0.2-23.4-0.1-35.1c-0.1-5,1.4-6.8,6.6-6.7c23.4,0.2,46.8,0.3,70.2,0
                                        c5.9-0.1,7,2.3,6.9,7.5c-0.2,23.1-0.3,46.1,0,69.2c0.1,5.7-1.9,7.1-7.3,7c-23.1-0.3-46.1-0.4-69.2,0.1c-6.5,0.1-7.4-2.3-7.3-7.9
                                        C625.5,605.8,625.2,594.5,625.2,583.1z"/>
                                        <path d="M500.2,624.9c-11.7,0-23.4-0.2-35.1,0.1c-5.2,0.2-6.6-1.6-6.5-6.6c0.2-23.4,0.3-46.8,0-70.1
                                        c-0.1-5.9,2.3-7,7.5-6.9c22.7,0.2,45.5,0.2,68.2,0c5.2,0,7.6,1,7.5,6.9c-0.3,23.4-0.2,46.8,0,70.1c0,5-1.3,6.8-6.5,6.7
                                        C523.6,624.6,511.9,624.9,500.2,624.9z"/>
                                        <path d="M333.2,791.4c-11.4,0-22.7-0.2-34.1,0.1c-5.1,0.1-7.6-1-7.5-6.9c0.3-23.1,0.3-46.1,0-69.2
                                        c-0.1-5.7,2-7.1,7.3-7.1c23.4,0.2,46.8,0.2,70.1,0c4.5,0,6.3,1.1,6.2,5.9c-0.2,23.7-0.2,47.4,0,71.1c0,4.6-1.4,6.2-6.1,6.1
                                        C357.3,791.2,345.3,791.4,333.2,791.4z"/>
                                        <path d="M667.1,708.4c11.4,0,22.7,0.2,34.1-0.1c5-0.1,7.7,0.8,7.6,6.8c-0.3,23.4-0.2,46.8,0,70.1
                                        c0,4.7-1.7,6.2-6.2,6.2c-24-0.1-48.1-0.2-72.1,0c-4.5,0-5.3-1.9-5.3-5.8c0.1-23.7,0.2-47.4-0.1-71.1c-0.1-5.6,2.4-6.3,7-6.2
                                        C643.7,708.5,655.4,708.4,667.1,708.4z"/>
                                        <path d="M500.5,708.4c11.7,0,23.4,0.2,35.1-0.1c4.5-0.1,6.3,1.2,6.2,6c-0.2,23.7-0.2,47.4,0,71.1c0,4.8-1.8,6-6.3,6
                                        c-23.4-0.2-46.8-0.2-70.2,0c-5,0-6.8-1.3-6.8-6.5c0.2-23.4,0.2-46.8,0-70.2c-0.1-5.3,1.8-6.6,6.8-6.5
                                        C477.1,708.6,488.8,708.4,500.5,708.4z"/>
                                    </svg>
                                    <div className="seventh-block__post-date">25.07.2023</div>
                                </div>
                            </div>
                        </a>
                        <a href="" className="post">
                            <img alt="" src="../../static/img/0002-min.webp" className="post__img"/>
                            <div className="post__content">
                                <div>
                                    <p className="post__title">How about SAG rugs in a child's room?</p>
                                    <p>We are confident that Zilli, Bambino, Baby, Bali carpets will become one of the best
                                         offers for...</p>
                                </div>
                                <div className="post__date-wrap">
                                    <svg className="post__date-img" viewBox="0 0 1000 1000">
                                        <path d="M1000.1,189.4c0,267.2,0,534.4,0.2,801.6c0,7.3-1.6,9-9,9c-327.4-0.2-654.8-0.2-982.2,0c-7.3,0-9-1.6-9-9
                                        c0.2-267.9,0.2-535.7,0.2-803.6c3-0.9,2.2-3.7,2.7-5.7C19.9,119.1,66,83.5,130.8,83.5c37,0,74-0.2,111,0.1c6.8,0.1,8.8-1.8,8.6-8.7
                                        c-0.4-25-0.2-50-0.2-75c28,0,56,0,84,0c-0.2,25-0.1,50.1-0.6,75.1c-0.2,7.1,2.4,8.5,9,8.5c45.2-0.2,90.5-0.1,135.7-0.1
                                        c59.9,0,119.7,0,179.6,0c4.5,0,9.1,1,8.9-6.4c-0.5-25.7-0.4-51.4-0.6-77.1c28,0,56,0,84,0c0,24.7,0.4,49.5-0.2,74.2
                                        c-0.2,8.1,2.6,9.5,9.9,9.5c37.7-0.3,75.5-0.3,113.2-0.1c62.7,0.3,111.4,39.9,124.9,101.1C998.3,186.3,997.5,188.7,1000.1,189.4z
                                         M501.2,416.4c-135.4,0-270.8,0.1-406.2-0.2c-8.6,0-11.5,1.7-11.5,11c0.3,159.5,0.3,318.9,0,478.4c0,8.2,1.4,10.9,10.4,10.9
                                        c270.8-0.3,541.5-0.3,812.3,0c9,0,10.4-2.7,10.4-10.9c-0.2-159.5-0.3-318.9,0-478.4c0-9.3-2.9-11-11.5-11
                                        C770.7,416.5,635.9,416.4,501.2,416.4z M499.6,333.4c135.7,0,271.3-0.1,407,0.2c8.2,0,10.3-2.2,10.2-10.3
                                        c-0.4-37.1-0.1-74.2-0.2-111.3c-0.1-28.6-16.9-45.6-45.4-45.6c-247.3-0.1-494.5-0.1-741.8,0c-28.7,0-45.5,16.8-45.6,45.4
                                        c-0.1,36.8,0.4,73.5-0.3,110.3c-0.2,9.9,3,11.5,12,11.5C230.3,333.4,364.9,333.4,499.6,333.4z"/>
                                        <path d="M333.5,624.9c-11.7,0-23.4-0.2-35.1,0.1c-5,0.1-6.8-1.3-6.7-6.6c0.2-23.4,0.3-46.8,0-70.2
                                        c-0.1-5.8,2.3-7,7.5-7c23.1,0.2,46.1,0.3,69.2,0c5.7-0.1,7.1,1.9,7,7.3c-0.3,23.1-0.4,46.1,0.1,69.2c0.1,6.5-2.3,7.4-7.8,7.3
                                        C356.2,624.6,344.8,624.9,333.5,624.9z"/>
                                        <path d="M625.2,583.1c0-11.7,0.2-23.4-0.1-35.1c-0.1-5,1.4-6.8,6.6-6.7c23.4,0.2,46.8,0.3,70.2,0
                                        c5.9-0.1,7,2.3,6.9,7.5c-0.2,23.1-0.3,46.1,0,69.2c0.1,5.7-1.9,7.1-7.3,7c-23.1-0.3-46.1-0.4-69.2,0.1c-6.5,0.1-7.4-2.3-7.3-7.9
                                        C625.5,605.8,625.2,594.5,625.2,583.1z"/>
                                        <path d="M500.2,624.9c-11.7,0-23.4-0.2-35.1,0.1c-5.2,0.2-6.6-1.6-6.5-6.6c0.2-23.4,0.3-46.8,0-70.1
                                        c-0.1-5.9,2.3-7,7.5-6.9c22.7,0.2,45.5,0.2,68.2,0c5.2,0,7.6,1,7.5,6.9c-0.3,23.4-0.2,46.8,0,70.1c0,5-1.3,6.8-6.5,6.7
                                        C523.6,624.6,511.9,624.9,500.2,624.9z"/>
                                        <path d="M333.2,791.4c-11.4,0-22.7-0.2-34.1,0.1c-5.1,0.1-7.6-1-7.5-6.9c0.3-23.1,0.3-46.1,0-69.2
                                        c-0.1-5.7,2-7.1,7.3-7.1c23.4,0.2,46.8,0.2,70.1,0c4.5,0,6.3,1.1,6.2,5.9c-0.2,23.7-0.2,47.4,0,71.1c0,4.6-1.4,6.2-6.1,6.1
                                        C357.3,791.2,345.3,791.4,333.2,791.4z"/>
                                        <path d="M667.1,708.4c11.4,0,22.7,0.2,34.1-0.1c5-0.1,7.7,0.8,7.6,6.8c-0.3,23.4-0.2,46.8,0,70.1
                                        c0,4.7-1.7,6.2-6.2,6.2c-24-0.1-48.1-0.2-72.1,0c-4.5,0-5.3-1.9-5.3-5.8c0.1-23.7,0.2-47.4-0.1-71.1c-0.1-5.6,2.4-6.3,7-6.2
                                        C643.7,708.5,655.4,708.4,667.1,708.4z"/>
                                        <path d="M500.5,708.4c11.7,0,23.4,0.2,35.1-0.1c4.5-0.1,6.3,1.2,6.2,6c-0.2,23.7-0.2,47.4,0,71.1c0,4.8-1.8,6-6.3,6
                                        c-23.4-0.2-46.8-0.2-70.2,0c-5,0-6.8-1.3-6.8-6.5c0.2-23.4,0.2-46.8,0-70.2c-0.1-5.3,1.8-6.6,6.8-6.5
                                        C477.1,708.6,488.8,708.4,500.5,708.4z"/>
                                    </svg>
                                    <div className="seventh-block__post-date">25.07.2023</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <a href="" className="seventh-block__view-all">View all</a>
                </section>
            </main>
        );
    }
}
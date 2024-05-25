import React, {Component} from "react";
import {Navigate, useParams} from "react-router-dom";
import './Main.css'
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import About from "../About/About";
import Vacancies from "../Vacancies/Vacancies";
import Contacts from "../Contacts/Contacts";

export default function Main(props) {
    let params = useParams()
    return <MainClass {...props} params={params}/>
}

class MainClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            main_show: false,
            main_content_show: false,
            menu_nav: this.props.level,
            nav_id: '',
        }

    }

    navi = (level, id = undefined) => {
        if (id !== undefined) {
            this.setState({nav_id: id})
        }
        this.setState({menu_nav: level});
        this.setState({main_content_show: false});
        setTimeout(() => {
            this.setState({navigate: level}, () => {
                this.setState({navigate: ''})
                window.scrollTo(0, 0)
            });
        }, 300);
        setTimeout(() => {
            this.setState({main_content_show: true});
        }, 600);
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({main_show: true})
            this.setState({main_content_show: true})
        }, 300);
    }

    render() {
        return (
            <div className={this.state.main_show ? 'main' : 'main main_hidden'}>
                <header className="header">
                    <div className="header__wrap">
                        <div className="header__left">
                            <div className="header__left-block"></div>
                        </div>
                        <div className="header__center">
                            <a onClick={() => {this.navi('catalog')}} className="header__link">Каталог</a>
                            <a onClick={() => {this.navi('about')}} className="header__link">О нас</a>
                            <a onClick={() => {this.navi('home')}} >
                                <img className="header__logo-img" src="../../static/img/logo.svg" alt="sagtuft"/>
                            </a>
                            <a onClick={() => {this.navi('vacancies')}} className="header__link">Вакансии</a>
                            <a onClick={() => {this.navi('contacts')}} className="header__link">Контакты</a>
                        </div>
                        <div className="header__right">
                            <div className="header__lang-wrap">
                                <div className="header__lang-flag"></div>
                                <svg className="header__lang-arrow" viewBox="0 0 1000 500">
                                    <polyline points="0,0 1000,0 500,500 "/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={this.state.main_content_show ? 'main__content' : 'main__content main__content_hidden'}>
                    {this.state.navigate === 'home' && <Navigate to='/'/>}
                    {this.state.navigate === 'catalog' && <Navigate to='/catalog/'/>}
                    {this.state.navigate === 'about' && <Navigate to={'/about/'}/>}
                    {this.state.navigate === 'vacancies' && <Navigate to='/vacancies/'/>}
                    {this.state.navigate === 'contacts' && <Navigate to='/contacts/'/>}
                    {this.props.level === 'home' && <Home />}
                    {this.props.level === 'catalog' && <Catalog />}
                    {this.props.level === 'about' && <About />}
                    {this.props.level === 'vacancies' && <Vacancies />}
                    {this.props.level === 'contacts' && <Contacts />}
                </div>
                <footer className={this.state.main_content_show ? 'footer' : 'footer footer_hidden'}>
                    <div className="footer__col">
                        <img className="footer__logo-img" src="../../static/img/logo.svg" alt="sagtuft"/>
                        <div className="footer__menu-block">
                            <p className="footer__menu-title">Следите за нами</p>
                            <div className="footer__links">
                                <a href="" className="footer__link">
                                    <svg className="footer__link-img" viewBox="0 0 1000 1000"
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
                                <a href="" className="footer__link">
                                    <svg className="footer__link-img" viewBox="0 0 1000 1000">
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
                                <a href="" className="footer__link">
                                    <svg className="footer__link-img" viewBox="0 0 1000 1000">
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
                                <a href="" className="footer__link">
                                    <svg className="footer__link-img" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 1000 1000">
                                        <path className="st0" d="M999.81,394.58c0,70.94,0,141.87,0,212.81c-3.57,2.71-1.69,6.59-1.93,9.9c-2.96,41.77-3.34,83.66-13.55,124.81
                                    c-17.79,71.7-65.75,115.65-134.6,123.46c-37.85,4.29-75.9,5.6-113.88,7.06c-103.36,3.98-206.75,7.33-310.21,4.22
                                    c-89.38-2.69-178.9-2.16-267.96-11.79C77.75,856.4,31.3,813.97,13.81,735.51c-8.7-39.02-8.82-78.72-11.7-118.22
                                    c-0.24-3.31,1.64-7.19-1.93-9.9c0-71.59,0-143.17,0-214.76c3.63-2.68,1.71-6.58,1.95-9.88c2.98-41.45,3.15-83.09,13.56-123.86
                                    c16.94-66.27,56.15-109.79,124.45-123.12c38.4-7.49,77.75-6.67,116.71-8.35c120.95-5.23,241.95-7.73,363.02-4.26
                                    c73.18,2.1,146.38,3.85,219.36,9.86c74.56,6.14,128.38,48.95,145.77,126.72c6.87,30.71,8.76,61.69,11.25,92.78
                                    C997.38,366.55,995.74,380.82,999.81,394.58z M486.13,179.66c-56.22,1.35-125.84,2.54-195.42,4.87
                                    c-42.9,1.44-85.84,3.52-128.58,7.34c-40.88,3.65-70.22,23.85-84.26,64.48c-10.36,29.98-13.25,60.81-15.1,91.98
                                    c-5.35,90.05-5.66,180.15-1.69,270.23c1.72,38.88,1.44,78.18,13.18,115.95c5.1,16.43,10.73,32.57,23.69,45.17
                                    c17.51,17.03,39.26,23.35,62.45,26.75c34.19,5,68.69,6.07,103.11,7.42c157.4,6.17,314.83,7.81,472.23,0.2
                                    c37.66-1.82,75.53-1.74,112.88-7.56c33.9-5.28,58.31-23.07,71.19-56.1c12.39-31.76,15.53-64.87,17.48-98.36
                                    c5.18-89.4,5.63-178.86,1.65-268.28c-1.76-39.53-1.5-79.44-13.08-117.95c-6.15-20.46-14.12-39.47-32.11-53.14
                                    c-21.3-16.19-45.87-20.92-71.38-22.49C714.86,183.52,607.21,181.09,486.13,179.66z"/>
                                        <path className="st0" d="M373.03,489.15c0-38.05-0.06-76.09,0.02-114.14c0.08-37.75,31.06-56.47,64.12-38.47
                                    c70.98,38.66,141.77,77.67,212.74,116.36c15.2,8.29,24.79,20.26,24.8,37.8c0.01,17.54-9.56,29.63-24.8,37.79
                                    c-71.23,38.19-142.34,76.61-213.62,114.69c-32.13,17.17-63.08-1.53-63.22-37.94C372.92,566.54,373.03,527.84,373.03,489.15z
                                     M431.91,579.12c55.35-29.76,109.19-58.72,164.68-88.56c-55.67-30.46-109.81-60.09-164.68-90.12
                                    C431.91,460.51,431.91,518.99,431.91,579.12z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__menu-block">
                            <p className="footer__menu-title">Телефонные номера</p>
                            <a href="" className="footer__menu-link">+998 (90) 600-00-00</a>
                            <a href="" className="footer__menu-link">+998 (90) 600-00-01</a>
                            <p className="footer__menu-title">Адрес почты</p>
                            <a href="" className="footer__menu-link">sagtuft@sag.uz</a>
                            <p className="footer__copyright">Copyright © SAG 2023. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__menu-block">
                            <p className="footer__menu-title">Информация</p>
                            <a href="" className="footer__menu-link">Наши адреса</a>
                            <a href="" className="footer__menu-link">Блоги</a>
                            <a href="" className="footer__menu-link">О нас</a>
                            <a href="" className="footer__menu-link">Часто задаваемые вопросы</a>
                            <a href="" className="footer__menu-link">Пользовательское соглашение</a>
                            <a href="" className="footer__menu-link">Вакансия</a>
                            <a href="" className="footer__menu-link">Адрес стадионов</a>
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__menu-block">
                            <p className="footer__menu-title">Каталог</p>
                            <a href="" className="footer__menu-link">Ковролин</a>
                            <a href="" className="footer__menu-link">Искусственный газон</a>
                            <a href="" className="footer__menu-link">Вельвет</a>
                            <a href="" className="footer__menu-link">Нитка</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
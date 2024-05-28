import React, {Component} from "react";
import {useParams} from "react-router-dom";
import './About.css'

export default function AboutUz(props) {
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
                        <p className="about__text">Sag Taft va o't o'z faoliyatini 2013 yilda Sam Antepning bir qismi sifatida boshlagan. Kompaniya faoliyati
                             uy-joylar va savdo ob'ektlari uchun gilam va sun'iy qoplamadan yulka toshlarini ishlab chiqarish;
                             peyzaj kompozitsiyalarini yaratish va sport maydonchalaridan foydalanish uchun sun'iy çim, va
                             da ishlab chiqarilgan mahsulotlar kabi yuguruvchilar va hammom paspaslar ham
                             faqat ekologik toza xom ashyolardan foydalangan holda yuqori texnologiyali uskunalar va
                             materiallar yuqori sifat darajasini ta'minlaydi Gilam va sun'iy çim to'qiladi
                             faqat yuqori texnologiyali Belgiya, Germaniya va Shveytsariya uskunalari yordamida
                             yuqori sifatli va ekologik toza xom ashyo va materiallar, bu esa yuqoriligini ta'minlaydi
                             sifat darajasi.mahsulot sifati. Yuqori global sifat standartlarini ta'minlash uchun
                             korxonada amalga oshirildi Qarang: 01.0022.68810861 xalqaro boshqaruv tizimi joriy etildi
                             sifat. Zavod mahsulotlari ishlab chiqarish liniyasi doimiy ravishda to'ldirilib boriladi va ko'p yillar davomida mavjud
                             muvaffaqiyatli sertifikatlangan va har ikkala hududda mijozlarning ijobiy sharhlariga ega
                             O‘zbekiston Respublikasi va xorijda.</p>
                        <img className="about__img" src="../../../static/img/about-img.webp" alt=""/>
                        <p className="about__subtitle">Bizning afzalliklarimiz</p>
                        <p className="about__text">1. Mahsulot narxlari bevosita zavod tomonidan belgilanadi</p>
                        <p className="about__text">2. Mahsulotlarimiz ishlab chiqarishda etakchi bo'lgan SAG tomonidan ishlab chiqariladi
                             MDH mamlakatlaridagi quvvatlar</p>
                        <p className="about__text">3. Gilam mahsulotlarining 100 mingdan ortiq turlarini o'z ichiga olgan assortimentni faqat quyidagi manzilda topish mumkin
                             biz (uyingizga mos gilamni albatta topishingizga ishonamiz)</p>
                        <p className="about__text">4. Yetkazib berish muddati omborga qarab 1 kundan 10 kungacha
                             siz tanlagan mahsulot. Ha, aytmoqchi, SAG expressda yetkazib berish xizmati biz uchun bepul
                             mijozlar</p>
                        <p className="about__text">5. Professionalimizdan bepul maslahat xizmatlaridan foydalanishingiz mumkin
                             uyingiz uchun to'g'ri gilam dizaynini tanlash uchun savdo bo'yicha mutaxassislar</p>
                        <p className="about__text">6. Shuningdek, mijozlarimiz uchun bo‘lib-bo‘lib to‘lov xizmati mavjud</p>
                    </div>
                </section>
            </main>
        );
    }
}
import Phone from "@/components/Phone/Phone";
import styles from "./Footer.module.scss";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import Image from "next/image";


export default function Footer() {
    return (
        <>
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer_top}>
                    <ul className={styles.footer_top__list}>
                        <li className={styles.footer_top__item}>
                            <h3 className={styles.item__title}>
                                Популярные 
                                категории
                            </h3>
                            <hr />
                            <ul className={styles.list__list}>
                                <li>
                                    Насадки
                                </li>
                                <li>
                                    Инструменти
                                </li>
                                <li>
                                    Гель-лаки
                                </li>
                                <li>
                                    Дизайн
                                </li>
                                <li>
                                    Наращивание
                                </li>
                                <li>
                                    Оборудование
                                </li>
                            </ul>
                        </li>
                        <li className={styles.footer_top__item}>
                            <h3 className={styles.item__title}>
                                Популярные 
                                категории
                            </h3>
                            <hr />
                            <ul className={styles.list__list}>
                                <li>
                                    Насадки
                                </li>
                                <li>
                                    Инструменти
                                </li>
                                <li>
                                    Гель-лаки
                                </li>
                                <li>
                                    Дизайн
                                </li>
                                <li>
                                    Наращивание
                                </li>
                                <li>
                                    Оборудование
                                </li>
                            </ul>
                        </li>
                        <li className={styles.footer_top__item}>
                            <h3 className={styles.item__title}>
                                Популярные 
                                категории
                            </h3>
                            <hr />
                            <ul className={styles.list__list}>
                                <li>
                                    Насадки
                                </li>
                                <li>
                                    Инструменти
                                </li>
                                <li>
                                    Гель-лаки
                                </li>
                                <li>
                                    Дизайн
                                </li>
                                <li>
                                    Наращивание
                                </li>
                                <li>
                                    Оборудование
                                </li>
                            </ul>
                        </li>
                        <li className={styles.footer_top__item}>
                            <h3 className={styles.item__title}>
                                Популярные 
                                категории
                            </h3>
                            <hr />
                            <ul className={styles.list__list}>
                                <li>
                                    Насадки
                                </li>
                                <li>
                                    Инструменти
                                </li>
                                <li>
                                    Гель-лаки
                                </li>
                                <li>
                                    Дизайн
                                </li>
                                <li>
                                    Наращивание
                                </li>
                                <li>
                                    Оборудование
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className={styles.footer_bottom}>
                    <ul className={styles.footer_bottom__list}>
                        <li className={styles.list__item}>
                            <Image
                                alt="logo"
                                src={'/img/youtube.svg'}
                                width={45} 
                                height={45}
                            />
                            <Image
                                alt="logo"
                                src={'/img/vk.svg'}
                                width={45} 
                                height={45}
                            />
                            <Image
                                alt="logo"
                                src={'/img/f.svg'}
                                width={45} 
                                height={45}
                            />
                            <Image
                                alt="logo"
                                src={'/img/instagram.svg'}
                                width={45} 
                                height={45}
                            />
                        </li>
                        <li className={styles.list__text}>
                        198555, Невский пр. 140, офис 140
                        </li>
                        <Phone/>
                        <ButtonLink text={"Обратний звонок"} url={"#"} style={"pink"}/>
                    </ul>
                </div>
            </div>
        </footer>
        <div className="container">
        <div className={styles.footer__inf}>
            <p>
            Лучший магазин (с) 2019 Все права защищены. Интернет-магазин оборудования для салонов красоты
            </p>
            <p>Политика конфиденциальности</p>
        </div>
        </div>
        </>
    )};
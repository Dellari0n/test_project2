import Link from "next/link";
import styles from "./Header.module.scss";
import Logo from "@/components/Logo/Logo";
import Input from "@/components/Input/Input";
import Phone from "@/components/Phone/Phone";
import ButtonLink from "@/components/ButtonLink/ButtonLink";

export default function Header() {
  return (
    <header className={styles.header}>
        <nav className={styles.nav_top}>
            <ul className={styles.nav_top__list}>
                <li className={styles.nav_top__item}>
                    <Link className={styles.nav_top__item} href={"#"}>
                        Доставка
                    </Link>
                </li>
                <li className={styles.nav_top__item}>
                    <Link className={styles.nav_top__link} href={"#"}>
                        Оплата
                    </Link>
                </li>
                <li className={styles.nav_top__item}>
                    <Link className={styles.nav_top__link} href={"#"}>
                        Доставка
                    </Link>
                </li>
                <li className={styles.nav_top__item}>
                    <Link className={styles.nav_top__link} href={"#"}>
                        Отзиви
                    </Link>
                </li>
                <li className={styles.nav_top__item}>
                    <Link className={styles.nav_top__link} href={"#"}>
                        Вопрос-ответ
                    </Link>
                </li>
                <li className={styles.nav_top__item}>
                    <Link className={styles.nav_top__link} href={"#"}>
                        Контакти
                    </Link>
                </li>
                
            </ul>
        </nav>
        <div className="container">
            <div className={styles.header__middle}>
                <Logo />
                <Input/>
                <Phone/>
                <ButtonLink text="Обратний звязок" url="#" style="pink"/>
            </div>
        </div>
        <hr className={styles.line}/>
        <nav className={styles.header_bottom}>
            <ul className={styles.header_bottom__list}>
                <li className={styles.header_bottom__item}>
                    <Link className={styles.header_bottom__item} href={"#"}>
                        Парихмахерська
                    </Link>
                </li>
                <li className={styles.header_bottom__item}>
                    <Link className={styles.header_bottom__link} href={"#"}>
                        Барбершоп
                    </Link>
                </li>
                <li className={styles.header_bottom__item}>
                    <Link className={styles.header_bottom__link} href={"#"}>
                        Манікюр
                    </Link>
                </li>
                <li className={styles.header_bottom__item}>
                    <Link className={styles.header_bottom__link} href={"#"}>
                        Педікюр
                    </Link>
                </li>
                <li className={styles.header_bottom__item}>
                    <Link className={styles.header_bottom__link} href={"#"}>
                        Масаж
                    </Link>
                </li>
                <li className={styles.header_bottom__item}>
                    <Link className={styles.header_bottom__link} href={"#"}>
                        Мебель
                    </Link>
                </li>
            </ul>
        </nav> 
    </header>
  )};
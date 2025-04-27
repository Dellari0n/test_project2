import Input from "@/components/Input/Input";
import styles from "./DopInf.module.scss";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import Image from "next/image";


export default function DopInf() {
    return (
    <section className={styles.dop_inf}>
        <div className="container">
            <ul className={styles.dop_inf__list}>
                <li className={styles.dop_inf__item}>
                    <ul className={styles.item__list}>
                        <li className={styles.item__list_item}>
                            <h2 className={styles.dop_inf__title}>
                            Получайте бонусы 
                            </h2>
                            <p className={styles.dop_inf__desc}>
                            Каждый месяц разыгрываем
                            10 000 рублей для наших клиентов
                            </p>
                            <Input />
                        </li>
                        <Image
                        alt="конверт"
                        src={'/img/convert.png'}
                        width={140} 
                        height={106}
                        />
                    </ul>
                </li>
                <li className={styles.dop_inf__item}>
                    <ul className={styles.item__list}>
                        <li className={styles.item__list_item}>
                            <h2 className={styles.dop_inf__title}>
                            Заходите к нам
                            </h2>
                            <p className={styles.dop_inf__desc}>
                            Более 300 магазинов
                            по всей №%%;!№
                            </p>
                            <ButtonLink 
                            text={"Карта магазинов"} 
                            url={"#"} 
                            style={"pink"} />
                        </li>
                        <Image
                        alt="машина"
                        src={'/img/car.svg'}
                        width={188} 
                        height={100}
                        />
                    </ul>
                </li>
            </ul>
        </div>
    </section>
    )};
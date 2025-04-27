import Image from "next/image";
import styles from "./Card.module.scss";
import ButtonLink from "../ButtonLink/ButtonLink";

type CardProps = {
    img: string;
    name:string;
    desc: string;
    price: string;
}

export default function Card({img, name, desc, price}:CardProps) {
    return (
        <div className={styles.card}>
            <Image
                className={styles.card__img}
                alt={name}
                src={img}
                width={125} 
                height={170}
            />
            <p className={styles.card__name}>
                {name}
            </p>
            <p className={styles.card__desc}>
                {desc}
            </p>
            <h3 className={styles.card__price}>
                {price} ₽
            </h3>
            <ButtonLink text={"Купить"} url={"#"} style={"button_buy"} />
        </div>
    )}
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import styles from "./Info.module.scss";

export default function Info() {
    return (
        <div className={styles.info}>
            <div className="container">
                <div className={styles.info_content}>
                    <h1 className={styles.info_content__title}>
                        Супер кресло
                    </h1>
                    <p className={styles.info_content__text}>
                        Текст акции всегда отражает суть, а не просто
                        болтовню, поэтому внимательнее
                    </p>

                    <ButtonLink text="Подробнее" url="#" style="white"/>
                </div>
            </div>
        </div>
    )
}
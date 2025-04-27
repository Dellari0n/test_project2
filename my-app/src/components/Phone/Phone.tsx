import styles from "./Phone.module.scss";

export default function Phone() {
    return (
        <div className={styles.phone}>
            <p className={styles.phone__number}>
                8 (812) 123-45-67
            </p>
        </div>
    )}
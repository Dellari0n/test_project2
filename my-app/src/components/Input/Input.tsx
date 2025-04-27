import styles from "./Input.module.scss";

export default function Input() {
    return (
      <div className={styles.input}>
        <input
            type="text"
            placeholder=""
            className={styles.search_input}
        />
        {/* Можна сюди додати іконку */}
        <span className={styles.search_icon}>
            <img src="img/search.svg" alt="search" />
        </span>
      </div>
    )
}

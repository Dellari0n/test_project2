import styles from "./Logo.module.scss";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Link className={styles.logo_link} href={"#"}>
                <Image
                    className={styles.logo__img}
                    alt="logo"
                    src={'/img/logo.svg'}
                    width={258} 
                    height={80}
                />
            </Link>
        </div>
    )};
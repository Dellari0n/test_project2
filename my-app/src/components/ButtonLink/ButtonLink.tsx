import Link from "next/link";
import styles from "./ButtonLink.module.scss";

type ButtonProps = {
    text: string;
    url: string;
    style: string;
}

export default function ButtonLink({text, url, style}:ButtonProps) {
    return (
        <Link href={url} passHref>
            <button 
            className={
                style === "white" ? styles.button_white + " " + styles.button : 
                style === "pink" ? styles.button_pink + " " + styles.button : 
                style === "button_buy" ? styles.button_buy + " " + styles.button : ""
            }>
                {text}
            </button>
        </Link>
    )}
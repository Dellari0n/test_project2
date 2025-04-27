import Info from "@/components/section/Info/Info";
import styles from "./page.module.css";
import ShopList from "@/components/section/ShopList/ShopList";
import DopInf from "@/components/section/DopInf/DopInf";

export default function Home() {
  return (
    <div className={styles.scroll_off}>
      <Info/>
      <ShopList name={"Специальние предложения"} />
      <DopInf />
      <ShopList name={"Вы недавно смотрели"} />
    </div>
  );
}

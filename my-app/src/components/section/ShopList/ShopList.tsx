import Card from "@/components/Card/Card";
import styles from "./ShopList.module.scss";

type ShopListProps = {
    name: string;
}

const cards = [
    {
      img: "/img/card_test.jpg",
      name: "Парикмахерское кресло",
      desc: "'Норм' гидравлическое",
      price: "91 900",
    },
    {
      img: "/img/card_test.jpg",
      name: "Парикмахерское кресло",
      desc: "'Норм' гидравлическое",
      price: "91 900",
    },
    {
      img: "/img/card_test.jpg",
      name: "Парикмахерское кресло",
      desc: "'Норм' гидравлическое",
      price: "91 900",
    },
    {
      img: "/img/card_test.jpg",
      name: "Парикмахерское кресло",
      desc: "'Норм' гидравлическое",
      price: "91 900",
    },
  ];

export default function ShopList({name}:ShopListProps) {
    return (
        <div className="container">
            <section className={styles.shop_list}>
                <h1 className={styles.shop_list__title}>
                    {name}
                </h1>
                <ul className={styles.shop_list__list}>
                    {cards.map((card, index)=>(
                        <Card 
                        key={index}
                        img={card.img}
                        name={card.name}
                        desc={card.desc}
                        price={card.price}
                        />
                    ))}
                </ul>
            </section>
        </div>
    )}
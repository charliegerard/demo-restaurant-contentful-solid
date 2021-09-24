import DietIcon from "./DietIcon.jsx";
import gallery from "../../data/gallery.json";
import styles from "./MenuItem.module.css";

export default function MenuItem({ data }) {
  const displayCategory = (cat) => {
    if (cat.length > 1) {
      return <h1>{cat.join(" & ")}</h1>;
    }
    return <h1>{cat}</h1>;
  };

  const dietaryOptions = (diets) => {
    return Object.keys(diets)
      .filter((d) => diets[d])
      .map((t) => (
        <li>
          <DietIcon type={t} />
        </li>
      ));
  };

  return (
    <section key={data.title}>
      {displayCategory(data.category)}
      <div className={styles.menuItemHeader}>
        <h3 className={styles.menuItemTitle}>{data.title}</h3>
        <span className={styles.menuItemPrice}>
          {data.currency}
          {data.price}
        </span>
        <ul className={styles.menuItemDiet}>{dietaryOptions(data.dietary)}</ul>
      </div>
      <p>{data.description}</p>
      {gallery.map((img) => (
        <img
          className={styles.dishPhoto}
          key={img.caption}
          src={img.imageUrl}
          alt={img.caption}
        />
      ))}
    </section>
  );
}

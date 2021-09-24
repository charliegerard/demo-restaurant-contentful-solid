import styles from "./DietIcon.module.css";

export default function DietIcon({ type }) {
  const displayType = () => {
    let abbr;
    switch (type) {
      case "vegetarian":
        abbr = "V";
        break;
      case "vegan":
        abbr = "VE";
        break;
      case "pescatarian":
        abbr = "P";
        break;
      case "glutenFree":
        abbr = "GF";
        break;
    }
    return (
      <abbr title="Vegetarian" className={styles.dietIcon}>
        {abbr}
      </abbr>
    );
  };

  return <>{displayType()}</>;
}

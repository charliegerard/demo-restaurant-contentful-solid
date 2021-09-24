import menu from "../../data/menu.json";
import pages from "../../data/pages.json";
import styles from "./menu.module.css";
import MenuItem from "../components/MenuItem.jsx";

export default function Menu() {
  return (
    <main className={styles.menuPage}>
      <h1>Menu</h1>
      <h2 className={styles.sectionTitle}>{pages.menu.description}</h2>

      <div className="menu">
        {menu.map((p) => (
          <MenuItem data={p}></MenuItem>
        ))}
      </div>
    </main>
  );
}

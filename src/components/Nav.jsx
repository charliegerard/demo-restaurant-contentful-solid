import NavItem from "./NavItem.jsx";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.mainNavList}>
        <NavItem text="Menu" />
        <NavItem text="About" />
        <NavItem text="Gallery" />
      </ul>
    </nav>
  );
}

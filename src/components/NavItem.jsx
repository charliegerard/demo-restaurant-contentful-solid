import { Link } from "solid-app-router";
import styles from "./NavItem.module.css";

export default function NavItem({ text }) {
  return (
    <>
      <li className={styles.navItem}>
        <Link href={`/${text.toLowerCase()}`}>
          <a className={styles.navItemLink}>
            <img src={`/${text.toLowerCase()}-icon.svg`} alt={text} />
            <span>{text}</span>
          </a>
        </Link>
      </li>
    </>
  );
}

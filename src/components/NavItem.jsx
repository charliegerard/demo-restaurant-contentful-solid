import { Link } from "solid-app-router";
import styles from "./NavItem.module.css";
import menuIcon from "../assets/menu-icon.svg";
import aboutIcon from "../assets/about-icon.svg";
import galleryIcon from "../assets/gallery-icon.svg";

export default function NavItem({ text }) {
  const getIcon = (text) => {
    switch (text.toLowerCase()) {
      case "gallery":
        return galleryIcon;
      case "menu":
        return menuIcon;
      case "about":
        return aboutIcon;
    }
  };
  return (
    <>
      <li className={styles.navItem}>
        <Link href={`/${text.toLowerCase()}`}>
          <a className={styles.navItemLink}>
            <img src={getIcon(text)} alt={text} />
            <span>{text}</span>
          </a>
        </Link>
      </li>
    </>
  );
}

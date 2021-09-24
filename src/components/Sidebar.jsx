import Nav from "./Nav.jsx";
import navLogo from "../assets/logo.svg";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={navLogo} alt="" />
      <Nav />
      <footer className={styles.mainFooter}>
        <p className="built-with-text">Built with Next.js and Netlify</p>
      </footer>
    </aside>
  );
}

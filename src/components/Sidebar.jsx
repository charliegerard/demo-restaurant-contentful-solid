import Nav from "./Nav.jsx";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img src="./assets/logo.svg" alt="" />
      <Nav />
      <footer className="main-footer">
        <p className="built-with-text">Built with Next.js and Netlify</p>
      </footer>
    </aside>
  );
}

import Nav from "./Nav.jsx";
import { Link } from "solid-app-router";
import navLogo from "../assets/logo.svg";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link href="/">
        <img src={navLogo} alt="Restaurant Logo" />
      </Link>
      <Nav />

      <footer className="main-footer">
        <p className="main-footer-text">
          Repo:{" "}
          <a href="https://github.com/charliegerard/demo-restaurant-contentful-solid">
            GitHub
          </a>
        </p>
        <p className="main-footer-text">
          Built with <a href="https://www.solidjs.com/">Solid</a> and{" "}
          <a href="https://www.netlify.com">Netlify</a>
        </p>
      </footer>

      <style jsx global>{`
        .sidebar {
          font-size: 14px;
        }

        .sidebar img {
          width: 100%;
        }

        .main-footer {
          text-align: center;
        }
      `}</style>
    </aside>
  );
}

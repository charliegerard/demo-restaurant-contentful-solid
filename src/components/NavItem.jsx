import { Link } from "@solidjs/router";
import menuIcon from "../assets/menu-icon.svg";

export default function NavItem({ text }) {
  return (
    <li className="nav-item">
      <Link href={`/${text.toLowerCase()}`}>
        <a className="nav-item-link">
          <img src={menuIcon} alt={text} />
          <span>{text}</span>
        </a>
      </Link>
    </li>
  );
}

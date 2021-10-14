import NavItem from "./NavItem.jsx";
import RestaurantInfo from "../components/RestaurantInfo";

export default function Nav() {
  return (
    <nav>
      <RestaurantInfo />
      <ul className="main-nav-list">
        <NavItem text="Menu" />
      </ul>
    </nav>
  );
}

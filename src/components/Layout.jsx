import Nav from "./Nav";
import RestaurantInfo from "./RestaurantInfo";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <RestaurantInfo />
      {children}
    </div>
  );
}

export default Layout;

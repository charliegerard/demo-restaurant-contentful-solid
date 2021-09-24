import Sidebar from "./Sidebar.jsx";
import styles from "./Layout.module.css";
import RestaurantInfo from "./RestaurantInfo";
import "../../node_modules/contentfull-belly-styles/styles.css";

function Layout({ children }) {
  return (
    <main className={styles.homegrid}>
      <Sidebar />
      {/* <RestaurantInfo /> */}
      {children}
    </main>
  );
}

export default Layout;

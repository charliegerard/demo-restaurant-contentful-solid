import styles from "./App.module.css";
import { lazy } from "solid-js";
import { Routes, Route, Link } from "solid-app-router";
import Layout from "./components/Layout";

const Menu = lazy(() => import("./pages/menu.jsx"));
const Home = lazy(() => import("./pages/index.jsx"));

function App() {
  return (
    <div class={styles.App}>
      <Layout>
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

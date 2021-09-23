import styles from "./App.module.css";
import { lazy } from "solid-js";
import { Routes, Route, Link } from "solid-app-router";
import Layout from "./components/Layout";
import Testimonials from "./components/Testimonials";

const Menu = lazy(() => import("./pages/menu.jsx"));
const Home = lazy(() => import("./pages/index.jsx"));

function App() {
  return (
    <div class={styles.App}>
      <Layout>
        {/* <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link> */}
        <Testimonials />
      </Layout>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

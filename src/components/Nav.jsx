import { Link } from "solid-app-router";

export default function Nav() {
  return (
    <nav className="container">
      <section className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
      </section>
    </nav>
  );
}

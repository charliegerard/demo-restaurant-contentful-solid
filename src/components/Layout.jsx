import Sidebar from "./Sidebar.jsx";
import "../../node_modules/contentfull-belly-styles/styles.css";

function Layout({ children }) {
  return (
    <main className="home-grid">
      <Sidebar />
      {/* {children} */}
      <main className="content-container">{children}</main>

      <style jsx global>{`
        :root {
          --sansSerif: "Quicksand", "Segoe UI", Candara, "DejaVu Sans",
            "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref",
            sans-serif;
        }
        *,
        html,
        body {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: "Quicksand";
        }
        .content-container {
          height: 100vh;
          overflow-y: auto;
        }
      `}</style>
    </main>
  );
}

export default Layout;

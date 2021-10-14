import FeaturedItems from "../components/FeaturedItems";
import Testimonials from "../components/Testimonials";
import Layout from "../components/Layout";
import pages from "../../data/pages.json";

export default function Home() {
  return (
    <>
      <FeaturedItems
        title={pages.home.body}
        subtitle={pages.home.description}
      />
      <Testimonials />
    </>
  );
}

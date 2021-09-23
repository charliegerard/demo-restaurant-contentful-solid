import menu from "../../data/menu.json";
import gallery from "../../data/gallery.json";
import pages from "../../data/pages.json";

const dietsMapping = {
  vegan: "vegan",
  vegetarian: "vegetarian",
  glutenFree: "gluten free",
};

export default function Menu() {
  const displayCategory = (cat) => {
    if (cat.length > 1) {
      return <h1>{cat.join(" & ")}</h1>;
    }
    return <h1>{cat}</h1>;
  };

  const dietaryOptions = (diets) => {
    const dietOptions = Object.entries(diets).reduce((acc, item) => {
      if (item[1]) {
        acc.push(item[0]);
      }
      return acc;
    }, []);

    return dietOptions.map((d) => dietsMapping[d]).join(" ");
  };

  return (
    <div className="container">
      <section>{pages.menu.description}</section>
      <div className="menu">
        {menu.map((p) => {
          return (
            <section key={p.title}>
              {displayCategory(p.category)}

              <p>
                {p.currency}
                {p.price} {p.title}
              </p>
              <p>{p.description}</p>
              <p>{dietaryOptions(p.dietary)}</p>
              {gallery.map((img) => (
                <img key={img.caption} src={img.imageUrl} alt={img.caption} />
              ))}
            </section>
          );
        })}
      </div>
    </div>
  );
}

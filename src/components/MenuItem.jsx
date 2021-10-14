import DietIcon from "./DietIcon.jsx";

export default function MenuItem({ data }) {
  const dietaryOptions = (diets) => {
    return Object.keys(diets)
      .filter((d) => diets[d])
      .map((t, id) => <DietIcon type={t} key={id} />);
  };

  return (
    <section key={data.title} className="menu-item">
      <div className="menu-item-header">
        <h2 className="menu-item-title">{data.title}</h2>
        <span className="menu-item-price">
          {data.currency}
          {data.price}
        </span>
        <ul className="menu-item-diet">
          <li>{dietaryOptions(data.dietary)}</li>
        </ul>
      </div>
      <p className="menu-item-description">{data.description}</p>

      <img src={data.photo.imageUrl} alt={data.photo.caption} />

      <style jsx>{`
        img {
          width: 40%;
        }
      `}</style>
    </section>
  );
}

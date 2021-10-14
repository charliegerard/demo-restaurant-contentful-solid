import info from "../../data/info.json";

export default function RestaurantInfo() {
  return (
    <section className="restaurant-info">
      <h1>About:</h1>
      <section className="details">
        <p>{info.contact.streetAddress.join(" ")}</p>
        <p>{info.contact.phone}</p>
      </section>

      <h1>Hours: </h1>
      {info.hours.map((h) => (
        <ul key={`hour-${h}`}>
          <li>{h}</li>
        </ul>
      ))}

      <style jsx>{`
        ul {
          margin: 0px;
          padding: 2px 5px;
        }

        .restaurant-info {
          padding: 5px;
        }
      `}</style>
    </section>
  );
}

import info from "../../data/info.json";

export default function RestaurantInfo() {
  return (
    <section>
      <h1>{info.name}</h1>
      <section className="details">
        <p>Address: {info.contact.streetAddress.join(" ")}</p>
        <p>
          Hours:{" "}
          {info.hours.map((h) => (
            <ul>
              <li>{h}</li>
            </ul>
          ))}
        </p>
        <p>Contact: {info.contact.phone}</p>
      </section>
    </section>
  );
}

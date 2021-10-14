import { createSignal, createEffect } from "solid-js";

export default function DietIcon({ type }) {
  const [foodType, setFoodType] = createSignal("");

  createEffect(() => displayType());

  const displayType = () => {
    switch (type) {
      case "vegetarian":
        setFoodType("V");
        break;
      case "vegan":
        setFoodType("VE");
        break;
      case "pescatarian":
        setFoodType("P");
        break;
      case "glutenFree":
        setFoodType("GF");
        break;
    }
  };

  return (
    <abbr title="Vegetarian" className="diet-icon">
      {foodType}

      <style jsx>{`
        .diet-icon {
          display: inline-flex;
          margin-right: 5px;
        }
      `}</style>
    </abbr>
  );
}

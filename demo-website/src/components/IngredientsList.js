import React from "react";

export default function IngredientsList({ingredients}) {
  const listItems = ingredients.map((ingredient) =><li>{ingredient}</li>);
  return (
    <ul className="mb-8 text-blueGray-500 text-base w-full list-inside">
      {listItems}
    </ul>
  );
}

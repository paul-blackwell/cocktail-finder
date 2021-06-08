import React from "react";
import { v4 as uuid } from 'uuid';

export default function IngredientsList({ingredients}) {
  const listItems = ingredients.map((ingredient) =><li key={uuid()}>- {ingredient}</li>);
  return (
    <ul className="mb-8 text-blueGray-500 text-base w-full list-inside">
      {listItems}
    </ul>
  );
}

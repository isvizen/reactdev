import { useState } from "react";
import { foods, filterItems } from "./data.js";

export default function FilterableList() {
  const [query, setQuery] = useState("");

  const items = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar value={query} onChange={handleChange} />
      <hr />
      <List items={items} />
    </>
  );
}

function SearchBar({ value, onChange }) {
  return (
    <label>
      Search: <input value={value} onChange={onChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

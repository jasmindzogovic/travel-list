import { useState } from "react";
import { Logo } from "./components/Logo";
import { Stats } from "./components/Stats";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems / numItems) * 100) || 0;

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats
        numItems={numItems}
        packedItems={packedItems}
        packedPercentage={packedPercentage}
      />
    </div>
  );
}

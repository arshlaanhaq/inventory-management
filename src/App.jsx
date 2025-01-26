import React, { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import InventoryTable from "./components/InventoryTable";
import "./App.css";

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [filter, setFilter] = useState("");

  // Add Item
  const addItem = (item) => {
    setInventory([...inventory, { id: Date.now(), ...item }]);
  };

  // Edit Item
  const editItem = (id, updatedItem) => {
    setInventory(inventory.map((item) => (item.id === id ? updatedItem : item)));
  };

  // Delete Item
  const deleteItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  // Filter by Category
  const filteredInventory = filter
    ? inventory.filter((item) => item.category === filter)
    : inventory;

  return (
    <div className="App">
      <h1>Inventory Management</h1>
      <AddItemForm addItem={addItem} />
      <InventoryTable
        inventory={filteredInventory}
        editItem={editItem}
        deleteItem={deleteItem}
        setFilter={setFilter}
      />
    </div>
  );
};

export default App;

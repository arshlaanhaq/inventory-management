import React, { useState } from "react";
import ItemRow from "./ItemRow";

const InventoryTable = ({ inventory, editItem, deleteItem, setFilter }) => {
  const [sortOrder, setSortOrder] = useState("asc");

  const sortInventory = () => {
    inventory.sort((a, b) =>
      sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity
    );
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Fruit">Fruit</option>
        <option value="Grain">Grain</option>
        <option value="Vegetable">Vegetable</option>
      </select>
      <button onClick={sortInventory}>Sort by Quantity</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              editItem={editItem}
              deleteItem={deleteItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;

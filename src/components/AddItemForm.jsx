import React, { useState } from "react";

const AddItemForm = ({ addItem }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ ...formData, quantity: parseInt(formData.quantity) });
    setFormData({ name: "", category: "", quantity: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;

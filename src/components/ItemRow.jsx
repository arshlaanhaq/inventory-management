import React, { useState } from "react";

const ItemRow = ({ item, editItem, deleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const saveEdit = () => {
    editItem(item.id, { ...editData, quantity: parseInt(editData.quantity) });
    setIsEditing(false);
  };

  return (
    <tr style={{ backgroundColor: item.quantity < 10 ? "#ffcdd2" : "white" }}>
      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              name="name"
              value={editData.name}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="category"
              value={editData.category}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              name="quantity"
              value={editData.quantity}
              onChange={handleChange}
            />
          </td>
          <td>
            <button onClick={saveEdit}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </td>
        </>
      ) : (
        <>
          <td>{item.name}</td>
          <td>{item.category}</td>
          <td>{item.quantity}</td>
          <td>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default ItemRow;

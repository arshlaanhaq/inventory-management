# Dynamic Inventory Management Table

A simple React.js app to manage inventory items. This app provides functionality to:

- Add new items to the inventory.
- Edit and delete existing items.
- Filter the inventory table by item category.
- Sort items by quantity.
- Highlight low-stock items (e.g., quantity below 10).

## Features

1. **Add New Items**: Users can input item details (name, category, quantity) and add them to the inventory.
2. **Edit & Delete Items**: Users can modify or remove items from the inventory.
3. **Filter by Category**: A dropdown allows filtering items based on their category.
4. **Sort by Quantity**: A button enables sorting items in ascending or descending order of quantity.
5. **Low-Stock Highlighting**: Items with a quantity below 10 are visually highlighted.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arshlaanhaq/inventory-management.git
   ```

2. Navigate to the project directory:
   ```bash
   cd inventory-management
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The app will run at [http://localhost:3000](http://localhost:3000).

## Components

### 1. `App.js`
- Manages the main application state, including inventory items and category filters.
- Passes props to child components for adding, editing, deleting, and filtering items.

### 2. `AddItemForm.js`
- A form component that collects new item details from the user and adds them to the inventory.

### 3. `InventoryTable.js`
- Displays the inventory table.
- Includes a dropdown for filtering items by category.
- Includes a button for sorting items by quantity.
- Maps through the inventory array and renders `ItemRow` components.

### 4. `ItemRow.js`
- Represents a single row in the inventory table.
- Supports editing and deleting individual items.
- Highlights rows for low-stock items (quantity < 10).

## Styling

Basic styling is provided in `App.css` to make the app visually appealing:
- Responsive table layout.
- Low-stock items are highlighted with a light red background.
- Hover effects for better interactivity.

## Usage

1. **Add Items**: Fill in the item name, category, and quantity, then click "Add Item."
2. **Edit Items**: Click the "Edit" button on a row, make changes, and click "Save."
3. **Delete Items**: Click the "Delete" button to remove an item.
4. **Filter by Category**: Select a category from the dropdown to view items in that category.
5. **Sort by Quantity**: Click the "Sort by Quantity" button to toggle between ascending and descending order.


---

Enjoy managing your inventory dynamically with this simple React app! 🚀

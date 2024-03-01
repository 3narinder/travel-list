import { createContext, useContext, useState } from "react";

const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const [sortBy, setSortBy] = useState("input");

  //Sorting

  let sortItems;

  if (sortBy === "input") sortItems = items;

  if (sortBy === "packed")
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  if (sortBy === "description")
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  const packed = items?.filter((item) => item?.packed === true);

  //Handle function

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item?.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items?.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirm = window.confirm(
      "are you sure you want to delete all items?"
    );

    confirm && setItems([]);
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        sortItems,
        sortBy,
        setSortBy,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleClearList,
        packed,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

const useItems = () => {
  const context = useContext(ItemContext);

  if (context === undefined)
    throw new Error("ItemContext is used outside of the provider");
  return context;
};

export { ItemProvider, useItems };

import React, { useState } from "react";
import { useItems } from "./ItemContext";

const Form = () => {
  const { handleAddItem: onAddItem, handleClearList } = useItems();

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: new Date(),
    };

    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <div className="flex flex-col mx-auto items-center justify-between gap-2 mb-16">
      <div className="flex items-center justify-between w-full mb-4">
        <div className="text-2xl text-gray-700 capitalize font-semibold">
          Add items in your travel list
        </div>

        <button
          onClick={handleClearList}
          className="text-xl tracking-wide capitalize bg-red-300 hover:bg-red-200 active:bg-red-300 text-gray-700/80 font-semibold px-4 py-2 rounded-lg"
        >
          Clear list
        </button>
      </div>

      <form className="flex items-center w-full gap-6" onSubmit={handleSubmit}>
        <select
          className="p-3 border-2 border-gray-200 text-gray-900 text-xl font-semibold rounded-lg"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
          placeholder="Enter item.."
          required
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;

import { MdDeleteOutline } from "react-icons/md";
import { useItems } from "./ItemContext";

const Item = ({ item }) => {
  const { handleToggleItem: onTogglePack, handleDeleteItem: onDelete } =
    useItems();

  return (
    <tr className="bg-white border-b text-base">
      <td className="px-6 py-4">
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onTogglePack(item.id)}
        />
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap uppercase"
      >
        {item?.description}
      </th>

      <td className="px-6 py-4 text-center">{item?.quantity}</td>
      <td className="px-6 py-4 flex items-center justify-center">
        <MdDeleteOutline
          onClick={() => onDelete(item?.id)}
          classNameName="text-2xl cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default Item;

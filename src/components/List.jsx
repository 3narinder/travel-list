import Item from "./Item";
import { useItems } from "./ItemContext";

const List = () => {
  const { sortItems } = useItems();

  return (
    <>
      {sortItems?.length > 0 ? (
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  Packed
                </th>
                <th scope="col" className="px-6 py-3">
                  Item
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {sortItems?.map((item) => (
                <Item key={item?.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-2xl text-gray-700/80 font-semibold tracking-widest">
          There are no items to display on the list for now.
        </div>
      )}
    </>
  );
};

export default List;

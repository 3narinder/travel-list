import React from "react";
import { useItems } from "./ItemContext";

const Stats = () => {
  const { items, packed } = useItems();

  const calPercent = ((packed?.length / items?.length) * 100).toFixed(1);

  return (
    <div className="fixed bottom-0 right-1/2 transform translate-x-1/2 py-12">
      {items?.length === 0
        ? "start adding items in your list"
        : `You have ${
            items?.length ? items?.length : "no"
          } items in your list and you have packed ${packed?.length} items (${
            items?.length ? `${calPercent}` : "0%"
          })`}
    </div>
  );
};

export default Stats;

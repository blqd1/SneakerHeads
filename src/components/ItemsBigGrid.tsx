import React from "react";
import ItemBigCard, { ItemBigProps } from "./ItemBigCard";
interface ItemsProps {
    items: ItemBigProps[];
}

const ItemsBigGrid: React.FC<ItemsProps> = ({ items }) => {
    return (
        <div
            className={`grid grid-cols-4 gap-x-5 mx-auto pt-5 transition-all duration-500 ease-in-out gap-y-14`}
        >
            {items.map((item) => (
                <ItemBigCard {...item} key={item.id} />
            ))}
        </div>
    );
};

export default ItemsBigGrid;

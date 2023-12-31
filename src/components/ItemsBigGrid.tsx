import React from "react";
import ItemBigCard, { ItemBigProps } from "./ItemBigCard";

interface ItemsProps {
    items: ItemBigProps[];
}

const ItemsBigGrid: React.FC<ItemsProps> = ({ items }) => {
    return (
        <div className=" grid grid-cols-3  gap-x-3 mx-auto pt-5">
            {items.map((item) => (
                <ItemBigCard {...item} key={item.id} />
            ))}
        </div>
    );
};

export default ItemsBigGrid;

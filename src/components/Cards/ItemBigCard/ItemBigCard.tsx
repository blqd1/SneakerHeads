import React from "react";

export interface ItemBigProps {
    id: number;
    imagesUrl: string[];
    name: string;
    brand: string;
    sex: string;
    price: string;
    colors: string[];
    sizes: number[];
}

const ItemBigCard: React.FC<ItemBigProps> = ({
    imagesUrl,
    name,
    price,
    id,
    colors,
    brand,
}) => {
    const [mainImage, setMainImage] = React.useState<string>(imagesUrl[0]);
    const [isHovered, setIsHovered] = React.useState<boolean>(false);

    const onClickItem = () => {
        console.log(id);
    };
    return (
        <div
            className="flex flex-col w-auto items-start justify-start h-auto box-border max-w-96"
            onClick={onClickItem}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={mainImage}
                alt={name}
                className={`cursor-pointer ${
                    brand === "nike" ? "transform scale-x-[-1]" : ""
                }`}
            />
            {isHovered && imagesUrl.length > 1 ? (
                <div className="flex flex-row gap-3 py-3">
                    {imagesUrl.map((item, index) => (
                        <img
                            src={item}
                            key={index}
                            className={`w-10 ${
                                brand === "nike" ? "transform scale-x-[-1]" : ""
                            }`}
                            onMouseEnter={() => setMainImage(item)}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col">
                    <span className="text-xl pt-4">{name}</span>
                    <div className="flex gap-x-5">
                        <span className="text-xl pt-2 text-gray-500 ">
                            {colors.length > 1
                                ? `${colors.length} colors`
                                : "1 color"}
                        </span>
                        <span className="text-xl pt-2 text-gray-500 uppercase ">
                            {brand}
                        </span>
                    </div>
                </div>
            )}
            <span className="pt-2">${price}</span>
        </div>
    );
};

export default ItemBigCard;

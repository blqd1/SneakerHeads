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
}) => {
    const [mainImage, setMainImage] = React.useState<string>(imagesUrl[0]);
    const [isHovered, setIsHovered] = React.useState<boolean>(false);

    const onClickItem = () => {
        console.log(id);
    };
    return (
        <div
            className="flex flex-col w-auto  items-start justify-start h-auto cursor-pointer box-border"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClickItem}
        >
            <img src={mainImage} alt={name} className="w-auto max-h-full" />
            {isHovered && imagesUrl.length > 1 ? (
                <div className="flex flex-row gap-3 py-3">
                    {imagesUrl.map((item, index) => (
                        <img
                            src={item}
                            key={index}
                            className="w-10"
                            onMouseEnter={() => setMainImage(item)}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col">
                    <span className="text-xl pt-4">{name}</span>
                    <span className="text-xl pt-2 text-gray-500">
                        {colors.length > 1
                            ? `${colors.length} colors`
                            : "1 color"}
                    </span>
                </div>
            )}
            <span className="pt-2">${price}</span>
        </div>
    );
};

export default ItemBigCard;

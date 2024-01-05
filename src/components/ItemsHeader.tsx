import React from "react";
import Search from "./UI/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

interface HeaderProps {
    onSearch: (value: string) => void;
    showFilter: boolean;
    onShowFilter: (value: boolean) => void;
    onSort: (value: string) => void;
}

const ItemsHeader: React.FC<HeaderProps> = ({
    onSearch,
    showFilter,
    onShowFilter,
    onSort,
}) => {
    return (
        <div className="w-full h-20 flex flex-row justify-between items-center">
            <div className="flex items-center gap-10">
                <span className="text-2xl">Men`s Shoes & Sneakers</span>
                <Search onDebounce={onSearch} />
            </div>
            <div className="flex items-center gap-10">
                <div
                    onClick={() => onShowFilter(!showFilter)}
                    className="cursor-pointer flex items-center gap-3 text-1xl border bg-white px-5 py-2"
                >
                    <span>{`${!showFilter ? "Show" : "Hide"} Filters`}</span>
                    <div>
                        <FontAwesomeIcon icon={faSliders} />
                    </div>
                </div>
                <Dropdown onChoose={onSort} />
            </div>
        </div>
    );
};

export default ItemsHeader;

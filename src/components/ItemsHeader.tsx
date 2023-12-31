import React from "react";
import Search from "../components/UI/Search";
import Dropdown from "../components/UI/Dropdown";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDebounce } from "../hooks/hooks";

const dropdownItems = ["Newest", "Price:Low-High", "Price:High-Low"];

interface ItemsHeaderProps {
    showFilter: boolean;
    onSearch: (search: string) => void;
    setShowFilter: (show: boolean) => void;
}

const ItemsHeader: React.FC<ItemsHeaderProps> = ({
    showFilter,
    onSearch,
    setShowFilter,
}) => {
    const [search, setSearch] = React.useState<string>("");
    const debouncedSearch = useDebounce(search);
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = e.target.value;
        setSearch(newSearch);
    };

    React.useEffect(() => {
        onSearch(debouncedSearch);
    }, [debouncedSearch, onSearch]);

    const cleanSearch = () => {
        setSearch("");
    };

    return (
        <div className="w-full h-20 flex flex-row justify-between items-center">
            <div className="flex items-center gap-10">
                <span className="text-2xl">Men`s Sneakers & Shoes</span>
                <Search
                    value={search}
                    onChangeValue={onChangeSearch}
                    onClickClean={cleanSearch}
                />
            </div>
            <div className="flex gap-5">
                <div
                    onClick={() => setShowFilter(!showFilter)}
                    className="cursor-pointer flex items-center gap-3 text-1xl border bg-white px-3 py-2"
                >
                    <span>{`${!showFilter ? "Show" : "Hide"} Filters`}</span>
                    <div>
                        <FontAwesomeIcon icon={faSliders} />
                    </div>
                </div>
                <Dropdown items={dropdownItems} />
            </div>
        </div>
    );
};

export default ItemsHeader;

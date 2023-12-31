import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface SearchProps {
    value: string;
    onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickClean: () => void;
}
const Search: React.FC<SearchProps> = ({
    value,
    onChangeValue,
    onClickClean,
}) => {
    return (
        <div className="relative flex items-center w-52 ">
            <input
                type="text"
                className="pl-10  py-2 border text-1xl"
                placeholder="Search"
                value={value}
                onChange={(e) => onChangeValue(e)}
            />
            <div
                className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
            >
                <FontAwesomeIcon icon={faSearch} className="text-black" />
            </div>
            {value ? (
                <div
                    className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer"
                    onClick={onClickClean}
                >
                    <FontAwesomeIcon icon={faTimes} className="text-black" />
                </div>
            ) : null}
        </div>
    );
};

export default Search;

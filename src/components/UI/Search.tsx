import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useDebounce } from "../../hooks/hooks";

interface SearchProps {
    onDebounce: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onDebounce }) => {
    const [value, setValue] = React.useState<string>("");
    const debouncedValue = useDebounce(value, 500);

    React.useEffect(() => {
        console.log("debounce");
        onDebounce(debouncedValue);
    }, [debouncedValue, onDebounce]);

    return (
        <div className="relative flex items-center w-52 ">
            <input
                type="text"
                className="pl-10  py-2 border text-1xl"
                placeholder="Search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div
                className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
            >
                <FontAwesomeIcon icon={faSearch} className="text-black" />
            </div>

            <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                <FontAwesomeIcon
                    icon={faTimes}
                    className="text-black"
                    onClick={() => setValue("")}
                />
            </div>
        </div>
    );
};

export default Search;

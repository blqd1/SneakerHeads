import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const options = ["Price: High-Low", "Price: Low-High"];

interface DropdownProps {
    onChoose: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onChoose }) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selectedItem, setSelectedItem] = React.useState<string>("Sort By");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (value: string) => {
        const apiString = value === options[0] ? "-price" : "price";
        onChoose(apiString);
        setSelectedItem(value);
        toggleDropdown();
    };

    return (
        <div
            className="relative inline-block cursor-pointer z-10 "
            onClick={toggleDropdown}
        >
            <div className="flex  w-52 bg-white border hover:bg-gray-300 transition-all duration-300">
                <div className="selected-item p-2  border-b-0 text-1xl">
                    {selectedItem}
                </div>
                <motion.div
                    className="absolute inset-y-0 pr-4 right-0 flex items-center"
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <FontAwesomeIcon icon={faChevronDown} />
                </motion.div>
            </div>
            <motion.div
                className={`absolute  w-full -z-1 ${
                    isOpen ? "" : "pointer-events-none"
                }`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ y: isOpen ? 0 : -50, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                layout
            >
                {options.map((value, index) => (
                    <div
                        key={value}
                        className={`p-2 cursor-pointer hover:bg-gray-300 transition-all duration-300 bg-white  border border-y-0 ${
                            index === options.length - 1
                                ? "rounded-b-2xl border-b"
                                : ""
                        }`}
                        onClick={() => handleClick(value)}
                    >
                        {value}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Dropdown;

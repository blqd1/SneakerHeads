import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface DropdownProps {
    items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selectedItem, setSelectedItem] = React.useState<string>("Sort By");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectItem = (item: string) => {
        setSelectedItem("Sort By: " + item);
        toggleDropdown();
    };

    return (
        <div
            className="relative inline-block cursor-pointer z-10"
            onClick={toggleDropdown}
        >
            <div className="flex  w-52 bg-white border ">
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
                className={`absolute w-full -z-1 ${
                    isOpen ? "" : "pointer-events-none"
                }`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {items.map((item, index) => (
                    <div
                        key={item}
                        className={`p-2 cursor-pointer bg-white border border-y-0 ${
                            index === items.length - 1
                                ? "rounded-b-2xl border-b"
                                : ""
                        }`}
                        onClick={() => selectItem(item)}
                    >
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Dropdown;

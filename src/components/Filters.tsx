import React from "react";
import CheckboxForm from "./UI/CheckboxForm";
import { motion } from "framer-motion";

interface FiltersProps {
    showFilter: boolean;
}

const Filters: React.FC<FiltersProps> = ({ showFilter }) => {
    return (
        <motion.aside
            className="w-96 h-screen border bg-white overflow-hidden"
            initial={{ width: "24rem", marginRight: "1.25rem" }}
            animate={{
                width: showFilter ? "24rem" : "0",
                marginRight: showFilter ? "1.25rem" : "0",
            }}
        >
            <div className="flex flex-col">
                <CheckboxForm
                    label="brend"
                    options={["nike", "adidas", "reebok"]}
                    onChange={(values) => console.log(values)}
                />
                <CheckboxForm
                    label="colors"
                    options={["black", "white", "green", "red"]}
                    onChange={(values) => console.log(values)}
                />
            </div>
        </motion.aside>
    );
};

export default Filters;

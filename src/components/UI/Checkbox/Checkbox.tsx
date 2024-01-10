import React, { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface CheckboxProps {
    label: string;
    onChange: (value: string) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, onChange }, ref) => {
        const [isChecked, setIsChecked] = React.useState<boolean>(false);

        const handleCheck = () => {
            setIsChecked(!isChecked);
            onChange(label);
        };

        return (
            <div
                className="inline-flex relative gap-1 items-center hover:text-gray-300 cursor-pointer transition-all duration-300"
                onClick={handleCheck}
            >
                <input
                    type="checkbox"
                    className="appearance-none  border border-black w-5 h-5 checked:text-black checked:bg-black cursor-pointer "
                    checked={isChecked}
                    readOnly
                    ref={ref} // Forward the ref to the input element
                />
                <label className="text-lg uppercase pt-1 cursor-pointer">
                    {label}
                </label>
                {isChecked && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute  pointer-events-none pl-[3px]"
                    >
                        <FontAwesomeIcon
                            icon={faCheck}
                            className=" text-white "
                        />
                    </motion.div>
                )}
            </div>
        );
    }
);

export default Checkbox;

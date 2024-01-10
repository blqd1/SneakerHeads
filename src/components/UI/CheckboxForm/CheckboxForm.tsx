import React from "react";
import { useForm } from "react-hook-form";
import Checkbox from "../Checkbox/Checkbox";

interface FormProps {
    label: string;
    options: string[];
    onChange: (options: string[]) => void;
}
const CheckboxForm: React.FC<FormProps> = ({ label, options, onChange }) => {
    const { register, getValues, setValue } = useForm();

    const handleCheckboxChange = (checkboxLabel: string) => {
        setValue(checkboxLabel, !getValues()[checkboxLabel]);
        const updatedValues = options.filter((option) => getValues()[option]);
        onChange(updatedValues);
    };

    return (
        <div className="flex flex-col border-b-2 px-3 py-4 justify-between">
            <span className="uppercase text-xl">{label}</span>
            <div className="flex flex-col gap-1 px-3">
                {options.map((value) => (
                    <Checkbox
                        key={value}
                        label={value}
                        {...register(value)}
                        onChange={handleCheckboxChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default CheckboxForm;

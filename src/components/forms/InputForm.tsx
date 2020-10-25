import clsx from "clsx";
import React from "react";

interface InputFormProps {
    label: string;
    name: string;
    placeholder?: string;
    type: "text" | "password" | "number";
    autofocus?: boolean;
    isError: boolean;
    errorMessage?: string;
    disabled?: boolean;
    value?: any;
    onChange?: any;
}

const InputForm: React.FC<InputFormProps> = (props) => {
    return (
        <div className="form-input-wrapper">
            <label
                className="block text-sm font-bold mb-2"
            >
                {props.label}
            </label>
            <input
                data-testid={`datatest-${props.name}`}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                autoFocus={props.autofocus}
                className={clsx({"focus:shadow-outline": !props.isError, "focus-danger": props.isError, "input-form focus:outline-none": true})}
                type={props.type}
                placeholder={props.placeholder}
                disabled={props.disabled}
            />
            {props.isError && (
                <div className="bg-gray-400 p-2 rounded-b">
                    <span className="text-sm">{props.errorMessage}</span>
                </div>
            )}
        </div>
    );
};

export default InputForm;

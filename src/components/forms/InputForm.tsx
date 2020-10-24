import React from "react";

interface InputFormProps {
    label: string
    name: string
    placeholder?: string
    type: 'text' | 'password' | 'number'
    autofocus?: boolean
}

const InputForm: React.FC<InputFormProps> = (props) => {
    return (
        <div className="form-input-wrapper">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={props.name}
            >
                {props.label}
            </label>
            <input
                autoFocus={props.autofocus}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={props.name}
                type={props.type}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default InputForm;

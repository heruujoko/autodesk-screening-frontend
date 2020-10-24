import React from "react";

interface MainButtonProps {
    label: string;
    type?: "button" | "submit" | "reset";
    onClick?: any;
}

const MainButton: React.FC<MainButtonProps> = (props) => {
    return (
        <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-8p rounded focus:outline-none focus:shadow-outline w-full main-button-margin"
            type={props.type || "button"}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
};

export default MainButton;

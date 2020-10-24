import React from "react";
import clsx from "clsx";
import LoadingSpinner from "./LoadingSpinner";

interface MainButtonProps {
    label: string;
    type?: "button" | "submit" | "reset";
    onClick?: any;
    disabled?: boolean;
    loading?: boolean;
}

const MainButton: React.FC<MainButtonProps> = (props) => {
    return (
        <button
            disabled={props.disabled}
            className={clsx({
                "main-button focus:outline-none focus:shadow-outline": true,
                "bg-blue-600 hover:bg-blue-700": !props.disabled,
                "bg-gray-400": props.disabled,
            })}
            type={props.type || "button"}
            onClick={props.onClick}
        >
            <div className="flex flex-row justify-center items-center">
                {props.loading && <LoadingSpinner />}
                <span className={clsx({"ml-2": props.loading })}>{props.label}</span>
            </div>
        </button>
    );
};

export default MainButton;

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
            className="bg-blue-400 main-button focus:outline-none focus:shadow-outline hover:bg-blue-700"
            type={props.type || "button"}
            onClick={props.onClick}
        >
            <div className="flex flex-row items-center justify-center">
                {props.loading && <LoadingSpinner />}
                <span className={clsx({"ml-2": props.loading })}>{props.label}</span>
            </div>
        </button>
    );
};

export default MainButton;

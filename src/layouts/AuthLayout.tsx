import React from "react";

const AuthLayout: React.FC = (props) => {
    return (
        <div>
            <div className="flex justify-center auth-layout">
                {props.children}
                <div className="footer">
                    <p className="text-sm">
                        <span className="text-gray-600">Your account for everything Autodesk</span>{" "}
                        <button className="link">learn more</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;

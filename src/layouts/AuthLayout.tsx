import React from "react";

const AuthLayout: React.FC = (props) => {
    return (
        <div>
            <div className="flex justify-center auth-layout">
                {props.children}
                <div className="footer">
                    <p className="">
                        <span className="text-muted">Your account for everything Autodesk</span>
                    </p>
                    <p className=""><a href="https://www.autodesk.com/" className="link">Learn more</a></p>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;

import React, { useState } from "react";
import SiginStepOne from './SigninStepOne';
import SiginStepTwo from './SigninStepTwo';

const Signin: React.FC = () => {
    const [pageState, setPageState] = useState<"username" | "password">(
        "username"
    );
    const [currentUsername, setUsername] = useState<string>("");

    const onSuccessStepOne = (username: string) => {
        setPageState("password");
        setUsername(username);
    }

    const onBack = () => {
        setPageState("username");
        setUsername("");
    }

    const onSuccessStepTwo = () => {
        // TODO
    }

    return (
        <div className="w-full max-w-xs">
            {pageState === "username" && (
                <SiginStepOne onSuccess={onSuccessStepOne}/>
            )}
            {pageState === "password" && (
                <SiginStepTwo onSuccess={onSuccessStepTwo} username={currentUsername} onBack={onBack}/>
            )}
        </div>
    );
};

export default Signin;

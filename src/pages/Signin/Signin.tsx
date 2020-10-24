import React, { useState } from "react";
import SiginStepOne from './SigninStepOne';

const Signin: React.FC = () => {
    const [pageState, setPageState] = useState<"username" | "password">(
        "username"
    );

    const onSuccessStepOne = () => {

    }

    return (
        <div className="w-full max-w-xs">
            <h1 className="banner-text text-2xl">Signin</h1>
            {pageState === "username" && (
                <SiginStepOne onSuccess={onSuccessStepOne}/>
            )}
        </div>
    );
};

export default Signin;

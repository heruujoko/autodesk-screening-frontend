import React, { useState } from "react";
import InputForm from "../components/forms/InputForm";
import MainButton from "../components/MainButton";

const Signin: React.FC = () => {
    const [pageState, setPageState] = useState<"username" | "password">(
        "username"
    );

    return (
        <div className="w-full max-w-xs">
            <h1 className="banner-text text-2xl">Signin</h1>
            {pageState === "username" && (
                <form className="bg-white rounded">
                    <InputForm autofocus label="Username" name="username" type="text" />
                    <MainButton label="Next" />

                    <p>
                        <span className="text-gray-600">New to Autodesk?</span> <button className="link underline">Create account</button>
                    </p>
                </form>
            )}
        </div>
    );
};

export default Signin;

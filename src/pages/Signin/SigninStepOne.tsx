import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputForm from "../../components/forms/InputForm";
import MainButton from "../../components/MainButton";

interface SigninInputsStepOne {
    username: string;
}

interface SigninStepOneProps {
    onSuccess: (username: string) => void;
}

const SigninStepOne: React.FC<SigninStepOneProps> = (props) => {
    const { handleSubmit, control, errors } = useForm<SigninInputsStepOne>();
    const [sending, setSending] = useState<boolean>(false);

    const onSubmit = (data: SigninInputsStepOne) => {
        setSending(true);
        setTimeout(() => {
            setSending(false);
            props.onSuccess(data.username);
        }, 800);
    };

    return (
        <>
            <div className="banner-text">
                <p>Signin</p>
            </div>
            <form
                className="bg-white rounded"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    as={InputForm}
                    name="username"
                    label="Username"
                    control={control}
                    type="text"
                    rules={{ required: "please input a valid username" }}
                    isError={Boolean(
                        errors.username && errors.username.message
                    )}
                    disabled={sending}
                    errorMessage={String(errors.username?.message)}
                />
                <MainButton
                    label="Next"
                    type="submit"
                    disabled={sending}
                    loading={sending}
                />
                <p>
                    <span className="text-gray-600">New to Autodesk?</span>{" "}
                    <button className="link underline">Create account</button>
                </p>
            </form>
        </>
    );
};

export default SigninStepOne;

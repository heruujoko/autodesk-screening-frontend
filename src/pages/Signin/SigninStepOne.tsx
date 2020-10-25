import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputForm from "../../components/forms/InputForm";
import MainButton from "../../components/MainButton";
import SignupLink from "./SignupLink";

interface SigninInputsStepOne {
    username: string;
}

interface SigninStepOneProps {
    onSuccess: (username: string) => void;
}

const SigninStepOne: React.FC<SigninStepOneProps> = (props) => {
    const { handleSubmit, control, errors } = useForm<SigninInputsStepOne>({
        defaultValues: {
            username: "",
        },
    });
    const [sending, setSending] = useState<boolean>(false);
    const [btnText, setBtnText] = useState<string>("Next");
    const [networkError, setNetworkError] = useState<any>([
        {
            field: "username1",
            message: "The username is not recognized",
        },
    ]);

    const hasNetworkError = (field: string) => {
        return networkError.find((e: any) => e.field === field);
    };

    const onSubmit = (data: SigninInputsStepOne) => {
        setSending(true);
        setBtnText("Verifiying");
        setTimeout(() => {
            setSending(false);
            // props.onSuccess(data.username);
            setNetworkError([
                {
                    field: "username",
                    message: "The username is not recognized",
                },
            ]);
        }, 800);
    };

    return (
        <>
            <div className="banner-text">
                <p>Signin</p>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    as={InputForm}
                    name="username"
                    label="Username"
                    control={control}
                    type="text"
                    rules={{ required: "please input a valid username" }}
                    isError={
                        Boolean(errors.username && errors.username.message) ||
                        hasNetworkError("username")
                    }
                    disabled={sending}
                    errorMessage={
                        hasNetworkError("username")?.message ||
                        String(errors.username?.message)
                    }
                    placeholder="Username"
                />
                <MainButton
                    label={btnText}
                    type="submit"
                    disabled={sending}
                    loading={sending}
                />
            </form>
            <SignupLink />
        </>
    );
};

export default SigninStepOne;

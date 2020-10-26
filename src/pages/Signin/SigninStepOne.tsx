import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputForm from "../../components/forms/InputForm";
import MainButton from "../../components/MainButton";
import SignupLink from "./SignupLink";
import identityService from "../../services/identity.service";

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
    const [networkError, setNetworkError] = useState<any>([]);

    const hasNetworkError = (field: string) => {
        return networkError.find((e: any) => e.field_name === field);
    };

    const onSubmit = async (data: SigninInputsStepOne) => {
        setSending(true);
        setBtnText("Verifiying");
        try {
            await identityService.findUsername(data.username);
            props.onSuccess(data.username);
        } catch (err) {
            setNetworkError(err.response?.data?.error?.data);
        } finally {
            setSending(false);
        }
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
                    autofocus
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

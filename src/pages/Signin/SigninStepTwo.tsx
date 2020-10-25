import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputForm from "../../components/forms/InputForm";
import MainButton from "../../components/MainButton";
import SignupLink from "./SignupLink";
import identityService from "../../services/identity.service";
import notificationService from "../../services/notification.service";

interface SigninInputsStepTwo {
    password: string;
}

interface SigninStepTwoProps {
    onSuccess: () => void;
    username: string;
    onBack: () => void;
}

const SigninStepTwo: React.FC<SigninStepTwoProps> = (props) => {
    const { handleSubmit, control, errors } = useForm<SigninInputsStepTwo>({
        defaultValues: {
            password: ""
        }
    });
    const [sending, setSending] = useState<boolean>(false);

    const onSubmit = async (data: SigninInputsStepTwo) => {
        setSending(true);
        try {
            await identityService.authenticate(props.username, data.password);
            notificationService.successNotification('Authentication success');
        } catch (err) {
            // TODO
            console.log(err);
        } finally {
            setSending(false);
        }
    };

    return (
        <>
            <div className="flex flex-row items-center justify-center banner-text">
                <i onClick={props.onBack} className="fa fa-chevron-left text-blue-400 link-ico"></i>
                <div className="w-full text-center">
                    <p className="text-2xl">Welcome</p>
                    <span className="text-sm text-muted">{props.username}</span>
                </div>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    as={InputForm}
                    name="password"
                    label="Password"
                    control={control}
                    type="password"
                    rules={{ required: "please input a password" }}
                    isError={Boolean(
                        errors.password && errors.password.message
                    )}
                    disabled={sending}
                    errorMessage={String(errors.password?.message)}
                />
                <MainButton
                    label="Sign in"
                    type="submit"
                    disabled={sending}
                    loading={sending}
                />
            </form>
            <SignupLink />
        </>
    );
};

export default SigninStepTwo;

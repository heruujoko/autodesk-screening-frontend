import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputForm from "../components/forms/InputForm";
import MainButton from "../components/MainButton";
import identityService from "../services/identity.service";
import { IdentityRequest } from "../interfaces/IdentityRequest";
import notificationService from "../services/notification.service";
import { useHistory } from "react-router-dom";

const Signup: React.FC = () => {
    const { handleSubmit, control, errors, watch } = useForm<IdentityRequest>({
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            confirmUsername: "",
            password: "",
            confirmPassword: "",
        },
    });
    const [sending, setSending] = useState<boolean>(false);
    const history = useHistory();

    const onSubmit = async (data: IdentityRequest) => {
        setSending(true);
        try {
            await identityService.signup(data);
            notificationService.successNotification('Account created successfully');
            history.push('/');
        } catch (err) {
            notificationService.errorNotification('Signup failed');
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="w-full max-w-xs">
            <div className="banner-text">
                <p>Create account</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row">
                    <div className="mr-2">
                        <Controller
                            as={InputForm}
                            name="firstName"
                            label="First Name"
                            control={control}
                            type="text"
                            rules={{ required: "please input first name" }}
                            isError={Boolean(
                                errors.firstName && errors.firstName.message
                            )}
                            disabled={sending}
                            errorMessage={String(errors.firstName?.message)}
                        />
                    </div>

                    <div className="ml-2">
                        <Controller
                            as={InputForm}
                            name="lastName"
                            label="Last Name"
                            control={control}
                            type="text"
                            rules={{ required: "please input last name" }}
                            isError={Boolean(
                                errors.lastName && errors.lastName.message
                            )}
                            disabled={sending}
                            errorMessage={String(errors.lastName?.message)}
                        />
                    </div>
                </div>

                <Controller
                    as={InputForm}
                    name="username"
                    label="Username"
                    control={control}
                    type="text"
                    rules={{ required: "please input username" }}
                    isError={Boolean(
                        errors.username && errors.username.message
                    )}
                    disabled={sending}
                    errorMessage={String(errors.username?.message)}
                />

                <Controller
                    as={InputForm}
                    name="confirmUsername"
                    label="Re-type username"
                    control={control}
                    type="text"
                    rules={{
                        required: "please input username",
                        validate: (value) => {
                            if (value === watch("username")) {
                                return true;
                            } else {
                                return "username mismatch";
                            }
                        },
                    }}
                    isError={Boolean(
                        errors.confirmUsername && errors.confirmUsername.message
                    )}
                    disabled={sending}
                    errorMessage={String(errors.confirmUsername?.message)}
                />

                <Controller
                    as={InputForm}
                    name="password"
                    label="Password"
                    control={control}
                    type="password"
                    rules={{ required: "please input password" }}
                    isError={Boolean(
                        errors.password && errors.password.message
                    )}
                    disabled={sending}
                    errorMessage={String(errors.password?.message)}
                />

                <Controller
                    as={InputForm}
                    name="confirmPassword"
                    label="Re-type password"
                    control={control}
                    type="password"
                    rules={{
                        required: "please re-type password",
                        validate: (value) => {
                            if (value === watch("password")) {
                                return true;
                            } else {
                                return "password mismatch";
                            }
                        },
                    }}
                    isError={Boolean(
                        errors.confirmPassword && errors.confirmPassword.message
                    )}
                    disabled={sending}
                    errorMessage={String(errors.confirmPassword?.message)}
                />

                <MainButton
                    label="Create Account"
                    type="submit"
                    disabled={sending}
                    loading={sending}
                />
            </form>
        </div>
    );
};

export default Signup;

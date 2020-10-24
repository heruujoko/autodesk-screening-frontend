import React from "react";
import {
    render,
    fireEvent,
    getByText,
    waitFor,
} from "@testing-library/react";

import SigninStepTwo from "./SigninStepTwo";

describe("SigninStepTwo", () => {
    it("render password field, and show username from previous section", () => {
        const onSuccess = () => {};
        const onBack = () => {};
        const { getByTestId } = render(
            <div data-testid="signin-step">
                <SigninStepTwo onSuccess={onSuccess} username="johndoe" onBack={onBack} />
            </div>
        );

        const element = getByTestId("signin-step");
        expect(element).toContainHTML("Password");
        expect(element).toContainHTML("Welcome");
        expect(element).toContainHTML("johndoe");
    });

    it("show error message when submit without value", async () => {
        const onSuccess = () => {};
        const onBack = () => {};
        const { getByTestId } = render(
            <div data-testid="signin-step">
                <SigninStepTwo onSuccess={onSuccess} username="johndoe" onBack={onBack} />
            </div>
        );

        const element = getByTestId("signin-step");
        fireEvent.click(getByText(element, "Sign in"));
        await waitFor(() =>
            expect(
                getByText(element, "please input a password")
            ).toBeInTheDocument()
        );
    });
});

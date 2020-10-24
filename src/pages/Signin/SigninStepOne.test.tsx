import React from "react";
import {
    render,
    fireEvent,
    getByText,
    waitFor,
    getByPlaceholderText,
} from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import SigninStepOne from "./SigninStepOne";

describe("SigninStepOne", () => {
    it("render username field", () => {
        const onSuccess = (username: string) => {};
        const { getByTestId } = render(
            <div data-testid="signin-step">
                <SigninStepOne onSuccess={onSuccess} />
            </div>
        );

        const element = getByTestId("signin-step");
        expect(element).toContainHTML("Signin");
        expect(element).toContainHTML("Username");
    });

    it("show error message when attempt signin without value", async () => {
        const onSuccess = (username: string) => {};
        const { getByTestId } = render(
            <div data-testid="signin-step">
                <SigninStepOne onSuccess={onSuccess} />
            </div>
        );

        const element = getByTestId("signin-step");
        fireEvent.click(getByText(element, "Next"));
        await waitFor(() =>
            expect(
                getByText(element, "please input a valid username")
            ).toBeInTheDocument()
        );
    });

    it("set button to Verifying and input to be disabled upon submit", async () => {
        const onSuccess = (username: string) => {};
        const { getByTestId } = render(
            <div data-testid="signin-step">
                <SigninStepOne onSuccess={onSuccess} />
            </div>
        );

        const element = getByTestId("signin-step");
        const input = getByPlaceholderText(element, "Username");

        userEvent.type(input, "johndoe");
        fireEvent.click(getByText(element, "Next"));
        await waitFor(() => {
            const btn = getByText(element, "Verifiying");
            expect(input.hasAttribute("disabled")).toBe(true);
            expect(btn).toBeInTheDocument();
        });
    });
});

import React from "react";
import {
    render,
    fireEvent,
    getByText,
    waitFor,
    getByPlaceholderText,
} from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import Signup from './Signup';

describe('Signup', () => {
    it("render signup forms", () => {
        const { getByTestId } = render(
            <div data-testid="signup-step">
                <Signup />
            </div>
        );

        const element = getByTestId("signup-step");
        expect(element).toContainHTML("Create Account");
        expect(element).toContainHTML("First Name");
        expect(element).toContainHTML("Last Name");
        expect(element).toContainHTML("Username");
        expect(element).toContainHTML("Re-type username");
        expect(element).toContainHTML("Password");
        expect(element).toContainHTML("Re-type password");
    });

    it('shows error when submitted without typing any value', async () => {
        const { getByTestId } = render(
            <div data-testid="signup-step">
                <Signup />
            </div>
        );

        const element = getByTestId("signup-step");
        fireEvent.click(getByText(element, "Create Account"));
        await waitFor(() => {
            expect(element).toContainHTML("please input first name");
            expect(element).toContainHTML("please input last name");
        });
    });

    it('ensure username and retype username field has same value [FALSY]', async () => {
        const { getByTestId } = render(
            <div data-testid="signup-step">
                <Signup />
            </div>
        );

        const element = getByTestId("signup-step");
        const usernameField = getByTestId("datatest-username");
        const confirmUsernameField = getByTestId("datatest-confirmUsername");

        userEvent.type(usernameField, "jonhdoe");
        userEvent.type(confirmUsernameField, "jonhdoe123");
        fireEvent.click(getByText(element, "Create Account"));
        await waitFor(() => {
            expect(element).toContainHTML("username mismatch");
        });
    });

    it('ensure username and retype username field has same value [TRUTHY]', async () => {
        const { getByTestId } = render(
            <div data-testid="signup-step">
                <Signup />
            </div>
        );

        const element = getByTestId("signup-step");
        const usernameField = getByTestId("datatest-username");
        const confirmUsernameField = getByTestId("datatest-confirmUsername");

        userEvent.type(usernameField, "jonhdoe");
        userEvent.type(confirmUsernameField, "jonhdoe");
        fireEvent.click(getByText(element, "Create Account"));
        await waitFor(() => {
            expect(element).not.toContainHTML("username mismatch");
        });
    });
    
    it('ensure password and retype password field has same value [FALSY]', async () => {
        const { getByTestId } = render(
            <div data-testid="signup-step">
                <Signup />
            </div>
        );

        const element = getByTestId("signup-step");
        const passwordField = getByTestId("datatest-password");
        const confirmPasswordField = getByTestId("datatest-confirmPassword");

        userEvent.type(passwordField, "Test123)");
        userEvent.type(confirmPasswordField, "jonhdoe123");
        fireEvent.click(getByText(element, "Create Account"));
        await waitFor(() => {
            expect(element).toContainHTML("password mismatch");
        });
    });

    it('ensure password and retype password field has same value [TRUTHY]', async () => {
        const { getByTestId } = render(
            <div data-testid="signup-step">
                <Signup />
            </div>
        );

        const element = getByTestId("signup-step");
        const passwordField = getByTestId("datatest-password");
        const confirmPasswordField = getByTestId("datatest-confirmPassword");

        userEvent.type(passwordField, "Test123)");
        userEvent.type(confirmPasswordField, "Test123)");
        fireEvent.click(getByText(element, "Create Account"));
        await waitFor(() => {
            expect(element).not.toContainHTML("password mismatch");
        });
    });
});
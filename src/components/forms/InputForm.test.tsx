import React from "react";
import {
    render,
    fireEvent,
    getByText,
    waitFor,
} from "@testing-library/react";

import InputForm from "./InputForm";

describe("InputForm", () => {
    it("render input with label", () => {
        const { getByTestId } = render(
            <div data-testid="input-form">
                <InputForm
                    label="UsernameLabel"
                    name="Username"
                    type="text"
                    isError={false}
                />
            </div>
        );

        const element = getByTestId("input-form");
        expect(element).toContainHTML("UsernameLabel");
    });

    it("render input with default value", () => {
        const { getByTestId } = render(
            <div data-testid="input-form">
                <InputForm
                    label="Username"
                    name="Username"
                    type="text"
                    value="johndoe"
                    isError={false}
                    onChange={()=>{}}
                />
            </div>
        );

        const element = getByTestId("input-form");
        expect(element).toContainHTML("johndoe");
    });

    it("render error message when presented", () => {
        const { getByTestId } = render(
            <div data-testid="input-form">
                <InputForm
                    label="Username"
                    name="Username"
                    type="text"
                    value="johndoe"
                    isError={true}
                    errorMessage="this is error message"
                    onChange={()=>{}}
                />
            </div>
        );

        const element = getByTestId("input-form");
        expect(element).toContainHTML("this is error message");
    });

    it("should NOT render error message when isError = false", () => {
        const { getByTestId } = render(
            <div data-testid="input-form">
                <InputForm
                    label="Username"
                    name="Username"
                    type="text"
                    value="johndoe"
                    isError={false}
                    errorMessage="this is error message"
                    onChange={()=>{}}
                />
            </div>
        );

        const element = getByTestId("input-form");
        expect(element).not.toContainHTML("this is error message");
    });
});

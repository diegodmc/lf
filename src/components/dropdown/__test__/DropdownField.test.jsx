import React from "react";
import DropdownField from "../DropdownField";
import { render, cleanup } from "@testing-library/react";

describe('DropdownField', () => {
    afterEach(cleanup)
    it('renders without crashing', () => {
        const props = {
            options: [],
            labelField: "test",
            valueField: "1",
            name: "teste"
        }
        render(<DropdownField {...props} />);
    });
})
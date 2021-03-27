import React from "react";
import DropdownMultiField from "../DropdownMultiField";
import { render, cleanup } from "@testing-library/react";

describe('DropdownMultiField', () => {
    afterEach(cleanup)
    it('renders without crashing', () => {
        const props = {
            options: [],
            labelField: "test",
            valueField: "1",
            onChange: () => { },
            value: 1,
            placeholder: 'Name',
            label: "label",
            margin: "10px",
            disabled: true,
            flex: 10,
            scrool: true
        }
        render(<DropdownMultiField {...props} />);
    });
})
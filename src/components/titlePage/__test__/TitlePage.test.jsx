import React from "react";
import TitlePage from "../TitlePage";
import { render, cleanup } from "@testing-library/react";

describe('TitlePage', () => {
    afterEach(cleanup)
    it('renders without crashing', () => {
        const Props = {
            primary: "primary",
            style: "10"
        }
        render(<TitlePage {...Props} />);
    });
})
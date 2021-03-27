import React from "react";
import Spinner from "../Spinner";
import { render, cleanup } from "@testing-library/react";

describe('Spinner', () => {
    afterEach(cleanup)

    it('renders without crashing', () => {
        render(<Spinner />);
    });
})
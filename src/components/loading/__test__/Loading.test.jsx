import React from "react";
import Loading from "../Loading";
import { render, cleanup } from "@testing-library/react";

describe('Loading', () => {
    afterEach(cleanup)
    it('Loading - label', () => {
        render(<Loading loading={true} />);
    });
    it('Loading - label', () => {
        render(<Loading label={'label'} />);
    });
})
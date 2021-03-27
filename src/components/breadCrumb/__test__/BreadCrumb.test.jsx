import React from "react";
import ReactDOM from 'react-dom';
import BreadCrumb from "../BreadCrumb";
import { cleanup } from "@testing-library/react";

describe('BreadCrumb - Test', () => {
    afterEach(cleanup);
    it('renders without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(<BreadCrumb secondary="text" third="subtext" />, div);
    });
})

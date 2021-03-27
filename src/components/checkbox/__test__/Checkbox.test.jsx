import React from "react";
import Checkbox from "../Checkbox";
import { render, waitFor, fireEvent, cleanup } from '@testing-library/react';

describe('Checkbox', () => {
    afterEach(cleanup)
    it('renders without crashing', () => {
        const onclick = jest.fn();
        render(<Checkbox label="check" name="test" padding="8px 10px 8px 30px" margin="8px 10px 8px 30px" value={true} onChange={onclick} />);
    });

    it('checkboxes must use click', async () => {
        const onChange = jest.fn();
        const { getByTestId } = render(<Checkbox label="check" name="test" onChange={onChange} />);
        const check = await waitFor(
            () => getByTestId('input-checkbox')
        )
        fireEvent.click(check)
    });

})

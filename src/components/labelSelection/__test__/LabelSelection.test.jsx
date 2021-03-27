import React from 'react';
import { render } from '@testing-library/react';
import LabelSelection from '../LabelSelection';

describe('LabelSelection', () => {
    const onclick = jest.fn();
    it('LabelSelection scroll ', () => {
        render(<LabelSelection scroll={true} label={'LabelSelectionTest'} onRemove={onclick} />)
    })
    it('LabelSelection required ', () => {
        render(<LabelSelection required={true} label={'LabelSelectionTest'} onRemove={onclick} />)
    })
})
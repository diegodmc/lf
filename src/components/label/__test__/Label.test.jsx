import React from 'react';
import { render } from '@testing-library/react';
import Label from '../Label';
import labelStyle from './label.module.scss';

describe('Label', () => {
    it('renders without crashing ', () => {
        render(<Label label={'label'} />)
    })

    it('render Label bold conrrectly', () => {
        let bold = ' ';
        bold += labelStyle.boldLabel + ' '
        const { container } = render(<Label bold={true} label={'label'} />);
        expect(container.firstChild).toHaveClass(bold);
    })

    it('render Label neutral conrrectly', () => {
        let neutral = ' ';
        neutral += labelStyle.neutralLabel + ' '
        const { container } = render(<Label neutral={true} label={'label'} />);
        expect(container.firstChild).toHaveClass(neutral);
    })

    it('render Label capital conrrectly', () => {
        let capital = ' ';
        capital += labelStyle.capitalLabel + ' '
        const { container } = render(<Label capital={true} label={'label'} />);
        expect(container.firstChild).toHaveClass(capital);
    })

    it('Label - required', () => {
        render(<Label required={true} label={'label'} />);
    })

    it('Label - size', () => {
        render(<Label size={10} label={'label'} />);
    })

    it('Label - margin', () => {
        render(<Label margin={'10'} label={'label'} />);
    })
})
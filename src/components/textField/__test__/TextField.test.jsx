import React from 'react';
import { render, cleanup } from '@testing-library/react'
import TextField from '../TextField';

describe('TextField', () => {
    beforeEach(cleanup)
    it('TextField text ', () => {
        render(<TextField text={true} name={"name"} onChange={() => { }} />);
    });
    it('TextField password ', () => {
        render(<TextField password={true} name={"name"} onChange={() => { }} />);
    });
    it('TextField number ', () => {
        render(<TextField number={true} name={"name"} onChange={() => { }} />);
    });
    it('TextField  ', () => {
        render(<TextField name={"name"} onChange={() => { }} />);
    });
    it('TextField  disabled', () => {
        render(<TextField disabled={true} name={"name"} onChange={() => { }} />);
    });
    it('TextField  margin', () => {
        render(<TextField margin={'10px'} name={"name"} onChange={() => { }} />);
    });
    it('TextField  placeholder', () => {
        render(<TextField placeholder={'placeholder'} name={"name"} onChange={() => { }} />);
    });
    it('TextField  flex', () => {
        render(<TextField flex={'1'} name={"name"} onChange={() => { }} />);
    });
    it('TextField  label', () => {
        render(<TextField label={'label'} name={"name"} onChange={() => { }} />);
    });
    it('TextField  value', () => {
        render(<TextField value={'value'} name={"name"} onChange={() => { }} />);
    });
    it('TextField  padding', () => {
        render(<TextField padding={'10px'} name={"name"} onChange={() => { }} />);
    });

})
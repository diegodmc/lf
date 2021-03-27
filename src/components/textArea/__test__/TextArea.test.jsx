import React from 'react';
import { render } from '@testing-library/react';
import TextArea from '../TextArea';

describe('TextArea', () => {
    it('TextArea placeholder ', () => {
        render(<TextArea placeholder={'true'} name={'name'} onChange={() => { }} />)
    })
    it('TextArea name ', () => {
        render(<TextArea name={'name'} value={'value'} onChange={() => { }} />)
    })
    it('TextArea value ', () => {
        render(<TextArea value={'value'} name={'name'} onChange={() => { }} />)
    })
    it('TextArea onChange ', () => {
        render(<TextArea onChange={() => { }} name={'name'} />)
    })
    it('TextArea label ', () => {
        render(<TextArea label={'label'} name={'name'} onChange={() => { }} />)
    })
    it('TextArea maxLength ', () => {
        render(<TextArea maxLength={10} name={'name'} onChange={() => { }} />)
    })
    it('TextArea margin ', () => {
        render(<TextArea margin={'10px'} name={'name'} onChange={() => { }} />)
    })
})
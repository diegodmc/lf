import React from 'react';
import GenericTable from '../GenericTable'
import { render } from '@testing-library/react';

describe('GenericTable', () => {

    const call = jest.fn();
    const arrHeader = [{ description: "Id1", field: "Id1", type: "datemonth", action: call(), onMouseEnter: call(), onMouseLeave: call() },
        { description: "Id2", field: "Id2", type: "datetime", action: call(), onMouseEnter: call(), onMouseLeave: call() },
        { description: "Id3", type: "button", action: call(), onMouseEnter: call(), onMouseLeave: call() },
        { description: "Id4", field: "Id4", type: "date", action: call(), onMouseEnter: call(), onMouseLeave: call() },
        { description: "Id5", field: "Id5", type: "multi-action", action: call(), onMouseEnter: call(), onMouseLeave: call() },
        { description: "Id6", field: "Id6", type: "image", action: call(), onMouseEnter: call(), onMouseLeave: call() },
        { description: "Id7", field: "Id7", type: "array", action: call(), onMouseEnter: call(), onMouseLeave: call() },
        { description: "Id7", field: undefined, type: "array", action: call(), onMouseEnter: call(), onMouseLeave: call() },
    ];
    const arrRow = [{ Id: 1, Id1: 'Name' },
    { Id: 2, Id2: 'Last Name' },
    { Id: 3, Id3: 'Last Name' },
    { Id: 4, Id4: 'Last Name' },
    { Id: 5, Id5: 'Last Name' },
    { Id: 6, Id6: 'Last Name' },
    { Id: 7, Id7: 'Name' },
    ];

    it('render correctly', () => {
        const props = {
            searchable: false,
            loading: false,
            onRemove: () => { },
            onEdit: () => { },
            arrHeader: arrHeader,
            arrRow: arrRow,
            rowsPage: 10,
        }
        render(<GenericTable {...props} />);
    })
    it('render correctly without header', () => {
        const props = {
            searchable: true,
            loading: true,
            onRemove: () => { },
            onEdit: () => { },
            arrHeader: [{ description: null, field: null }],
            arrRow: arrRow,
            rowsPage: 10,
        }
        render(<GenericTable {...props} />);
    })
    it('newRegister', () => {
        const call = jest.fn();
        let newRegister = {
            onClick: call(),
            label: 'label'
        }

        render(<GenericTable newRegister={newRegister} arrRow={arrRow} arrHeader={arrHeader} />);
    })
})
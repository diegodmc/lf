import React from 'react';
import Tab, { Tabs } from '../Tab'
import { render } from '@testing-library/react';

describe('Tab', () => {

   it('Tab component', () => {
      const tabs = [{ index: 1, description: 'production', component: () => (<div>1</div>), arr_legend: [{ color: 'color', name: 'name' }] },
      { index: 2, description: 'project', component: () => (<div>2</div>), arr_legend: [{ color: 'color', name: 'name' }] }
      ];
      render(<Tab tabs={tabs} selectedTabIndex={1} />);
   })
   it('Tab chartAll', () => {
      const tabs = [{ index: 100, description: 'production', chartAll: () => (<div>1</div>), arr_legend: [{ color: 'color', name: 'name' }] }
      ];
      render(<Tab tabs={tabs} selectedTabIndex={1} />);
   })
   it('Tab is null', () => {
      const tabs = null;
      render(<Tab tabs={tabs} selectedTabIndex={1} />);
   })
})
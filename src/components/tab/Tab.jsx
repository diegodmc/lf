import React, { useState } from 'react';
import PropTypes from 'prop-types';
import tabStyle from './tab.module.scss';
import { CardColumn, CardRow } from '../';
const Tab = props => {

  const [selectedTab, setSelectedTab] = useState(props.selectedTabIndex);

  const getClassName = (tab) => {
    let classes = tabStyle.tab + ' ';
    if (selectedTab === tab.index) {
      classes += tabStyle.selected + ' ';
    }
    return classes;
  }

  const renderTabs = () => {
    if (props.tabs) {
      return props.tabs.map((tab) => (
        <CardColumn key={tab.index}>
          <div
            className={getClassName(tab)}
            onClick={() => { setSelectedTab(tab.index === selectedTab ? props.tabs.length : tab.index) }} key={tab.index}>
            {tab.description}
          </div>
        </CardColumn>
      ));
    }
    return null;
  }

  const renderTabContent = () => {
    if (props.tabs) {
      const tab = props.tabs.find((tab) => {
        return tab.index === selectedTab
      });

      if (tab) return (
        <>
          <CardColumn key={tab.index} style={{ height: '500px', marginTop: 'auto' }}>{tab.component()}</CardColumn>
          <CardRow flexWrap="wrap" itemAlign="center" justifyContent="center" scroll={true} key={Math.random()} >
            {
              props.tabs[0]?.arr_legend?.map((legend) => (<>
                <>
                  <CardColumn flex="unset" flexGrow="unset">
                    <div style={{ display: 'block', height: '4px', width: '25px', backgroundColor: legend.color }}></div>
                    <span style={{ display: 'block', paddingLeft: '15px', width: '110px', marginTop: '-8px', marginLeft: '15px', color: '#666666' }}>{legend.name}</span>
                  </CardColumn>
                </>
              </>
              )
              )
            }
          </CardRow>
        </>)
      else return <>
        <CardRow>
          {props.tabs.map((tab) => (
            <CardColumn key={tab.index}>
              {tab.chartAll()}
            </CardColumn>
          )
          )
          }
        </CardRow>
        <CardRow flexWrap="wrap" itemAlign="center" justifyContent="center" scroll={true}>
          {
            props.tabs[0]?.arr_legend.map((legend) => (<>
              <>
                <CardColumn flex="unset" flexGrow="unset">
                  <div style={{ display: 'block', height: '4px', width: '25px', backgroundColor: legend.color }}></div>
                  <span style={{ display: 'block', paddingLeft: '15px', width: '110px', marginTop: '-8px', marginLeft: '15px', color: '#666666' }}>{legend.name}</span>
                </CardColumn>
              </>
            </>
            )
            )
          }
        </CardRow>
      </>;
    }
    return null;
  }

  return (
    <>
      <div className={tabStyle.tabContainer} style={{ justifyContent: props.justifyContent ? props.justifyContent : 'center' }}>
        {renderTabs()}
      </div>
      <div className={tabStyle.tabContent}>
        {renderTabContent()}
      </div>

    </>
  );
}

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired
    })
  ),
  selectedTabIndex: PropTypes.number.isRequired,
};

export default Tab;
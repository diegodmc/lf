import React from 'react';
import { BrowserRouter as HashRouter, Route, Link } from "react-router-dom";
import { Menu, ChevronLeft, HelpCircle } from 'react-feather';
import Switch from "react-switch";
import './styles/App.scss';
import "./styles/theme.scss";
import "./styles/colors.scss";
import Home from './modules/Home/Home';
import Arrow from './styles/img/arrow.svg';
import useApp from './useApp';
import modules from './modules';
const App = props => {
  
  const {
    handleClearIntro,
    handleToggle,
    handleTheme,
    currentTab,
    toggleDropdown,
    theme,
    sideBar,
    checkedIcon,
    setCurrentTab
  } = useApp();

  
      return (
        
          <HashRouter basename={'#'}>
            {
              <div className={`App ${theme}`}>
                <div className="App-header">
                  {!sideBar ?
                    <div className={'App-menu-close'}><Menu size={30} onClick={handleToggle} style={{ marginTop: '8px', marginLeft: '20px' }} /></div> :
                    <div className={'App-menu-open'}><ChevronLeft size={30} onClick={handleToggle} style={{ marginTop: '8px', marginLeft: '167px', border: '1px solid #cccccc26' }} /></div>
                  }
                  <div className="App-logo-cia"/>
                  <div className="App-logo">{<sṕan style={{ height: '30px' }} />}</div>
                  <span style={{ marginRight: '10px', paddingTop: '20px' }}/>
                  <div className="App-theme">
                    <Switch onChange={handleTheme}
                      checked={checkedIcon}
                      onColor="#515151"
                      onHandleColor="#333333"
                      handleDiameter={20}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                      height={15}
                      width={36}
                      className="react-switch"
                    />
                  </div>
                  <div className="App-help">
                    <a style={{ cursor: 'pointer' }} onClick={handleClearIntro}>
                      <HelpCircle size={24} style={{ color: '#F49B00' }} />
                    </a>
                  </div>
                </div>
                <div className="App-body">
                  <div className={!sideBar ? 'App-sidebar-close' : 'App-sidebar-open'}>
                  <ul className="App-nav">
                      {modules.map(module => (
                        module.routeModule.show ?
                          <Link to={module.routeModule.path} onClick={() => setCurrentTab(module.routeModule.key)} >
                            <li key={module.routeModule.key} className={currentTab === module.routeModule.key ? 'active' : ''}>
                              {currentTab === module.routeModule.key ?
                                <img src={module.routeModule.iconSelected} style={{ marginRight: '5px', marginLeft: '16px' }} /> :
                                <img src={module.routeModule.icon} style={{ marginRight: '5px', marginLeft: '16px' }} />
                              }
                              {!sideBar ? null : <span style={{ color: '#ffffff', marginRight: '5px', marginLeft: '16px' }}>{module.routeModule.key}</span>}
                            </li>
                          </Link>
                          : null
                      ))}
                    </ul>
                  </div>
                  <div className={'App-content'}>
                    {modules.map(module => (
                      module.routeModule.show ?
                        <Route path={module.routeModule.path} component={module.routeModule.component} key={module.routeModule.key} exact />
                        : null
                    ))}
                    {modules.map(module => (
                      module.routeModule.show ?
                        module.routeModule.routeComponents.map(component => (
                          <Route {...component} />
                        ))
                        : null
                    ))}
                  </div>
                </div>
              </div>
            }
          </HashRouter>
        
      )
   
}
export default App;
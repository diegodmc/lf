import { useState, useEffect } from 'react';


export default () => {
  const [user, setUser] = useState({});
  const [currentTab, setCurrentTab] = useState('sample_list_samples');
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [sideBar, setSideBar] = useState(false);
  const [checkedIcon, setcheckedIcon] = useState(localStorage.getItem('theme') === 'dark' ? true : false);
  


  const [isAllowed, setAllowed] = useState(false);
  const handleAllowed = isAllowed => {
    setAllowed(isAllowed);
  };

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    handleTheme();
  }, []);

  const handleTheme = (bol_theme_dark) => {
    if (bol_theme_dark) {
      setTheme("dark");
      localStorage.setItem('theme', 'dark');
      setcheckedIcon(true);
    }
    else if (bol_theme_dark === false) {
      setTheme("light");
      localStorage.setItem('theme', 'light');
      setcheckedIcon(false);
    } else {
      var themeCurrent = localStorage.getItem('theme');
      if (themeCurrent === 'dark' || themeCurrent === undefined || themeCurrent === null) {
        setTheme("dark");
        localStorage.setItem('theme', 'dark');
        setcheckedIcon(true);
      } else {
        setTheme("light");
        setcheckedIcon(false);
      }
    }
  }
  const handleToggle = () => {
    setSideBar(!sideBar);
    // localStorage.setItem('openSideBar', true);
  }

  return {
    handleAllowed,
    handleToggle,
    handleTheme,
    currentTab,
    showDropdown,
    toggleDropdown,
    theme,
    sideBar,
    checkedIcon,
    isAllowed,
    setCurrentTab
  }
}
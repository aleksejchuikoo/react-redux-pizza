import React from 'react';

import sun from '../../assets/img/sun.svg';
import moon from '../../assets/img/moon.svg';

import './ThemeSwitcher.sass';

function ThemeSwitcher({ onClick }) {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const theme = localStorage.getItem('theme-color');
    if (theme === 'theme-dark') {
      localStorage.setItem('theme-color', 'theme-dark');
      setActive(true);
      onClick();
    } else {
      localStorage.setItem('theme-color', 'theme-light');
      setActive(false);
    }
  }, []);

  const toggleSwitch = () => {
    if (active) {
      localStorage.setItem('theme-color', 'theme-light');
    } else {
      localStorage.setItem('theme-color', 'theme-dark');
    }
    setActive(!active);
    onClick();
  };

  return (
    <div className={`checkbox-btn ${active ? 'active' : ''}`} onClick={toggleSwitch}>
      <img width="26" src={sun} alt="Sun" />
      <input type="checkbox" className="theme-checkbox" />
      <label htmlFor=""></label>
      <img width="26" src={moon} alt="Moon" />
    </div>
  );
}

export default ThemeSwitcher;

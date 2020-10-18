import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

import '../styles/components/toggle-dark-mode.css';

export default function ToggleDarkMode() {
  const [theme, setTheme] = useState('');
  function handleDarkMode() {
    const body = document.querySelector('body');
    
    body?.classList.toggle('dark');
    const themeClass = body?.getAttribute('class') || '';
    setTheme(themeClass);
  }

  return (
    <div className="themeSwitcher">
      { theme === 'dark' ? (
        <button type="button" className="light" onClick={handleDarkMode}>
          <FiSun size={26} color="#FFF" />
        </button>
      ) : (
        <button type="button" className="dark" onClick={handleDarkMode}>   
          <FiMoon size={26} color="#000" />
        </button>
      )}
    </div>
  );
}
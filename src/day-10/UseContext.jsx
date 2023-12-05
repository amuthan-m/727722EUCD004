import React, { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Switch Theme
      </button>
      <div>Current theme is: {theme}</div>
    </div>
  );
}

export default ThemeSwitcher;

import React, { FC, useContext, useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

const ThemeContext = createContext(true);
const ThemeUpdateContext = createContext(null);

export const useTheme = (): boolean => useContext(ThemeContext);

export const useUpdateTheme = () => useContext(ThemeUpdateContext);

const ThemeProvider: FC = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  useEffect(() => {
    localStorage.getItem('darkTheme')
      ? setDarkTheme(JSON.parse(localStorage.getItem('darkTheme')))
      : setDarkTheme(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;

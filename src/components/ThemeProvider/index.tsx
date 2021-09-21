import React, { FC, useContext, useState } from 'react';
import { createContext } from 'react';

const ThemeContext = createContext(true);
const ThemeUpdateContext = createContext(null);

export const useTheme = (): boolean => {
  return useContext(ThemeContext);
};

export const useUpdateTheme = () => {
  return useContext(ThemeUpdateContext);
};

const ThemeProvider: FC = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;

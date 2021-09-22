import React from 'react';
import { useCallback } from 'react';
import { FC } from 'react';
import { useUpdateTheme } from '../ThemeProvider';
import './ThemeSwitch.scss';

const ThemeSwitcher: FC = () => {
  const updateTheme = useUpdateTheme();

  const checkHandler = useCallback(() => {
    updateTheme();
  }, [updateTheme]);

  return (
    <div className="themeWrapper">
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox"
        onChange={checkHandler}
      />
      <label htmlFor="checkbox" className="label" />
    </div>
  );
};

export default ThemeSwitcher;

import React from 'react';
import { useCallback } from 'react';
import { FC } from 'react';
import { useTheme, useUpdateTheme } from '../ThemeProvider';
import './ThemeSwitch.scss';

const ThemeSwitcher: FC = () => {
  const updateTheme = useUpdateTheme();
  const theme = useTheme();

  const checkHandler = useCallback(() => updateTheme(), [updateTheme]);

  return (
    <div className="themeWrapper">
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox"
        onChange={checkHandler}
        checked={theme}
      />
      <label htmlFor="checkbox" className="label" />
    </div>
  );
};

export default ThemeSwitcher;

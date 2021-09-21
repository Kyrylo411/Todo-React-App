import React from 'react';
import { FC } from 'react';
import { useTheme, useUpdateTheme } from '../ThemeProvider';
import './ThemeSwitch.scss';

const ThemeSwitcher: FC = () => {
  const updateTheme = useUpdateTheme();
  const darkTheme = useTheme();

  console.log('darkTheme : ', darkTheme);

  const checkHandler = () => {
    updateTheme();
  };

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

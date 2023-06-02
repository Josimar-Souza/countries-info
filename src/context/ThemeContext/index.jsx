import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PropType from 'prop-types';
import themes from '../../globalStyles/themes';

export const themeContext = createContext();

function ThemeContext({ children }) {
  const [currTheme, setCurrTheme] = useState({ theme: themes.lightTheme, darkMode: false });

  const changeTheme = () => {
    const { lightTheme, darkTheme } = themes;

    if (currTheme.darkMode) {
      setCurrTheme({ theme: lightTheme, darkMode: false });
    } else {
      setCurrTheme({ theme: darkTheme, darkMode: true });
    }
  };

  const contextValue = useMemo(() => ({
    currTheme,
    setCurrTheme,
    changeTheme,
  }), [currTheme]);

  return (
    <themeContext.Provider value={contextValue}>
      <ThemeProvider theme={currTheme.theme}>
        { children }
      </ThemeProvider>
    </themeContext.Provider>
  );
}

ThemeContext.propTypes = {
  children: PropType.node.isRequired,
};

export default ThemeContext;

import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PropType from 'prop-types';

export const themeContext = createContext();

function ThemeContext({ children }) {
  const [currTheme, setCurrTheme] = useState({});

  const contextValue = useMemo(() => ({
    currTheme,
    setCurrTheme,
  }), [currTheme]);

  return (
    <themeContext.Provider value={contextValue}>
      <ThemeProvider theme={currTheme}>
        { children }
      </ThemeProvider>
    </themeContext.Provider>
  );
}

ThemeContext.propTypes = {
  children: PropType.node.isRequired,
};

export default ThemeContext;

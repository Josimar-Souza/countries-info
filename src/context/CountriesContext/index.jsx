import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const countriesContext = createContext();

function CountriesContext({ children }) {
  const [countries, setCountries] = useState([]);

  const contextValue = useMemo(() => ({ countries, setCountries }), []);

  return (
    <countriesContext.Provider value={contextValue}>
      {children}
    </countriesContext.Provider>
  );
}

CountriesContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CountriesContext;

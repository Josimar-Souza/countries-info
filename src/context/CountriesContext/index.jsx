import React, {
  createContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import CountriesAPI from '../../domain/countries';
import ErrorCreator from '../../helpers/ErrorCreator';
import sendNotification from '../../helpers/sendNotification';

export const countriesContext = createContext();
const countriesAPI = new CountriesAPI();

function CountriesContext({ children }) {
  const [countries, setCountries] = useState([]);

  const getAllCountries = async () => {
    const result = await countriesAPI.getAllCountries();

    if (result instanceof ErrorCreator) {
      sendNotification(result.customMessage, 'error');
    } else {
      setCountries(result);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const contextValue = useMemo(() => ({
    countries,
    setCountries,
  }), [countries]);

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

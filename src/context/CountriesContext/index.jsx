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

  const searchCountries = async (term, type) => {
    let result;

    switch (type) {
      case 'name':
        result = await countriesAPI.getCountryByName(term);
        break;
      case 'currency':
        result = await countriesAPI.getCountryByCurrency(term);
        break;
      case 'capital':
        result = await countriesAPI.getCountryByCapitalCity(term);
        break;
      case 'region':
        result = await countriesAPI.getCountriesByRegion(term);
        break;
      case 'lang':
        result = await countriesAPI.getCountriesByLanguage(term);
        break;
      default:
        sendNotification('Não foi possível realizar a busca, por favor, tente mais tarde!', 'error');
    }

    setCountries(result);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const contextValue = useMemo(() => ({
    countries,
    setCountries,
    getAllCountries,
    searchCountries,
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

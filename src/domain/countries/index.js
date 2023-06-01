import axios from 'axios';

import ErrorCreator from '../../helpers/ErrorCreator';

const baseUrl = process.env.REACT_APP_COUNTRIES_API;

class CountriesAPI {
  constructor(timeout = 15000) {
    this.api = axios.create({
      baseUrl,
      timeout,
    });
  }

  async getAllCountries() {
    try {
      const result = await this.api.get('/all');

      return result;
    } catch (e) {
      return new ErrorCreator(e, 'Não foi possível encontrar os países, por favor, tente mais tarde!');
    }
  }

  async getCountryByName(name) {
    try {
      const result = await this.api.get(`/name/${name}`);

      return result;
    } catch (e) {
      return new ErrorCreator(e, `Não foi possível encontrar o país "${name}"`);
    }
  }

  async getCountryByCurrency(currency) {
    try {
      const result = await this.api.get(`/currency/${currency}`);

      return result;
    } catch (e) {
      return new ErrorCreator(e, `Não foi possível encontrar o país pela moeda "${currency}"`);
    }
  }

  async getCountryByCapitalCity(capital) {
    try {
      const result = await this.api.get(`/capital/${capital}`);

      return result;
    } catch (e) {
      return new ErrorCreator(e, `Não foi possível encontrar o país pela moeda "${capital}"`);
    }
  }

  async getCountriesByRegion(region) {
    try {
      const result = await this.api.get(`/region/${region}`);

      return result;
    } catch (e) {
      return new ErrorCreator(e, `Não foi possível encontrar países na região "${region}"`);
    }
  }

  async getCountriesByLanguage(language) {
    try {
      const result = await this.api.get(`/lang/${language}`);

      return result;
    } catch (e) {
      return new ErrorCreator(e, `Não foi possível encontrar países com o idioma "${language}"`);
    }
  }
}

export default CountriesAPI;

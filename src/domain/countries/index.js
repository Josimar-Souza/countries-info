import axios from 'axios';

import ErrorCreator from '../../helpers/ErrorCreator';

const baseUrl = process.env.REACT_APP_COUNTRIES_API;

class CountriesAPI {
  constructor(timeout = 15000) {
    this.api = axios.create({
      timeout,
    });
  }

  async getAllCountries() {
    try {
      const { data } = await this.api.get(`${baseUrl}/all`);
      return data;
    } catch (e) {
      return new ErrorCreator(e, 'Não foi possível encontrar os países, por favor, tente mais tarde!');
    }
  }

  async getCountryByName(name) {
    try {
      const { data } = await this.api.get(`${baseUrl}/name/${name}`);

      return data;
    } catch (e) {
      return new ErrorCreator(e, `Não foi possível encontrar o país "${name}"`);
    }
  }

  async getCountryByCurrency(currency) {
    try {
      const { data } = await this.api.get(`${baseUrl}/currency/${currency}`);

      return data;
    } catch (e) {
      return new ErrorCreator(e, `Não foi possível encontrar o país pela moeda "${currency}"`);
    }
  }

  async getCountryByCapitalCity(capital) {
    try {
      const { data } = await this.api.get(`${baseUrl}/capital/${capital}`);

      return data;
    } catch (e) {
      return new ErrorCreator(e, `Não foi possível encontrar o país pela moeda "${capital}"`);
    }
  }

  async getCountriesByRegion(region) {
    try {
      const { data } = await this.api.get(`${baseUrl}/region/${region}`);

      return data;
    } catch (e) {
      return new ErrorCreator(e, `Não foi possível encontrar países na região "${region}"`);
    }
  }

  async getCountriesByLanguage(language) {
    try {
      const { data } = await this.api.get(`${baseUrl}/lang/${language}`);

      return data;
    } catch (e) {
      return new ErrorCreator(e, `Não foi possível encontrar países com o idioma "${language}"`);
    }
  }

  async getCountryByCCA2(cca2) {
    try {
      const { data } = await this.api.get(`${baseUrl}/alpha/${cca2}`);

      return data;
    } catch (e) {
      return new ErrorCreator(e, `Não foi possível encontrar o país com o cca2 "${cca2}"`);
    }
  }
}

export default CountriesAPI;

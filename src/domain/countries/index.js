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
}

export default CountriesAPI;

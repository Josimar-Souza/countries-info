import React from 'react';
import PropTypes from 'prop-types';
import {
  CountryCardContainer,
  CountryImage,
  CountryImageContainer,
  CountryTitle,
  CountryInfo,
} from './countryCardStyles';
import numberFormatter from '../../helpers/numberFormatter';

function CountryCard({ country }) {
  const {
    flags,
    name,
    region,
    population,
    capital,
  } = country;

  return (
    <CountryCardContainer>
      <CountryImageContainer>
        <CountryImage src={flags.png} alt={flags.alt} />
      </CountryImageContainer>
      <CountryTitle>{name.common}</CountryTitle>
      <CountryInfo>{`Region: ${region}`}</CountryInfo>
      <CountryInfo>{`Population: ${numberFormatter(population)}`}</CountryInfo>
      <CountryInfo>{`Capital: ${capital}`}</CountryInfo>
    </CountryCardContainer>
  );
}

CountryCard.propTypes = {
  country: PropTypes.shape({
    flags: PropTypes.shape({
      png: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.shape({
      common: PropTypes.string,
    }).isRequired,
    region: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    capital: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CountryCard;

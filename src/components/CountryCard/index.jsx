import React from 'react';
import PropTypes from 'prop-types';
import {
  CountryCardContainer,
  CountryImage,
  CountryImageContainer,
  CountryTitle,
} from './countryCardStyles';

function CountryCard({ country }) {
  console.log(country);

  const { flags, name, translations } = country;

  return (
    <CountryCardContainer>
      <CountryImageContainer>
        <CountryImage src={flags.png} alt={`Bandeira, ${name.common}`} />
      </CountryImageContainer>
      <CountryTitle>{translations.por.common}</CountryTitle>
    </CountryCardContainer>
  );
}

CountryCard.propTypes = {
  country: PropTypes.shape({
    flags: PropTypes.shape({
      png: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }).isRequired,
    translations: PropTypes.shape({
      por: PropTypes.shape({
        common: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};

export default CountryCard;

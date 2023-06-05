import React from 'react';
import PropTypes from 'prop-types';
import {
  CountryCardContainer,
  CountryImage,
  CountryImageContainer,
  CountryTitle,
  CountryInfo,
  CustomButton,
} from './countryCardStyles';
import numberFormatter from '../../helpers/numberFormatter';

function CountryCard({ country, setDetailsModalInfo }) {
  const {
    flags,
    name,
    region,
    population,
    capital,
  } = country;

  const onSeeDetailsButtonClicked = () => {
    setDetailsModalInfo({ open: true, countryName: name.common });
  };

  return (
    <CountryCardContainer>
      <CountryImageContainer>
        <CountryImage src={flags.png} alt={flags.alt} />
      </CountryImageContainer>
      <CountryTitle>{name.common}</CountryTitle>
      <CountryInfo>{`Region: ${region}`}</CountryInfo>
      <CountryInfo>{`Population: ${numberFormatter(population)}`}</CountryInfo>
      <CountryInfo>{`Capital: ${capital}`}</CountryInfo>
      <CustomButton onClick={onSeeDetailsButtonClicked}>See details</CustomButton>
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
  setDetailsModalInfo: PropTypes.func.isRequired,
};

export default CountryCard;

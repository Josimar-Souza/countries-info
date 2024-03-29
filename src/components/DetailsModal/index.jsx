import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { isMobile } from 'react-device-detect';

import {
  CustomModal,
  CustomButton,
  ModalContent,
  LeftSideContainer,
  ContentContainer,
  RightSideContainer,
  ImageContainer,
  Image,
  ImageTitle,
  CountryInfo,
  CountryInfoContainer,
  SectionTitle,
  VerticalDivider,
  CustomHorizontalDivider,
  CustomLink,
} from './detailsModalStyles';
import CountriesAPI from '../../domain/countries';
import generateRandomUUID from '../../helpers/randomUUID';
import numberFormatter from '../../helpers/numberFormatter';

const countriesAPI = new CountriesAPI();

function DetailsModal({ detailsModalInfo, setDetailsModalInfo }) {
  const [country, setCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBorderCountries = async (countryFounded) => {
      const { borders } = countryFounded;

      if (borders) {
        const countriesPromises = borders.map((border) => countriesAPI.getCountryByCCA2(border));

        const countries = await Promise.all(countriesPromises);

        const formattedCountries = [];

        countries.forEach((countryQueried) => {
          formattedCountries.push(countryQueried[0]);
        });

        setBorderCountries(formattedCountries);
      } else {
        setBorderCountries([]);
      }
    };

    const getCountry = async () => {
      if (detailsModalInfo.cca2 !== '') {
        const countryFounded = await countriesAPI.getCountryByCCA2(detailsModalInfo.cca2);
        setLoading(false);
        setCountry(countryFounded[0]);
        getBorderCountries(countryFounded[0]);
      }
    };

    getCountry();
  }, [detailsModalInfo]);

  const {
    name,
    flags,
    coatOfArms,
    region,
    capital,
    demonyms,
    currencies,
    area,
    population,
    car,
    independent,
    landlocked,
    status,
    subregion,
    maps,
    languages,
    cca2,
    unMember,
    translations,
  } = country;

  const getCoatOfArms = () => {
    if (coatOfArms && Object.entries(coatOfArms).length === 0) {
      return (
        <CountryInfo>{'This country doesn\'t have a coat of arms image'}</CountryInfo>
      );
    }

    return (
      <Image src={coatOfArms.svg} />
    );
  };

  return (
    <CustomModal
      open={detailsModalInfo.open}
      onCancel={() => setDetailsModalInfo({ open: false, cca2: '' })}
      width="85%"
      destroyOnClose
      footer={[
        <CustomButton
          onClick={() => setDetailsModalInfo({ open: false, cca2: '' })}
        >
          OK
        </CustomButton>,
      ]}
    >
      {loading ? <Spin tip="Loading..." /> : (
        <ModalContent>
          <LeftSideContainer>
            <ImageContainer>
              <Image src={flags.svg} />
            </ImageContainer>
            <ImageTitle>{name.official}</ImageTitle>
          </LeftSideContainer>
          {isMobile
            ? (
              <RightSideContainer>
                <ImageContainer>
                  {getCoatOfArms()}
                </ImageContainer>
                <ImageTitle>{`Coat of arms of ${name.common}`}</ImageTitle>
              </RightSideContainer>
            )
            : null}
          {!isMobile ? <VerticalDivider /> : null}
          {isMobile ? <CustomHorizontalDivider /> : null}
          <ContentContainer>
            <SectionTitle>Basics</SectionTitle>
            <CountryInfoContainer justifyContent="space-between" flexDirection="row">
              <CountryInfo>{`Official name: ${name.official}`}</CountryInfo>
              <CountryInfo>{`Region: ${region}`}</CountryInfo>
            </CountryInfoContainer>
            <CountryInfoContainer justifyContent="space-between" flexDirection="row">
              <CountryInfo>{`Capital: ${capital}`}</CountryInfo>
              <CountryInfo>{`Citizen is called: ${demonyms.eng.f}`}</CountryInfo>
            </CountryInfoContainer>
            <CountryInfoContainer justifyContent="space-between" flexDirection="row">
              <CountryInfo>{`Area: ${numberFormatter(area)} km²`}</CountryInfo>
              <CountryInfo>{`Population: ${numberFormatter(population)}`}</CountryInfo>
            </CountryInfoContainer>
            <CountryInfoContainer justifyContent="space-between" flexDirection="row">
              {independent
                ? (
                  <CountryInfo>
                    Independent:
                    {' '}
                    <CheckOutlined />
                  </CountryInfo>
                )
                : (
                  <CountryInfo>
                    Independent:
                    <CloseOutlined />
                  </CountryInfo>
                )}
              {landlocked
                ? (
                  <CountryInfo>
                    Land Locked:
                    {' '}
                    <CheckOutlined />
                  </CountryInfo>
                )
                : (
                  <CountryInfo>
                    Land Locked:
                    {' '}
                    <CloseOutlined />
                  </CountryInfo>
                )}
            </CountryInfoContainer>
            <CountryInfoContainer justifyContent="space-between" flexDirection="row">
              <CountryInfo>{`Status: ${status}`}</CountryInfo>
              <CountryInfo>{`Sub region: ${subregion}`}</CountryInfo>
            </CountryInfoContainer>
            <CountryInfoContainer justifyContent="space-between" flexDirection="row">
              <CountryInfo>{`CCA2: ${cca2}`}</CountryInfo>
              {unMember
                ? (
                  <CountryInfo>
                    Member of the united nations:
                    {' '}
                    <CheckOutlined />
                  </CountryInfo>
                )
                : (
                  <CountryInfo>
                    Member of the united nations:
                    {' '}
                    <CloseOutlined />
                  </CountryInfo>
                )}
            </CountryInfoContainer>
            <CustomHorizontalDivider />
            <SectionTitle>Currencies</SectionTitle>
            {currencies
              ? (
                Object.entries(currencies).map((currency) => (
                  <CountryInfoContainer
                    justifyContent="space-between"
                    flexDirection="row"
                    key={generateRandomUUID(currency[1].symbol)}
                  >
                    <CountryInfo>{`Currency: ${currency[1].name}`}</CountryInfo>
                    <CountryInfo>{`Symbol: ${currency[1].symbol}`}</CountryInfo>
                  </CountryInfoContainer>
                ))
              )
              : <CountryInfo>No currencies was found</CountryInfo>}
            <CustomHorizontalDivider />
            <SectionTitle>Car info</SectionTitle>
            <CountryInfoContainer justifyContent="space-between" flexDirection="row">
              <CountryInfo>{`Side: ${car.side}`}</CountryInfo>
              <CountryInfo>{`Sign: ${car.signs[0]?.length === 0 ? 'Uninformed' : car.signs}`}</CountryInfo>
            </CountryInfoContainer>
            <CustomHorizontalDivider />
            <SectionTitle>Maps</SectionTitle>
            <CountryInfoContainer justifyContent="space-between" flexDirection="row">
              <CountryInfo mobileMargin="10px 0">
                Google maps:
                {' '}
                <CustomLink
                  href={maps.googleMaps}
                  target="_blank"
                  rel="noreferrer"
                >
                  {maps.googleMaps}
                </CustomLink>
              </CountryInfo>
              <CountryInfo mobileMargin="10px 0">
                Open street maps:
                {' '}
                <CustomLink
                  href={maps.openStreetMaps}
                  target="_blank"
                  rel="noreferrer"
                >
                  {maps.openStreetMaps}
                </CustomLink>
              </CountryInfo>
            </CountryInfoContainer>
            <CustomHorizontalDivider />
            <SectionTitle>Languages</SectionTitle>
            <CountryInfoContainer justifyContent="center" flexDirection="column">
              {languages
                ? (
                  Object.values(languages).map((language) => (
                    <CountryInfo key={generateRandomUUID(language)}>{language}</CountryInfo>
                  ))
                )
                : <CountryInfo>No languages was found</CountryInfo>}
            </CountryInfoContainer>
            <CustomHorizontalDivider />
            <SectionTitle>Border countries</SectionTitle>
            <CountryInfoContainer flexDirection="column" justifyContent="space-around">
              {borderCountries.length === 0
                ? <CountryInfo>No border countries was found!</CountryInfo>
                : borderCountries.map((border) => (
                  <CountryInfo
                    key={generateRandomUUID(border.name.common)}
                    margin="5px 0"
                  >
                    {border.name.common}
                  </CountryInfo>
                ))}
            </CountryInfoContainer>
            <CustomHorizontalDivider />
            <SectionTitle>Translations</SectionTitle>
            {translations
              ? (
                Object.entries(translations).map((translation) => (
                  <CountryInfo
                    key={generateRandomUUID(translation[0])}
                    margin="5px 0"
                  >
                    {`${translation[0].toUpperCase()} - ${translation[1].official}`}
                  </CountryInfo>
                ))
              )
              : <CountryInfo>No translations was found</CountryInfo>}
          </ContentContainer>
          {!isMobile ? <VerticalDivider /> : null}
          {!isMobile
            ? (
              <RightSideContainer>
                <ImageContainer>
                  {getCoatOfArms()}
                </ImageContainer>
                <ImageTitle>{`Coat of arms of ${name.common}`}</ImageTitle>
              </RightSideContainer>
            )
            : null}
        </ModalContent>
      )}
    </CustomModal>
  );
}

DetailsModal.propTypes = {
  detailsModalInfo: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    cca2: PropTypes.string.isRequired,
  }).isRequired,
  setDetailsModalInfo: PropTypes.func.isRequired,
};

export default DetailsModal;

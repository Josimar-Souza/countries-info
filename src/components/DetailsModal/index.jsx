import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
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
} from './detailsModalStyles';
import CountriesAPI from '../../domain/countries';
import generateRandomUUID from '../../helpers/randomUUID';
import numberFormatter from '../../helpers/numberFormatter';

const countriesAPI = new CountriesAPI();

function DetailsModal({ detailsModalInfo, setDetailsModalInfo }) {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCountry = async () => {
      if (detailsModalInfo.cca2 !== '') {
        const countryFounded = await countriesAPI.getCountryByCCA2(detailsModalInfo.cca2);
        setLoading(false);
        setCountry(countryFounded[0]);
      }
    };

    getCountry();
  }, [detailsModalInfo]);
  console.log(country);

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
  } = country;

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
              <CountryInfo>{`Independent: ${independent}`}</CountryInfo>
              <CountryInfo>{`Land locked: ${landlocked}`}</CountryInfo>
            </CountryInfoContainer>
            <CountryInfoContainer justifyContent="space-between" flexDirection="row">
              <CountryInfo>{`Status: ${status}`}</CountryInfo>
              <CountryInfo>{`Sub region: ${subregion}`}</CountryInfo>
            </CountryInfoContainer>
            <CountryInfoContainer justifyContent="space-between" flexDirection="row">
              <CountryInfo>{`CCA2: ${cca2}`}</CountryInfo>
              <CountryInfo>{`Member of the united nations: ${unMember}`}</CountryInfo>
            </CountryInfoContainer>
            <SectionTitle>Currencies</SectionTitle>
            {Object.entries(currencies).map((currency) => (
              <CountryInfoContainer
                justifyContent="space-between"
                flexDirection="row"
                key={generateRandomUUID(currency[1].symbol)}
              >
                <CountryInfo>{`Currency: ${currency[1].name}`}</CountryInfo>
                <CountryInfo>{`Symbol: ${currency[1].symbol}`}</CountryInfo>
              </CountryInfoContainer>
            ))}
            <SectionTitle>Car info</SectionTitle>
            <CountryInfoContainer justifyContent="space-between" flexDirection="row">
              <CountryInfo>{`Side: ${car.side}`}</CountryInfo>
              <CountryInfo>{`Sign: ${car.signs[0]?.length === 0 ? 'Uninformed' : car.signs}`}</CountryInfo>
            </CountryInfoContainer>
            <SectionTitle>Maps</SectionTitle>
            <CountryInfoContainer justifyContent="space-between" flexDirection="row">
              <CountryInfo>
                Google maps:
                {' '}
                <a
                  href={maps.googleMaps}
                  target="_blank"
                  rel="noreferrer"
                >
                  {maps.googleMaps}
                </a>
              </CountryInfo>
              <CountryInfo>
                Open street maps:
                {' '}
                <a
                  href={maps.openStreetMaps}
                  target="_blank"
                  rel="noreferrer"
                >
                  {maps.openStreetMaps}
                </a>
              </CountryInfo>
            </CountryInfoContainer>
            <SectionTitle>Languages</SectionTitle>
            <CountryInfoContainer justifyContent="center" flexDirection="column">
              {Object.values(languages).map((language) => (
                <CountryInfo key={generateRandomUUID(language)}>{language}</CountryInfo>
              ))}
            </CountryInfoContainer>
          </ContentContainer>
          <RightSideContainer>
            <ImageContainer>
              {Object.entries(coatOfArms).length === 0
                ? <CountryInfo>{'This country doesn\'t have a coat of arms image'}</CountryInfo>
                : <Image src={coatOfArms.svg} />}
            </ImageContainer>
            <ImageTitle>{`Coat of arms of ${name.common}`}</ImageTitle>
          </RightSideContainer>
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

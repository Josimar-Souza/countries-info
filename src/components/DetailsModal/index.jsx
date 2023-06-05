import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { CustomModal, CustomButton } from './detailsModalStyles';
import CountriesAPI from '../../domain/countries';

const countriesAPI = new CountriesAPI();

function DetailsModal({ detailsModalInfo, setDetailsModalInfo }) {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCountry = async () => {
      if (detailsModalInfo.countryName !== '') {
        const countryFounded = await countriesAPI.getCountryByName(detailsModalInfo.countryName);
        setLoading(false);
        setCountry(countryFounded[0]);
      }
    };

    getCountry();
  }, [detailsModalInfo]);
  console.log(country);
  return (
    <CustomModal
      open={detailsModalInfo.open}
      onCancel={() => setDetailsModalInfo({ open: false, countryName: '' })}
      footer={[
        <CustomButton
          onClick={() => setDetailsModalInfo({ open: false, countryName: '' })}
        >
          OK
        </CustomButton>,
      ]}
    >
      {loading ? <Spin tip="Loading..." /> : (
        <h1>Test</h1>
      )}
    </CustomModal>
  );
}

DetailsModal.propTypes = {
  detailsModalInfo: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    countryName: PropTypes.string.isRequired,
  }).isRequired,
  setDetailsModalInfo: PropTypes.func.isRequired,
};

export default DetailsModal;

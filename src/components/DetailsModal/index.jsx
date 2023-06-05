import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from './detailsModal';

function DetailsModal({ detailsModalInfo, setDetailsModalInfo }) {
  return (
    <CustomModal
      open={detailsModalInfo.open}
      onCancel={() => setDetailsModalInfo({ open: false, countryName: '' })}
    />
  );
}

DetailsModal.propTypes = {
  detailsModalInfo: PropTypes.shape({
    open: PropTypes.bool.isRequired,
  }).isRequired,
  setDetailsModalInfo: PropTypes.func.isRequired,
};

export default DetailsModal;

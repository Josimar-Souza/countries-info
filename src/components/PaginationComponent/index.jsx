import React from 'react';
// import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import { PaginationContainer, CustomPaginationComponent } from './paginationComponentStyes';

function PaginationComponent({ total, defaultPageSize, defaultPage }) {
  return (
    <PaginationContainer>
      <CustomPaginationComponent
        total={total}
        defaultPageSize={defaultPageSize}
        defaultCurrent={defaultPage}
      />
    </PaginationContainer>
  );
}

PaginationComponent.propTypes = {
  total: PropTypes.number.isRequired,
  defaultPageSize: PropTypes.number.isRequired,
  defaultPage: PropTypes.number.isRequired,
};

export default PaginationComponent;

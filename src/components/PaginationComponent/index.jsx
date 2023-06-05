import React, { useState } from 'react';
// import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import { PaginationContainer, CustomPaginationComponent, CurrentPageIndicator } from './paginationComponentStyes';

function PaginationComponent({ total, pageSize, defaultPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const onPaginationChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  };

  return (
    <PaginationContainer>
      <CustomPaginationComponent
        total={total}
        pageSize={pageSize}
        defaultCurrent={defaultPage}
        onChange={onPaginationChange}
        showSizeChanger={false}
      />
      <CurrentPageIndicator>{`Current page: ${currentPage}`}</CurrentPageIndicator>
    </PaginationContainer>
  );
}

PaginationComponent.propTypes = {
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  defaultPage: PropTypes.number.isRequired,
};

export default PaginationComponent;

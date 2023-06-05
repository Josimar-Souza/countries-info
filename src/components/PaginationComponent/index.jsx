import React from 'react';
// import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import { PaginationContainer, CustomPaginationComponent, CurrentPageIndicator } from './paginationComponentStyes';

function PaginationComponent({
  total,
  pageSize,
  defaultPage,
  setCurrentPage,
  currentPage,
}) {
  const onPaginationChange = (page) => {
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
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default PaginationComponent;

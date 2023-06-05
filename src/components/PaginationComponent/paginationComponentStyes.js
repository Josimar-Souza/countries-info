import styled from 'styled-components';
import { Pagination } from 'antd';

export const PaginationContainer = styled.div`
  border: 1px solid red;
`;

export const CustomPaginationComponent = styled(Pagination)`
  &&& {
    li {
      background-color: ${({ theme }) => theme.colors.searchBackgroundColor};
      border: none;
      border-radius: 15px;

      a {
        color: ${({ theme }) => theme.colors.searchColor};
      }

      button {
        color: ${({ theme }) => theme.colors.searchColor};
      }

      div {
        background-color: ${({ theme }) => theme.colors.searchBackgroundColor};
        border: none;
        border-radius: 10px;
        color: ${({ theme }) => theme.colors.searchColor};

        span {
          color: ${({ theme }) => theme.colors.searchColor};
        }
      }
    }
  }
`;

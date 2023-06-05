import styled from 'styled-components';
import { Pagination } from 'antd';

export const PaginationContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 100%;
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

export const CurrentPageIndicator = styled.p`
  background-color: ${({ theme }) => theme.colors.searchBackgroundColor};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.searchColor};
  font-size: 13px;
  margin-left: 20px;
  padding: 10px;
  text-align: center;
`;

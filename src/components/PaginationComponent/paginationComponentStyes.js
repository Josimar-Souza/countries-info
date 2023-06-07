import styled from 'styled-components';
import { Pagination } from 'antd';

export const PaginationContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media only screen and (max-width: 512px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const CustomPaginationComponent = styled(Pagination)`
  &&& {
    li {
      background-color: ${({ theme }) => theme.colors.cardsButton};
      border: none;
      border-radius: 15px;

      a {
        color: ${({ theme }) => theme.colors.searchColor};
      }

      button {
        color: ${({ theme }) => theme.colors.searchColor};
      }

      div {
        background-color: ${({ theme }) => theme.colors.cardsButton};
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
  background-color: ${({ theme }) => theme.colors.cardsButton};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.searchColor};
  font-size: 13px;
  margin-left: 20px;
  padding: 10px;
  text-align: center;

  @media only screen and (max-width: 512px) {
    margin 0;
    margin-top: 15px;
  }
`;

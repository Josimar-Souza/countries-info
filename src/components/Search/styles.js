import styled from 'styled-components';

export const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  min-height: 100px;
  width: 100%;

  form {
    width: 100%;
  }
`;

export const FormItemsContainer = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.searchColor};
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    background-color: ${({ theme }) => theme.colors.cardsButton};
    border: none;
    color: ${({ theme }) => theme.colors.searchColor};
    font-size: 22px;
    font-weight: 700;
    min-height: 50px;
    width: 10%;
  }
`;

export const TermSearchContainer = styled.div`
  margin-right: 15px;
  width: 50%;

  input {
    background-color: ${({ theme }) => theme.colors.cardsButton};
    border: none;
    color: ${({ theme }) => theme.colors.searchColor};
    font-size: 22px;
    font-weight: 700;
    margin-left: 10px;
    min-height: 50px;
    width: 100%;
  }
`;

export const TypeSearchContainer = styled.div`
  margin-right: 15px;
  width: 10%;
`;

export const TypeSelect = styled.select`
  background-color: ${({ theme }) => theme.colors.cardsButton};
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.searchColor};
  font-size: 22px;
  font-weight: 700;
  min-height: 50px;
  padding: 10px;
  width: 100%;
`;

export const TypeSelectOption = styled.option`
  font-size: 22px;
  font-weight: 700;
`;

export const ClearFilterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  width: 100%;

  button {
    background-color: ${({ theme }) => theme.colors.cardsButton};
    border: none;
    color: ${({ theme }) => theme.colors.searchColor};
  }
`;

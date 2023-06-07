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

    @media only screen and (max-width: 512px) {
      font-size: 4vw;
      min-height: 20px;
      width: 30%;
    }
  }

  @media only screen and (max-width: 512px) {
    flex-direction: column;
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
    margin-left: 8px;
    min-height: 50px;
    width: 100%;

    @media only screen and (max-width: 512px) {
      font-size: 4vw;
    }
  }

  @media only screen and (max-width: 512px) {
    margin: 0;
    margin-bottom: 15px;
    width: 100%;
  }
`;

export const TypeSearchContainer = styled.div`
  margin-right: 15px;
  width: 10%;

  @media only screen and (max-width: 512px) {
    margin: 0;
    margin-bottom: 15px;
    width: 100%;
  }
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

  @media only screen and (max-width: 512px) {
    font-size: 4vw;
    margin: 0;
    margin-left: 8px;
    width: 100%;
  }
`;

export const TypeSelectOption = styled.option`
  font-size: 22px;
  font-weight: 700;

  @media only screen and (max-width: 512px) {
    font-size: 4vw;
  }
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

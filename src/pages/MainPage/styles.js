import styled from 'styled-components';

export const MainContainer = styled.main`
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  wdith: 100%;
`;

export const ContentContainer = styled.div`
  width: 90%;
`;

export const CountriesCardsContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  width: 100%;
`;

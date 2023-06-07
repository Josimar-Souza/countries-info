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
  margin: 20px 0;
  width: 90%;
`;

export const CountriesCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  width: 100%;

  @media only screen and (max-width: 512px) {
    align-items: center;
    flex-direction: column;
  }
`;

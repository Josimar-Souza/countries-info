import styled from 'styled-components';
import { Button } from 'antd';

export const CountryCardContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cards};
  border-radius: 8px;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.colors.cardsShadow};
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 5px;
  width: 18%;

  @media only screen and (max-width: 512px) {
    width: 70%;
  }
`;

export const CountryImageContainer = styled.div`
  height: 15vh;
  width: 85%;
`;

export const CountryImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const CountryTitle = styled.h1`
  color: ${({ theme }) => theme.colors.cardsText};
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
`;

export const CountryInfo = styled.p`
  color: ${({ theme }) => theme.colors.cardsText};
  margin: 5px 0;
`;

export const CustomButton = styled(Button)`
  &&& {
    background-color: ${({ theme }) => theme.colors.cardsButton};
    border: none;
    color: ${({ theme }) => theme.colors.cardsText};
    margin-top: 15px;
  }
`;

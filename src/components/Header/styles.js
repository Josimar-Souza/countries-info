import styld from 'styled-components';

export const HeaderContainer = styld.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  justify-content: space-between;
  min-height: 5rem;
  padding: 10px;
  width: 100%;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.darkModeButtonText};
    font-size: 1vw;
    font-weight: 600;
    margin-right: 40px;

    @media only screen and (max-width: 512px) {
      font-size: 2.5vw;
    }
  }
`;

export const HeaderTitle = styld.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2vw;
  margin: 0;
  margin-left: 40px;

  @media only screen and (max-width: 512px) {
    font-size: 3.2vw;
  }
`;

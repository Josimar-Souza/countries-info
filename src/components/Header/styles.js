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
    font-size: 18px;
    font-weight: 600;
    margin-right: 40px;
  }
`;

export const HeaderTitle = styld.h1`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  margin-left: 40px;
`;

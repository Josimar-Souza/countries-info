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

import styled from 'styled-components';

const MainContainer = styled.main`
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
  wdith: 100%;
`;

export default MainContainer;

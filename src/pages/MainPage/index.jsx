import React from 'react';
import { MainContainer, ContentContainer } from './styles';
import Header from '../../components/Header';
import Search from '../../components/Search';

function MainPage() {
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <Search />
      </ContentContainer>
    </MainContainer>
  );
}

export default MainPage;

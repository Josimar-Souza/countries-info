import React, { useContext } from 'react';
import { MainContainer, ContentContainer } from './styles';
import Header from '../../components/Header';
import Search from '../../components/Search';
import PaginationComponent from '../../components/PaginationComponent';
import { countriesContext } from '../../context/CountriesContext';

function MainPage() {
  const { countries } = useContext(countriesContext);

  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <Search />
        <PaginationComponent defaultPage={1} pageSize={10} total={countries.length} />
      </ContentContainer>
    </MainContainer>
  );
}

export default MainPage;

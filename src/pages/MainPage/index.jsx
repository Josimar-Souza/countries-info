import React, { useContext, useState, useEffect } from 'react';
import { MainContainer, ContentContainer } from './styles';
import Header from '../../components/Header';
import Search from '../../components/Search';
import PaginationComponent from '../../components/PaginationComponent';
import { countriesContext } from '../../context/CountriesContext';

function MainPage() {
  const { countries } = useContext(countriesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageCountries, setCurrentPageCountries] = useState([]);

  useEffect(() => {
    const endIndex = currentPage * 10;
    const startIndex = endIndex - 10;

    const currentCountries = countries.slice(startIndex, endIndex);

    setCurrentPageCountries(currentCountries);

    window.scrollTo(0, 0);
  }, [currentPage, countries]);
  console.log(currentPageCountries);
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <Search />
        <PaginationComponent
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          defaultPage={1}
          pageSize={10}
          total={countries.length}
        />
      </ContentContainer>
    </MainContainer>
  );
}

export default MainPage;

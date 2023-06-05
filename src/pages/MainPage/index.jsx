import React, { useContext, useState, useEffect } from 'react';
import { MainContainer, ContentContainer, CountriesCardsContainer } from './styles';
import Header from '../../components/Header';
import Search from '../../components/Search';
import PaginationComponent from '../../components/PaginationComponent';
import { countriesContext } from '../../context/CountriesContext';
import CountryCard from '../../components/CountryCard';
import generateRandomUUID from '../../helpers/randomUUID';

function MainPage() {
  const { countries } = useContext(countriesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageCountries, setCurrentPageCountries] = useState([]);

  useEffect(() => {
    const endIndex = currentPage * 10;
    const startIndex = endIndex - 10;

    const currentCountries = countries.slice(startIndex, endIndex);

    setCurrentPageCountries(currentCountries);
  }, [currentPage, countries]);

  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <Search />
        <CountriesCardsContainer>
          {currentPageCountries.map((country) => (
            <CountryCard key={generateRandomUUID(country.name.common)} country={country} />
          ))}
        </CountriesCardsContainer>
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

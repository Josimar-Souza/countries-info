import React, { useContext, useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import { MainContainer, ContentContainer, CountriesCardsContainer } from './styles';
import Header from '../../components/Header';
import Search from '../../components/Search';
import PaginationComponent from '../../components/PaginationComponent';
import { countriesContext } from '../../context/CountriesContext';
import CountryCard from '../../components/CountryCard';
import generateRandomUUID from '../../helpers/randomUUID';
import sendNotification from '../../helpers/sendNotification';
import DetailsModal from '../../components/DetailsModal';

function MainPage() {
  const { countries } = useContext(countriesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageCountries, setCurrentPageCountries] = useState([]);
  const [detailsModalInfo, setDetailsModalInfo] = useState({ open: false, cca2: '' });

  useEffect(() => {
    const endIndex = currentPage * 10;
    const startIndex = endIndex - 10;

    try {
      const currentCountries = countries.slice(startIndex, endIndex);

      setCurrentPageCountries(currentCountries);
    } catch (e) {
      sendNotification('Não foi possível realizar a pesquisa, verifique o termo pesquisado e tenha a certeza de pesquisar em ingles', 'error');
    }
  }, [currentPage, countries]);

  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <Search setCurrentPage={setCurrentPage} />
        {isMobile
          ? (
            <PaginationComponent
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              defaultPage={1}
              pageSize={10}
              total={countries.length}
            />
          )
          : null}
        <CountriesCardsContainer>
          {currentPageCountries.map((country) => (
            <CountryCard
              key={generateRandomUUID(country.name.common)}
              country={country}
              setDetailsModalInfo={setDetailsModalInfo}
            />
          ))}
        </CountriesCardsContainer>
        {!isMobile
          ? (
            <PaginationComponent
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              defaultPage={1}
              pageSize={10}
              total={countries.length}
            />
          )
          : null}
      </ContentContainer>
      <DetailsModal
        detailsModalInfo={detailsModalInfo}
        setDetailsModalInfo={setDetailsModalInfo}
      />
    </MainContainer>
  );
}

export default MainPage;

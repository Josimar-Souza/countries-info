import React, { useState, useContext } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import {
  SearchContainer,
  TermSearchContainer,
  TypeSearchContainer,
  FormItemsContainer,
  TypeSelect,
  TypeSelectOption,
  ClearFilterContainer,
} from './styles';
import { countriesContext } from '../../context/CountriesContext';

function Search() {
  const { searchCountries, getAllCountries } = useContext(countriesContext);

  const [hasSearched, setHasSearched] = useState(false);

  const onSearchFinished = (values) => {
    setHasSearched(true);

    searchCountries(values.term, values.type);
  };

  const onClearSearchClicked = () => {
    setHasSearched(false);

    getAllCountries();
  };

  return (
    <SearchContainer>
      <Form layout="inline" name="countries-search" onFinish={onSearchFinished}>
        <FormItemsContainer>
          <SearchOutlined style={{ fontSize: '28px' }} />
          <TermSearchContainer>
            <Form.Item
              name="term"
            >
              <Input placeholder="Type the term to search" />
            </Form.Item>
          </TermSearchContainer>
          <TypeSearchContainer>
            <Form.Item name="type" initialValue="name">
              <TypeSelect defaultValue="name">
                <TypeSelectOption value="name">Name</TypeSelectOption>
                <TypeSelectOption value="currency">Currency</TypeSelectOption>
                <TypeSelectOption value="capital">Capital city</TypeSelectOption>
                <TypeSelectOption value="region">Region</TypeSelectOption>
                <TypeSelectOption value="lang">Language</TypeSelectOption>
              </TypeSelect>
            </Form.Item>
          </TypeSearchContainer>
          <Button htmlType="submit">
            <SearchOutlined />
            Search
          </Button>
        </FormItemsContainer>
        <ClearFilterContainer>
          {hasSearched ? <Button onClick={onClearSearchClicked}>Clear search</Button> : null}
        </ClearFilterContainer>
      </Form>
    </SearchContainer>
  );
}

export default Search;

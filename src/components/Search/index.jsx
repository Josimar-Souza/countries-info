import React, { useState } from 'react';

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

function Search() {
  const [search, setSearch] = useState({ values: { term: '', type: '' }, hasSearched: false });

  const onSearchFinished = (values) => {
    setSearch({ values: { term: values.term, type: values.type }, hasSearched: true });
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
          {search.hasSearched ? <Button>Clear search</Button> : null}
        </ClearFilterContainer>
      </Form>
    </SearchContainer>
  );
}

export default Search;

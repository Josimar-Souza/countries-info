import React, { useContext } from 'react';
import { Button } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import { HeaderContainer, HeaderTitle } from './styles';
import { themeContext } from '../../context/ThemeContext';

function Header() {
  const { currTheme, changeTheme } = useContext(themeContext);

  return (
    <HeaderContainer>
      <HeaderTitle>Where in the world?</HeaderTitle>
      <Button onClick={changeTheme}>
        {currTheme.darkMode ? <BulbFilled /> : <BulbOutlined />}
        {currTheme.darkMode ? 'Light mode' : 'Dark mode'}
      </Button>
    </HeaderContainer>
  );
}

export default Header;

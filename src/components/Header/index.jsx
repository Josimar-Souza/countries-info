import React, { useContext } from 'react';
import { Button } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import { HeaderContainer, HeaderTitle } from './styles';
import { themeContext } from '../../context/ThemeContext';

function Header() {
  const { currTheme } = useContext(themeContext);

  return (
    <HeaderContainer>
      <HeaderTitle>Where in the world?</HeaderTitle>
      <Button>
        {currTheme.darkMode ? <BulbFilled /> : <BulbOutlined />}
        Dark Mode
      </Button>
    </HeaderContainer>
  );
}

export default Header;

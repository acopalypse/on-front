import React from 'react';
import * as S from './AppLayout.styled';

import Footer from '../../elements/Footer/Footer';
import Header from '../../elements/Header/Header';

const AppLayout = ({ children }) => {
  return (
    <S.Wrapper>
      <Header />
      <S.Inner>{children}</S.Inner>
      <Footer />
    </S.Wrapper>
  );
};

export default AppLayout;

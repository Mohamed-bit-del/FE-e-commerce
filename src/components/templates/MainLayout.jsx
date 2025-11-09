import React from 'react';

import Header from '../organisms/header';
import Footer from '../organisms/footer';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;

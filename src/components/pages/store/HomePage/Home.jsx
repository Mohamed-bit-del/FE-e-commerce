import React from 'react';

import Slider from '../../../organisms/slider/Slider';
import ProductList from '../../../organisms/product-list';
import MainLayout from '../../../templates/MainLayout';

function Home() {
  return (
    <MainLayout>
      <Slider />

      <ProductList />
    </MainLayout>
  );
}

export default Home;

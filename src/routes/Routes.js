import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ShoppingCartPage from '../components/pages/store/shopping-cart';
import Dashboard from '../components/pages/Admin/dashboard-page';
import DetailsProducts from '../components/pages/Admin/details-products-page';
import CreateProductPage from '../components/pages/Admin/create-product-page';
import LoginPage from '../components/pages/auth/LoginPage';
import RegisterPage from '../components/pages/auth/RegisterPage';
const Home = React.lazy(() => import('../components/pages/store/HomePage/Home'));
const ProductDetails = React.lazy(() => import('../components/pages/store/ProductDetailsPage'));

function RoutesApp() {
  return (
    <>
      {/* App Buyer */}
      <Routes>
        <Route path="/store" element={<Home />} />
        <Route path="/store/product/:id" element={<ProductDetails />} />
        <Route path="/store/cart" element={<ShoppingCartPage />} />
      </Routes>

      {/* App Admin */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/product/:id" element={<DetailsProducts />} />
        <Route path="/admin/create-product" element={<CreateProductPage />} />
      </Routes>
    </>
  );
}

export default RoutesApp;

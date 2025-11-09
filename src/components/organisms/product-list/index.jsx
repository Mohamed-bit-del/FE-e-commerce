import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../../redux/slices/cartSlice';
import Card from '../../molecules/product-card';
import { useGetProductsQuery } from '../../molecules/api/productApi';
import ProductSkeleton from '../../molecules/skeletons/ProductSkeleton';

function ProductList() {
  const dispatch = useDispatch();
  const { data: products, isLoading, isFetching } = useGetProductsQuery();

  if (isLoading && !products) {
    return <ProductSkeleton />;
  }

  const handelAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToCart(product));
  };

  return (
    <div className="container m-auto">
      {isFetching && <div className="text-center text-gray-500 mb-3">جارٍ تحديث البيانات...</div>}

      {isLoading && !products ? (
        <ProductSkeleton />
      ) : (
        <div className="grid grid-cols-4 gap-5">
          {products?.map((product, idx) => (
            <Card key={product?._id || idx} product={product}>
              <Card.Img />
              <Card.Title />
              <Card.Content />
              <Card.Actions onAddToCart={(e) => handelAddToCart(e, product)} />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;

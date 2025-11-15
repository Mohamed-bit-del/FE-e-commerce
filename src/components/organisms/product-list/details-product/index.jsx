import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../../../redux/slices/cartSlice';
import { useGetProductIdQuery } from '../../../../api/productApi';
import imgCart from '../../../../assets/images/img-cart.jpg';
import Button from '../../../atoms/Button/Button';

function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { data: product } = useGetProductIdQuery(id);

  const handelAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container m-auto">
      <div className="flex flex-col gap-5">
        <img src={imgCart} alt="" className="rounded-xl h-[700px] w-full" />

        <h2 className="font-Roboto font-bold">{product?.product_name}</h2>
        <p className="font-Roboto">{product?.category}</p>

        <Button
          size="md"
          variant="secondary"
          onClick={() => handelAddToCart(product)}
          className="font-Roboto w-full"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;

import React, {useMemo} from 'react';
import { useSelector } from 'react-redux';

import { useGetProductsQuery } from '../../../../api/productApi';
import Cart from './Cart';

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  const { data: products } = useGetProductsQuery();

  const mergaedProducts = useMemo(() => {
    if(!products) return [];

    return cart?.cartItem?.map((item) => {
      const product = products.find((product) => product._id === item.productID);

      return {
        ...product,
        ...item,
      };
    });
  }, [cart, products]);

  return (
    <div className="container m-auto">
      <div className="flex justify-between gap-20 my-16">
        <div className="w-1/2">
          <h2 className='pb-5'>Total Price</h2>
          <p>{cart?.cartItem?.reduce((total, item) => total + item.price * item.quantity, 0)}$</p>
        </div>

        <div className="flex flex-col gap-5 w-1/2">
          <Cart cart={mergaedProducts} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

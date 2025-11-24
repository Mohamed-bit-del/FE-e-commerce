import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Cart from './Cart';
import Button from '../../../atoms/Button/Button';
import { useGetProductsQuery } from '../../../../api/productApi';
import { useCreateOrderMutation } from '../../../../api/orderApi';

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  const { data: products } = useGetProductsQuery();
  const [createOrder] = useCreateOrderMutation();

  const mergaedProducts = useMemo(() => {
    if (!products) return [];

    return cart?.cartItem?.map((item) => {
      const product = products.find((product) => product.product_id === item.product_id);

      return {
        ...product,
        ...item,
      };
    });
  }, [cart, products]);

  const handleCreateOrder = async () => {
    console.log('Create Order', mergaedProducts);
    try {
      await createOrder(mergaedProducts);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container m-auto">
      <div className="my-16">
        <div className="flex justify-between gap-20">
          <div className="w-1/2">
            <h2 className="pb-5">Total Price</h2>
            <p>{cart?.cartItem?.reduce((total, item) => total + item.price * item.quantity, 0)}$</p>
          </div>

          <div className="flex flex-col gap-5 w-1/2">
            <Cart cart={mergaedProducts} />
          </div>
        </div>

        <Button size="md" variant="secondary" className="mt-10" onClick={handleCreateOrder}>
          Create Order
        </Button>
      </div>
    </div>
  );
}

export default ShoppingCart;

import React from 'react';
import { useSelector } from 'react-redux';
import { Minus, Plus, X } from 'lucide-react';
import { useDispatch } from 'react-redux';

import { removeItem } from '../../../../redux/slices/cartSlice';

function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handelRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="container m-auto">
      <div className="flex flex-col gap-5">
        {cart?.cartItem.map((item, idx) => (
          <div className="flex items-center gap-5" key={item?.id || idx}>
            <X color="#F00" className="cursor-pointer" onClick={() => handelRemoveItem(item)} />
            <div className="flex flex-col">
              <p>{item?.title}</p>
              <p>{item?.body}</p>
            </div>
            <Minus className="cursor-pointer" />
            <p>{item?.quantity}</p>
            <Plus className="cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;

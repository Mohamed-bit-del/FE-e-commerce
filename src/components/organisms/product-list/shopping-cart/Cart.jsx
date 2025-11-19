import React from 'react';
import { useDispatch } from 'react-redux';
import { Minus, Plus, X } from 'lucide-react';

import { removeItem } from '../../../../redux/slices/cartSlice';

function Cart({cart}) {
  const dispatch = useDispatch();

  const handelRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      {cart.map((item, idx) => (
        <div className="flex items-center justify-between gap-5 w-full" key={item?.id || idx}>
          <X color="#F00" className="cursor-pointer" onClick={() => handelRemoveItem(item)} />

          <p className='max-w-10 w-full text-center'>{item?.price}</p>

          <div className="flex gap-5 max-w-24 w-full">
            <Minus className="cursor-pointer" />
            <p>{item?.quantity}</p>
            <Plus className="cursor-pointer" />
          </div>

          <p className='max-w-28 w-full truncate'>{item?.product_name}</p>
        </div>
      ))}
    </>
  );
}

export default Cart;
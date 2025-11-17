import React, { createContext, useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import imgCart from '../../../assets/images/img-cart.jpg';
import Button from '../../atoms/Button/Button';

const CardContext = createContext(null);

function Card({ children, product }) {
  const contextValue = useMemo(() => product || {}, [product]);

  if (!product) return <div className="animate-pulse h-20 bg-gray-200 rounded-xl" />;

  return (
    <CardContext.Provider value={contextValue}>
      <Link to={`/store/product/${product?._id}`}>
        <div className="p-2 border border-gray-300 rounded-xl flex flex-col gap-4 justify-between min-h-[300px] h-full">
          {children}
        </div>
      </Link>
    </CardContext.Provider>
  );
}

export default Card;

Card.Img = function CartImg() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <motion.img
        src={imgCart}
        loading="lazy"
        alt="Cart-Image"
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
    </div>
  );
};

Card.Title = function CartTitle() {
  const product = useContext(CardContext);

  return <h2 className="font-Roboto font-bold truncate w-48 ">{product?.product_name}</h2>;
};

Card.Content = function CartContent() {
  const product = useContext(CardContext);

  return <p className="font-Roboto">{product?.category}</p>;
};

Card.Quantity = function CartContent() {
  const product = useContext(CardContext);

  return <p className="font-Roboto">{product?.quantity}</p>;
};

Card.Actions = function CartActions({ onAddToCart }) {
  return (
    <div className="text-center">
      <Button size="md" variant="secondary" className="font-Roboto w-full" onClick={onAddToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

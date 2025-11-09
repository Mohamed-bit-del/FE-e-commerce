import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';

function Header() {
  const controls = useAnimation();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const handleAddToCart = async () => {
    await controls.start({
      scale: [1, 1.3, 1],
      rotate: [0, -10, 10, 0],
      transition: { duration: 0.5, ease: 'easeInOut' },
    });
  };

  useEffect(() => {
    handleAddToCart();
  }, []);

  return (
    <div className="container m-auto">
      <div className="flex justify-between py-7 gap-5">
        <h1>Logo</h1>

        <nav>
          <ul className="flex justify-between gap-2">
            <Link to="/store">
              <li>Home</li>
            </Link>

            <Link to="/store/orders">
              <li>Orders</li>
            </Link>

            <Link to="/store/about">
              <li>About</li>
            </Link>
          </ul>
        </nav>

        <motion.div animate={controls} className="relative">
          <Link to="/store/cart">
            <ShoppingCart className="w-6 h-6 text-primary cursor-pointer" />
          </Link>

          {totalQuantity > 0 && (
            <motion.span
              key={totalQuantity}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
            >
              {totalQuantity}
            </motion.span>
          )}
        </motion.div>

        {/* <button
          onClick={handleAddToCart}
          className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-red-600 transition'
        >
          Add to Cart
        </button> */}
      </div>
    </div>
  );
}

export default Header;

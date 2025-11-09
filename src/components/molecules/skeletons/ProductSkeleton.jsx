import React from 'react';

function ProductSkeleton() {
  const skeletonCards = Array(4).fill(0);

  return (
    <div className='container m-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {skeletonCards.map((_, index) => (
          <div
            key={index}
            className='bg-white shadow rounded-lg p-4 animate-pulse flex flex-col'
          >
            <div className='h-40 bg-gray-200 rounded-md mb-4'></div>

            <div className='h-4 bg-gray-200 rounded w-3/4 mb-2'></div>

            <div className='h-3 bg-gray-200 rounded w-full mb-1'></div>

            <div className='h-3 bg-gray-200 rounded w-5/6 mb-4'></div>

            <div className='h-8 bg-gray-300 rounded-md w-1/2 self-center'></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSkeleton;

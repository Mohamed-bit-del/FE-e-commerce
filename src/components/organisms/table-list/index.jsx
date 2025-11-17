import React from 'react';
import { Link } from 'react-router-dom';

import Table from '../../molecules/table/Table';
import FilterSearch from '../../molecules/table/FilterSearch';
import { useDeleteProductMutation, useGetProductsQuery } from '../../../api/productApi';

function TableList() {
  const { data: products } = useGetProductsQuery();
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleRemoveProduct = async (id) => {
    try {
      await deleteProduct(id);
      console.log(id, 'Deleted Successfully');
    } catch (err) {
      console.error(err, 'Removed Item Failed');
    }
  };

  return (
    <div className="container m-auto">
      <FilterSearch />
      <div className="relative overflow-x-auto mt-4 border border-gray rounded-xl">
        <Table>
          <Table.header>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </Table.header>

          <Table.body>
            {products?.map((item, idx) => (
              <tr
                key={idx}
                className="odd:bg-white even:bg-gray-300 hover:bg-gray-200 border-b transition-colors"
              >
                <th
                  scope="row"
                  className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap"
                >
                  {item.product_name}
                </th>
                <td className="px-6 py-4 text-center text-gray-900">{item.quantity}</td>
                <td className="px-6 py-4 text-center text-gray-900">{item.category}</td>
                <td className="px-6 py-4 text-center text-gray-900">{item.price} $</td>
                <td className="px-6 py-4 text-center flex justify-center items-center gap-5">
                  <Link
                    to={`/admin/product/${item._id}`}
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleRemoveProduct(item._id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                  >
                    {isLoading ? 'Removed...' : 'Remove'}
                  </button>
                </td>
              </tr>
            ))}
          </Table.body>

          <Table.footer>
            <td colSpan="5" className="px-6 py-4 text-center text-gray-900">
              Footer Text
            </td>
          </Table.footer>
        </Table>
      </div>
    </div>
  );
}

export default TableList;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../../atoms/input/Input';
import { useUpdateProductMutation } from '../../../../api/productApi';
import Button from '../../../atoms/Button/Button';

function DetailsItem() {
  const { id } = useParams();
  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const [storageData, setStorageData] = useState({});

  const handeStorageData = (e) => {
    const { name, value } = e.target;
    setStorageData((prevData) => ({
      ...prevData,
      [name]: name == 'quantity' ? Number(value) : value,
    }));
  };

  const handelEditProduct = async (id) => {
    try {
      await updateProduct({ id, data: storageData });
      console.log(id, 'Updated Successfully');
    } catch (err) {
      console.error(err, 'Update Item Failed');
    }
  };

  return (
    <div className="container m-auto">
      <div className="">
        <h2>Edit Details Item</h2>
        <div className="grid grid-cols-2 gap-4 my-8">
          <Input
            type="text"
            name="category"
            className="w-full"
            placeholder="Category"
            onChange={(e) => handeStorageData(e)}
          />
          <Input
            type="text"
            name="product_name"
            className="w-full"
            placeholder="Product Name"
            onChange={(e) => handeStorageData(e)}
          />
          <Input
            type="text"
            name="quantity"
            className="w-full"
            placeholder="quantity"
            onChange={(e) => handeStorageData(e)}
          />
          <Input
            type="text"
            name="price"
            className="w-full"
            placeholder="Price"
            onChange={(e) => handeStorageData(e)}
          />
        </div>

        <Button
          variant="secondary"
          size="lg"
          onClick={() => handelEditProduct(id)}
          disabled={isLoading}
        >
          Update Product
        </Button>
      </div>
    </div>
  );
}

export default DetailsItem;

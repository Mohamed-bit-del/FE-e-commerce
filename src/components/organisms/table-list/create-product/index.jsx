import React, { useState } from 'react';

import { useCreateProductMutation } from '../../../../api/productApi';
import Input from '../../../atoms/input/Input';
import Button from '../../../atoms/Button/Button';

function CreateProduct() {
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const [storageData, setStorageData] = useState({});

  const handeStorageData = (e) => {
    const { name, value } = e.target;
    setStorageData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelCreateProduct = async () => {
    console.log('>>storageData', storageData);
    try {
      await createProduct(storageData);
      console.log('Updated Successfully');
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
            name="color"
            className="w-full"
            placeholder="Color"
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
          onClick={() => handelCreateProduct()}
          disabled={isLoading}
        >
          Create Product
        </Button>
      </div>
    </div>
  );
}

export default CreateProduct;

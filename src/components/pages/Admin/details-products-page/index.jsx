import React from 'react';

import DashboardLayout from '../../../templates/DashboardLayout';
import EditProduct from '../../../organisms/table-list/edit-product';

function DetailsProducts() {
  return (
    <DashboardLayout>
      <EditProduct />
    </DashboardLayout>
  );
}

export default DetailsProducts;

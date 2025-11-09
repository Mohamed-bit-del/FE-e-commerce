import React from 'react';

import Footer from '../organisms/footer';

function DashboardLayout({ children }) {
  return (
    <div className="my-8">
      {children}
      <Footer />
    </div>
  );
}

export default DashboardLayout;
